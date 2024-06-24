import { FC, PropsWithChildren } from 'react';

import { Text } from './typography.styles';

const Typography: FC<PropsWithChildren<TypographyComponentProps>> = ({
  variant,
  children,
  ...rest
}) => (
  <Text variant={variant} {...rest}>
    {children}
  </Text>
);

export default Typography;
