import { FC } from 'react';

import { observer } from '~/modules';

import HomeView from './home.view';

export const HomeContainer: FC = () => {
  return <HomeView />;
};

export default observer(HomeContainer);
