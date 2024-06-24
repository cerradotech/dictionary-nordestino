import {
  Button as ButtonComponent,
  PageWrapper,
  TextInput as TextInputComponent,
  Typography,
} from '~/components';
import { getTheme, pxToRem } from '~/core';
import { FormikForm, styled } from '~/modules';
import { breakpoints } from '~/utils';

const text300 = getTheme('colors.text.300');
const text500 = getTheme('colors.text.500');

const spacingXs = getTheme('spacing.xs');
const spacingMd = getTheme('spacing.md');
const spacingXl = getTheme('spacing.xl');

export const Wrapper = styled(PageWrapper)``;

export const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Form = styled(FormikForm)`
  width: 100%;
  height: 100%;
  padding: ${spacingMd}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Heading = styled(Typography).attrs({ variant: 'xxl' })`
  font-weight: 600;
  text-align: center;
  margin-bottom: ${spacingMd}px;
`;

export const FormContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: ${pxToRem(500)};
  padding-bottom: ${spacingMd}px;
  margin: ${spacingMd}px 0;
  gap: ${spacingXl}px;

  border-bottom: 1px solid ${text300};

  @media screen and (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
`;

export const TextInput = styled(TextInputComponent)``;

export const ActionsWrapper = styled.div`
  max-width: ${pxToRem(500)};
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacingXs}px;
`;

export const Button = styled(ButtonComponent)``;

export const Caption = styled(Typography).attrs({ variant: 'xxs' })`
  font-weight: 600;
  cursor: pointer;
  color: ${text500};
  margin-top: ${spacingXs}px;

  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.8);
  }
`;
