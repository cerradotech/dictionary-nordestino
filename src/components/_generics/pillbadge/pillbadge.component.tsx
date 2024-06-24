import { FC } from 'react';

import { STATUS } from '~/utils';

import { Wrapper } from './pillbadge.styles';

const PillBadge: FC<PillBadgeProps> = ({ label, type = STATUS.DEFAULT }) => (
  <Wrapper type={type}>{label}</Wrapper>
);

export default PillBadge;
