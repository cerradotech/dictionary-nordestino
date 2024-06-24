import { getTheme } from '~/core';
import { css, styled } from '~/modules';

import Typography from '../typography/typography.component';

const sizingMd = getTheme('sizing.md');
const spacingSm = getTheme('spacing.sm');

const borderRadiusSm = getTheme('borderRadius.sm');

const text50 = getTheme('colors.text.50');

export const Wrapper = styled(Typography).attrs({
  variant: 'xxs',
})<StyledPillBadgeProps>`
  padding: 0px ${spacingSm}px;
  border-radius: ${borderRadiusSm}px;
  height: ${sizingMd}px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;

  color: ${text50};
  text-transform: uppercase;

  ${({ type }) => css`
    background-color: ${getTheme(`colors.${type}.500`)};
  `};
`;
