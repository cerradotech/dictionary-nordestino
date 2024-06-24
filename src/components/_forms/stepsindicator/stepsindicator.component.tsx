import { FC, Fragment, memo, useMemo, useState } from 'react';

import { translate } from '~/utils';

import { Conditional } from '../../_layouts';

import {
  Button,
  ButtonsWrapper,
  Content,
  Heading,
  StepIndicator,
  StepItem,
  StepLabel,
  StepLine,
  StepRoundedIcon,
  Wrapper,
} from './stepsindicator.styles';

const StepsIndicator: FC<StepComponentProps> = ({
  steps,
  activeSectionId = 0,
}) => {
  const [localActiveSectionId, setLocalActiveSectionId] =
    useState(activeSectionId);

  const { stepContent, onNextAction, onPrevAction } = useMemo(() => {
    return steps.filter((_setp, index) => index === localActiveSectionId)[0];
  }, [localActiveSectionId, steps, activeSectionId]);

  const prevBtn: StepActionProps = useMemo(() => {
    return {
      label: translate('defaultActions.back'),
      type: 'button',
      ...onPrevAction,
    };
  }, [onPrevAction]);

  const handlePrevStep = () => {
    if (prevBtn?.callback) {
      prevBtn.callback();
    }

    if (prevBtn?.preventAction) return;

    setLocalActiveSectionId((prev) => {
      if (prev === 0) return prev;
      return prev - 1;
    });
  };

  const nextBtn: StepActionProps = useMemo(() => {
    return {
      label: translate('defaultActions.advance'),
      type: 'button',
      ...onNextAction,
    };
  }, [onPrevAction]);

  const handleNextStep = () => {
    if (nextBtn?.callback) {
      nextBtn.callback();
    }

    if (nextBtn?.preventAction) return;

    setLocalActiveSectionId((prev) => {
      if (prev < steps.length - 1) return prev + 1;
      return prev;
    });
  };

  const handleStepClick = (stepIndex: number) => {
    if (stepIndex >= localActiveSectionId) return;
    setLocalActiveSectionId(stepIndex);
  };

  return (
    <Wrapper>
      <Heading>
        <StepIndicator>
          {steps.map(({ stepLabel }, index) => (
            <Fragment key={String(index)}>
              <StepItem onClick={() => handleStepClick(index)}>
                <StepRoundedIcon active={+(index <= localActiveSectionId)}>
                  {index + 1}
                </StepRoundedIcon>
                <StepLabel active={+(index <= localActiveSectionId)}>
                  {stepLabel}
                </StepLabel>
              </StepItem>

              <Conditional condition={index !== steps.length - 1}>
                <StepLine active={+(index + 1 <= localActiveSectionId)} />
              </Conditional>
            </Fragment>
          ))}
        </StepIndicator>
      </Heading>

      <Content>{stepContent}</Content>

      <ButtonsWrapper>
        <Button
          accessibility={prevBtn.label!}
          loading={prevBtn?.loading}
          onPress={handlePrevStep}
          type={prevBtn.type!}
          flat
        >
          {prevBtn.label!}
        </Button>

        <Button
          accessibility={nextBtn.label!}
          loading={nextBtn?.loading}
          onPress={handleNextStep}
          type={nextBtn.type!}
        >
          {nextBtn.label!}
        </Button>
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default memo(StepsIndicator);
