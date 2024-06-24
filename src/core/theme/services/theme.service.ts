import { get } from '~/modules';

import { THEME_TYPE } from '../enums';
import { Flatten, ShadowSettings, ThemeProps, ThemeType } from '../types';

const pickShadow = (shadow: ShadowSettings): string => {
  if (shadow.color) {
    const colorValues = shadow.color
      .replace('rgba(', '')
      .replace(')', '')
      .split(',');
    return `elevation: ${shadow.blur}; box-shadow: ${shadow.x}px ${shadow.y}px ${shadow.blur}px rgb(${colorValues[0]}, ${colorValues[1]}, ${colorValues[2]}); shadow-opacity: ${colorValues[3]};`;
  }

  return '';
};

const getValue = (itemValue: any, parentKey: any): any => {
  const itemMap = {} as any;
  if ('value' in itemValue) {
    itemMap[parentKey] = itemValue.value;
  } else {
    const itemObjMap = new Map(Object.entries(itemValue));
    itemObjMap.forEach((item: any, itemKey) => {
      if ('value' in item) {
        if (item.type === THEME_TYPE.OPACITY && typeof item.value === 'string')
          itemMap[itemKey] = parseFloat(item.value) / 100.0;
        else if (
          item.type === THEME_TYPE.BOX_SHADOW &&
          typeof item.value === 'object'
        ) {
          itemMap[itemKey] = pickShadow(item.value);
        } else itemMap[itemKey] = item.value;
      } else {
        itemMap[itemKey] = getValue(item, itemKey);
      }
    });
  }
  return itemMap;
};

export const themeFormatter = (rawTheme: any): ThemeType => {
  const objMap = new Map(Object.entries(rawTheme));
  const themeMap = {} as any;
  objMap.forEach((item: any, parentKey) => {
    const itemMap = getValue(item, parentKey);
    themeMap[parentKey] = itemMap;
  });
  return themeMap as ThemeType;
};

export const getTheme =
  (themeProp: Flatten<ThemeType>) =>
  ({ theme }: ThemeProps): string | number | null => {
    return get(theme, themeProp);
  };

export const getShadow =
  (themeProp: string) =>
  ({ theme }: any) =>
    get(theme, themeProp);

export const pxToRem = (pixels: number, baseline = 16): string => {
  return `${pixels / baseline}rem`;
};

export const ifStyle =
  (prop: any) =>
  (truthy: any, falsy: any = null) =>
  (props: { [x: string]: any }): any =>
    props[prop] ? truthy : falsy;
