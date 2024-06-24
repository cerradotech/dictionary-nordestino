/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { getTheme } from '~/core';
import { toNumber } from '~/modules';

import { toOnlyNumbers } from './toOnlyNumbers';

export const getFontSize = (props: any): number => {
  const baseSize = toNumber(getTheme(`fontSizes.md`)(props));
  const fontSizeFromTheme = getTheme(`fontSizes.${props.variant}`)(props);
  return toNumber(fontSizeFromTheme) || baseSize;
};

export const getLineHeight = (props: any): number => {
  const fontSizeFromTheme = getTheme(`fontSizes.${props.variant}`)(props);
  const lineHeightVariant = getTheme(`lineHeights.${props.lineHeightVariant}`)(
    props,
  );
  const lineHeightPercentage = lineHeightVariant
    ? toOnlyNumbers(lineHeightVariant as string)
    : '120';
  return (Number(fontSizeFromTheme) * Number(lineHeightPercentage)) / 100;
};
