import { getTheme } from '~/core';
import { css, styled } from '~/modules';

import Typography from '../typography/typography.component';

const sizingLg = getTheme('sizing.lg');

const spacingSm = getTheme('spacing.sm');
const spacingMd = getTheme('spacing.md');

const opacityDisabled = getTheme('opacity.empty');

const borderRadiusMd = getTheme('borderRadius.md');

export const Wrapper = styled.div<StyledMessageBalloonProps>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: ${spacingMd}px;
  border-radius: ${borderRadiusMd}px;
  gap: ${spacingSm}px;

  ${({ type }) => css`
    border: 1px solid ${getTheme(`colors.${type}.500`)}99;
    background-color: ${getTheme(`colors.${type}.100`)};

    svg {
      color: ${getTheme(`colors.${type}.500`)};
      width: ${sizingLg}px;
    }
  `};
`;

export const Text = styled(Typography).attrs({ variant: 'xs' })`
  opacity: ${opacityDisabled};
  text-align: center;
`;
