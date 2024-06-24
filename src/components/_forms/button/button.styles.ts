import { getTheme, ifStyle, pxToRem } from '~/core';
import { css, styled } from '~/modules';

import { Animation, Typography } from '../../_generics';

// colors
const primary500 = getTheme('colors.primary.500');
const secondary500 = getTheme('colors.secondary.500');
const secondary700 = getTheme('colors.secondary.700');
const tertiary500 = getTheme('colors.tertiary.500');
const text50 = getTheme('colors.text.50');

// spacing
const spacingSm = getTheme('spacing.sm');
const spacingMd = getTheme('spacing.md');

// border
const borderRadiusMd = getTheme('borderRadius.md');
const borderWidthXxs = getTheme('borderWidth.xxs');

// ifStyle
const isPrimary = ifStyle('$primary');
const isSecondary = ifStyle('$secondary');
const isTertiary = ifStyle('$tertiary');
const isFlat = ifStyle('$flat');
const isBorderLess = ifStyle('$borderLess');
const isLoading = ifStyle('$loading');
const isDisabled = ifStyle('$disabled');

export const ButtonRaw = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  min-height: ${pxToRem(45)};
  padding: ${spacingSm}px ${spacingMd}px;
  gap: ${spacingSm}px;
  border-radius: ${borderRadiusMd}px;
  border: ${borderWidthXxs}px solid;
  transition: all 0.2s;

  /* disabled and loading*/
  opacity: ${isDisabled(0.5, isLoading(0.5))};
  pointer-events: ${isDisabled('none', isLoading('none'))};

  ${isPrimary(css`
    color: ${secondary500};
    border-color: ${primary500};
    background-color: ${primary500};
  `)}

  ${isSecondary(css`
    color: ${text50};
    border-color: ${secondary500};
    background-color: ${secondary500};
  `)}

  ${isTertiary(css`
    color: ${secondary700};
    border-color: ${tertiary500};
    background-color: ${tertiary500};
  `)}

  ${isFlat(css`
    color: ${primary500};
    border-color: ${primary500};
    background-color: transparent;
  `)}

  ${isBorderLess(css`
    color: ${secondary500};
    border-color: transparent;
    background-color: transparent;
  `)}


  > svg {
    font-size: ${pxToRem(17)};
  }
  &:hover {
    filter: brightness(0.8);
  }
`;

export const ButtonTitle = styled(Typography).attrs({
  variant: 'sm',
})`
  display: flex;
  font-weight: 500;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${spacingSm}px;

  > svg {
    font-size: ${pxToRem(32)};
  }
`;

export const AnimationComponent = styled(Animation)`
  width: ${pxToRem(30)};
`;
