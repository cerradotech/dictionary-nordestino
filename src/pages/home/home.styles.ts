import { PageWrapper } from '~/components';
import { getTheme } from '~/core';
import { styled } from '~/modules';

const primaryColor = getTheme('colors.primary.500');

export const Wrapper = styled(PageWrapper)`
  justify-content: center;
  flex: 1;
`;

export const Heading = styled.h3`
  font-weight: normal;
  text-align: center;
  color: ${primaryColor};
`;
