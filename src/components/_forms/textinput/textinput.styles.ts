import { getTheme, ifStyle, pxToRem } from '~/core';
import { InputMask, styled } from '~/modules';
import { AiOutlineEye, AiOutlineEyeInvisible, IoClose } from '~/utils';

import { Typography } from '../../_generics';

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
  flex-direction: column;
  min-width: ${pxToRem(100)};
  gap: ${spacingSm}px;
`;

export const Label = styled(Typography).attrs({ variant: 'md' })`
  opacity: 0.7;
  color: ${text900};
  font-weight: ${fontWeightMedium};
`;

export const InputContainer = styled.div<StyledTextInputProps>`
  width: 100%;
  box-sizing: border-box;
  align-items: center;
  height: ${pxToRem(45)};
  padding: ${spacingSm}px;
  gap: ${spacingSm}px;
  background-color: ${background100};
  border: ${borderWidthXxs}px solid ${text300};
  border-radius: ${borderRadiusMd}px;
  color: ${text500};
  border-color: ${isFocus(colorPrimary500, isError(danger500))};
  background-color: ${isDisabled(text300)}70;
  cursor: ${isDisabled('not-allowed')};
  > svg {
    color: ${text500};
  }
`;

export const Caption = styled(Typography).attrs({ variant: 'xs' })`
  color: ${danger500};
`;

export const EyeIcon = styled(AiOutlineEye).attrs({
  size: 23,
})<StyledTextInputProps>`
  cursor: ${isDisabled('not-allowed', 'pointer')};
`;

export const OutlineEyeIcon = styled(AiOutlineEyeInvisible).attrs({
  size: 23,
})<StyledTextInputProps>`
  cursor: ${isDisabled('not-allowed', 'pointer')};
`;

export const ClearIcon = styled(IoClose).attrs({
  size: 17,
})`
  cursor: pointer;
`;

export const StyledInput = styled(InputMask)<StyledTextInputProps>`
  flex-grow: 1;
  border: none;
  font-family: ${fontFamilyT3};
  cursor: ${isDisabled('not-allowed')};
  &:focus {
    outline: none;
  }
`;
