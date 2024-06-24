import { FC, PropsWithChildren } from 'react';

import { CardView } from './blankcard.styles';

const BlankCard: FC<PropsWithChildren<BlankCardProps>> = ({
  children,
  onPress,
  $shadow = 'xs',
  ...rest
}) => (
  <CardView onClick={onPress} $shadow={$shadow} {...rest}>
    {children}
  </CardView>
);

export default BlankCard;
