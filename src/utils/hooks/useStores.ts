import React from 'react';

import { stores } from '~/core';
import { MobXProviderContext } from '~/modules';

export const useStores = (): typeof stores => {
  return React.useContext(MobXProviderContext).rootStore;
};
