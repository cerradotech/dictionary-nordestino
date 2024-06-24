import { getTheme, pxToRem } from '~/core';
import { styled } from '~/modules';
import { BiMenu, LogoHorizontalWhite } from '~/utils';

const spacingMd = getTheme('spacing.md');

const secondary500 = getTheme('colors.secondary.500');
const primary500 = getTheme('colors.primary.500');

const spacingSm = getTheme('spacing.sm');

const borderWidthLg = getTheme('borderWidth.lg');

const fontSizesXxl = getTheme('fontSizes.xxl');

export const Wrapper = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${secondary500};
  padding: ${spacingSm}px 0;
  border-bottom: ${borderWidthLg}px solid ${primary500};
  position: sticky;
`;

export const Logo = styled(LogoHorizontalWhite).attrs({
  height: pxToRem(36),
})``;

export const MenuIcon = styled(BiMenu)`
  color: ${primary500};
  font-size: ${fontSizesXxl}px;
  position: absolute;
  left: ${spacingMd}px;
`;
