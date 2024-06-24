import { BlankCard, PageWrapper, TextInput, Typography } from '~/components';
import { getTheme, pxToRem } from '~/core';
import { styled } from '~/modules';

const primaryColor = getTheme('colors.primary.500');

export const Wrapper = styled(PageWrapper)`
  justify-content: center;
  flex: 1;
`;

export const Heading = styled(Typography).attrs({
  variant: 'xxl',
})`
  font-weight: 500;
  text-align: center;
  margin-top: ${pxToRem(50)};
  color: ${primaryColor};
`;

export const Input = styled(TextInput)`
  width: ${pxToRem(600)};
`;

export const WrapperInput = styled.div`
  display: flex;
  width: 100%;
  margin-top: ${pxToRem(50)};
  justify-content: center;
  gap: ${pxToRem(10)};
`;

export const WrapperButtons = styled.div`
  display: flex;
  width: 100%;
  margin-top: ${pxToRem(20)};
  justify-content: center;
  gap: ${pxToRem(10)};
`;

export const WrapperList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  height: ${pxToRem(900)};
  margin-top: ${pxToRem(50)};
  gap: ${pxToRem(10)};
  padding: 10px ${pxToRem(50)};

  overflow: auto;
`;

export const Card = styled(BlankCard)`
  padding: ${pxToRem(15)};
  height: ${pxToRem(120)};
  gap: ${pxToRem(10)};
  overflow: auto;
  justify-content: space-between;
`;

export const Title = styled(Typography).attrs({ variant: 'md' })`
  font-weight: 500;
  opacity: 80%;
`;

export const Description = styled(Typography).attrs({ variant: 'sm' })`
  opacity: 70%;
`;

export const WrapperText = styled.div`
  flex-direction: column;
`;
