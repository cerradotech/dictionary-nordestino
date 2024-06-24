import { getShadow, getTheme, ifStyle } from '~/core';
import { styled } from '~/modules';

const background100 = getTheme('colors.background.100');
const borderRadius = getTheme('borderRadius.lg');

const hasShadow = ifStyle('$shadow');
const hasOnPress = ifStyle('onPress');

const shadowStyle = (props: BlankCardProps): string =>
  !props.$shadow || props.$shadow === 'none'
    ? ''
    : getShadow(`boxShadow.${props.$shadow}`)(props);

export const CardView = styled.div<BlankCardProps>`
  border: none;
  background-color: ${background100};
  border-radius: ${borderRadius}px;
  width: 100%;
  cursor: ${hasOnPress('pointer', 'default')};
  ${hasShadow((props: BlankCardProps) => shadowStyle(props), '')};
`;
