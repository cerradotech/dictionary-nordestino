import Link from 'next/link';

import { getTheme, pxToRem } from '~/core';
import { styled } from '~/modules';
import { LogoHorizontalWhite } from '~/utils';

import { Button as ButtonBase } from '../../../../_forms';
import { Typography } from '../../../../_generics';

const secondary500 = getTheme('colors.secondary.500');
const primary500 = getTheme('colors.primary.500');
const text50 = getTheme('colors.text.50');

const sizingXxs = getTheme('sizing.xxs');

const spacingXs = getTheme('spacing.xs');
const spacingMd = getTheme('spacing.md');
const spacingXl = getTheme('spacing.xl');

const borderWidthLg = getTheme('borderWidth.lg');

const fontSizesXl = getTheme('fontSizes.xl');

export const Wrapper = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  background-color: ${secondary500};
  padding: ${spacingMd}px ${spacingXl}px;
  border-bottom: ${borderWidthLg}px solid ${primary500};
  position: sticky;
  gap: ${pxToRem(24)};
  box-sizing: border-box;
`;

export const Logo = styled(LogoHorizontalWhite).attrs({
  width: pxToRem(162),
  height: pxToRem(48),
})``;

export const Menu = styled.nav`
  display: flex;
  flex-direction: row;
  flex: 1;
  gap: ${pxToRem(16)};
`;

export const Item = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  transition: filter 0.3s;

  > svg {
    font-size: ${fontSizesXl}px;
    color: ${primary500};
    margin-right: ${spacingXs}px;
  }

  &:hover {
    filter: brightness(0.6);
  }
`;

export const Label = styled(Typography).attrs({ variant: 'sm' })`
  font-weight: 600;
  color: ${text50};
`;

export const Actions = styled.section`
  display: flex;
  flex-direction: row;
  gap: ${spacingMd}px;
`;

export const Divider = styled.div`
  height: auto;
  background-color: ${primary500};
  width: ${sizingXxs}px;
`;

export const Button = styled(ButtonBase)`
  width: ${pxToRem(100)};
`;
