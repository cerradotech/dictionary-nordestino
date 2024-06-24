import { getTheme, ifStyle, pxToRem } from '~/core';
import { styled } from '~/modules';
import { FiMinus, FiPlus } from '~/utils';

import { Typography } from '../../_generics';
import ButtonBase from '../button/button.component';

// spacing
const spacingSm = getTheme('spacing.sm');
const fontWeightMedium = getTheme('fontWeights.medium');

// colors
const text300 = getTheme('colors.text.300');
const text500 = getTheme('colors.text.500');
const text900 = getTheme('colors.text.900');
const background100 = getTheme('colors.background.100');
const danger500 = getTheme('colors.danger.500');
const colorPrimary500 = getTheme('colors.primary.500');

// border
const borderRadiusMd = getTheme('borderRadius.md');
const borderWidthXxs = getTheme('borderWidth.xxs');

// fontFamily
const fontFamilyT3 = getTheme('fontFamilies.text.t3');

// ifStyle
const isFocus = ifStyle('$focus');
const isError = ifStyle('$error');
const isDisabled = ifStyle('$disabled');

export const Wrapper = styled.div`
  flex: 1;
  flex-direction: column;
  min-width: ${pxToRem(250)};
  gap: ${spacingSm}px;
`;

export const Label = styled(Typography).attrs({ variant: 'md' })`
  opacity: 0.7;
  color: ${text900};
  font-weight: ${fontWeightMedium};
`;

export const InputContainer = styled.div<StyledNumberInputProps>`
  width: 100%;
  box-sizing: border-box;
  align-items: center;
  height: ${pxToRem(45)};
  gap: ${spacingSm}px;
  background-color: ${background100};
  border: ${borderWidthXxs}px solid ${text300};
  border-radius: ${borderRadiusMd}px;
  color: ${text500};
  border-color: ${isFocus(colorPrimary500, isError(danger500))};
  background-color: ${isDisabled(text300)}70;
  overflow: hidden;
  cursor: ${isDisabled('not-allowed')};
  > svg {
    color: ${text500};
  }
`;

export const Caption = styled(Typography).attrs({ variant: 'xs' })`
  color: ${danger500};
`;

export const PlusIcon = styled(FiPlus).attrs({
  size: 16,
})``;
export const MinusIcon = styled(FiMinus).attrs({
  size: 16,
})``;

export const StyledInput = styled.input<StyledNumberInputProps>`
  flex-grow: 1;
  border: none;
  font-family: ${fontFamilyT3};
  height: 100%;
  text-align: center;
  cursor: ${isDisabled('not-allowed')};
  &:focus {
    outline: none;
  }

  /** remove default arrows from number input */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Button = styled(ButtonBase)`
  border-radius: 0;
`;
