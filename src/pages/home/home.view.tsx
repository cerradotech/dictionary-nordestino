import { FC } from 'react';

import { translate } from '~/utils';

import { Heading, Wrapper } from './home.styles';

type Props = {
  todo?: string;
};

const HomeView: FC<Props> = ({ todo }) => (
  <Wrapper>
    <Heading>
      {translate('homePage.home')} {todo}
    </Heading>
  </Wrapper>
);

export default HomeView;
