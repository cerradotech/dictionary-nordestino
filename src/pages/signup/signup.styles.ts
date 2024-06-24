import {
  MessageBalloon as MessageBalloonComponent,
  PageWrapper,
  StepsIndicator as StepsIndicatorComponent,
  TextInput as TextInputComponent,
  Typography,
} from '~/components';
import { getTheme, ifStyle, pxToRem } from '~/core';
import { FormikForm, styled } from '~/modules';
import { breakpoints } from '~/utils';

type Props = {
  match?: number;
};

const match = ifStyle('match');

const spacingMd = getTheme('spacing.md');
const spacingLg = getTheme('spacing.lg');
const spacingXxl = getTheme('spacing.xxl');

const danger500 = getTheme('colors.danger.500');
const success500 = getTheme('colors.success.500');

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
  margin-bottom: ${spacingXxl}px;
  margin-top: ${spacingMd}px;
  text-align: center;
`;

export const TextInputWrapper = styled.div``;

export const TextInput = styled(TextInputComponent)``;

export const FormContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: ${pxToRem(500)};
  padding: ${spacingLg}px;
  gap: ${spacingXxl}px;

  @media screen and (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
`;

export const StepsIndicator = styled(StepsIndicatorComponent)``;

export const HintsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const HintTitle = styled(Typography).attrs({ variant: 'xs' })`
  text-align: center;
  font-weight: 500;
  margin-bottom: ${spacingMd}px;
`;
export const Hint = styled(Typography).attrs({ variant: 'xs' })<Props>`
  color: ${match(success500, danger500)};
`;

export const SectionWithDisclaimer = styled.section`
  display: flex;
  flex-direction: column;
`;

export const MessageBalloon = styled(MessageBalloonComponent)`
  max-width: ${pxToRem(500)};
  width: 100%;
`;
