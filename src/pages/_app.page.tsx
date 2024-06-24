import React from 'react';

import type { AppProps } from 'next/app';

import { ScrollToTop, ToastContainer } from '~/components';
import {
  Bootstrap,
  GlobalStyle,
  RootContextProvider,
  ThemeProvider,
  stores,
} from '~/core';
import { I18nextProvider, NextSeo, Provider } from '~/modules';
import { i18n } from '~/utils';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <I18nextProvider i18n={i18n}>
      <ScrollToTop />
      <NextSeo title="Template React | CerradoTech" />
      <Provider rootStore={stores}>
        <ThemeProvider theme={stores.theme}>
          <RootContextProvider>
            <Bootstrap />
            <ToastContainer />
            <GlobalStyle theme={stores.theme} />
            <Component {...pageProps} />
          </RootContextProvider>
        </ThemeProvider>
      </Provider>
    </I18nextProvider>
  );
};
export default App;
