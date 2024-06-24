import { Typography } from '~/components/_generics';
import { getTheme, ifStyle } from '~/core';
import { styled } from '~/modules';
import { LogoLobo, breakpoints } from '~/utils';

const direction = ifStyle('direction');

const secondary300 = getTheme('colors.secondary.300');
const secondary500 = getTheme('colors.secondary.500');
const text50 = getTheme('colors.text.50');

const sizingXl = getTheme('sizing.xl');
const fontSizesXl = getTheme('fontSizes.xl');

const spacingSm = getTheme('spacing.sm');
const spacingMd = getTheme('spacing.md');

export const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Brands = styled.section`
  background-color: ${secondary500};
`;

export const Logo = styled(LogoLobo).attrs((props) => ({
  width: sizingXl(props),
  height: sizingXl(props),
  color: text50(props),
}))``;

export const Disclaimer = styled.section`
  background-color: ${secondary300};
`;

export const ContentWrapper = styled.div<StyledPageFooterProps>`
  margin: 0 auto;
  max-width: 1200px;
  padding: ${spacingSm}px ${spacingMd}px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: ${breakpoints.mobile}) {
    flex-direction: ${direction('row', 'column')};
    gap: ${spacingMd}px;
  }
`;

export const Social = styled.nav`
  display: flex;
  flex-direction: row;
  gap: ${spacingMd}px;

  > svg {
    font-size: ${fontSizesXl}px;
    color: ${text50};
  }
`;

export const Label = styled(Typography).attrs({ variant: 'xxs' })`
  color: ${text50};
  display: flex;
  flex-wrap: nowrap;

  > a {
    color: ${text50};
  }
`;
