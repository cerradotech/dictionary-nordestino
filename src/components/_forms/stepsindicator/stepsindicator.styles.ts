import { getTheme, ifStyle, pxToRem } from '~/core';
import { styled } from '~/modules';
import { breakpoints } from '~/utils';

import { Typography } from '../../_generics';
import ButtonComponent from '../button/button.component';

const fontFamiliesTextT3 = getTheme('fontFamilies.text.t3');

const sizingLg = getTheme('sizing.lg');

const spacingMd = getTheme('spacing.md');
const spacingXl = getTheme('spacing.xl');
const spacingXxl = getTheme('spacing.xxl');

const primary500 = getTheme('colors.primary.500');
const secondary500 = getTheme('colors.secondary.500');
const tertiary500 = getTheme('colors.tertiary.500');
const text500 = getTheme('colors.text.500');

const fontSizesXs = getTheme('fontSizes.xs');
const fontSizesSm = getTheme('fontSizes.sm');

const borderWidthMin = getTheme('borderWidth.min');
const borderRadiusCircle = getTheme('borderRadius.circle');

const isActive = ifStyle('active');

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: ${breakpoints.tablet}) {
    align-items: center;
  }
`;

export const Heading = styled.div`
  width: 70%;
  margin: 0 auto;
  padding-bottom: ${spacingXxl}px;
  border-bottom: ${borderWidthMin}px solid ${text500}30;

  @media screen and (max-width: ${breakpoints.mobile}) {
    width: 95%;
  }
`;

export const StepIndicator = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 0 ${spacingXl}px;
  position: relative;
`;

export const StepItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 1;
  overflow: hidden;
  cursor: pointer;
`;

export const StepRoundedIcon = styled.div<StyledStepActionProps>`
  height: ${sizingLg}px;
  width: ${sizingLg}px;
  border-radius: ${borderRadiusCircle}px;
  background: ${isActive(primary500, tertiary500)};
  color: ${isActive(secondary500, text500)};
  position: relative;
  line-height: 50px;
  font-size: ${fontSizesSm}px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${fontFamiliesTextT3};
`;

export const StepLabel = styled(Typography).attrs({
  variant: 'sm',
})<StyledStepActionProps>`
  text-align: center;
  position: absolute;
  bottom: -${sizingLg}px;
  color: ${isActive(secondary500, text500)};
  font-weight: 500;
  max-width: ${pxToRem(136)};
  width: 100%;

  > & + & {
    left: 50%;
    transform: translateX(-50%);
  }

  @media screen and (max-width: ${breakpoints.mobile}) {
    font-size: ${fontSizesXs}px;
    bottom: -20px;
  }
`;

export const StepLine = styled.div<StyledStepActionProps>`
  width: 100%;
  height: 2px;
  background: ${isActive(primary500, tertiary500)};
  flex: 1;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  overflow: scroll;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  gap: ${spacingMd}px;
  margin: 0 auto;

  @media screen and (max-width: ${breakpoints.mobile}) {
    width: 95%;
  }
`;

export const Button = styled(ButtonComponent)`
  max-width: ${pxToRem(200)};
  width: 100%;
`;
