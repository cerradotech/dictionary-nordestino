import React, { FC, PropsWithChildren, ReactNode } from 'react';

import { ThemeProvider, inject, observer } from '~/modules';

import { ThemeStore } from '../stores';

type Props = {
  theme: ThemeStore;
  children: ReactNode;
};

const ThemeProviderContainer: FC<PropsWithChildren<Props>> = ({
  children,
  theme,
}) => {
  return <ThemeProvider theme={theme.theme}>{children}</ThemeProvider>;
};

export default inject('theme')(observer(ThemeProviderContainer));
