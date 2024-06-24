import { getTheme } from '~/core';
import { styled } from '~/modules';
import { breakpoints } from '~/utils';

const backgroundColor = getTheme('colors.background.300');
const spacingLgXxl = getTheme('spacing.xxl');
const spacingMax = getTheme('spacing.max');

export const Wrapper = styled.div`
  background-color: ${backgroundColor};
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;

  @media ${breakpoints.tablet} {
    padding: ${spacingLgXxl}px;
    padding-top: ${spacingMax}px;
  }
`;

export const Content = styled.div`
  flex: 1;
  flex-direction: column;
`;
