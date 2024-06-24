import { FC } from 'react';

const Conditional: FC<ConditionalComponentProps> = ({
  condition,
  children,
  hasElse,
}): any => {
  if (condition) return children;

  return hasElse || null;
};

export default Conditional;
