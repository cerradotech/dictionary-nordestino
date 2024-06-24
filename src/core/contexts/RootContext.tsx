import React, { ComponentProps, FC, Fragment, PropsWithChildren } from 'react';

import ModalContextProvider from './ModalContext';

const combine = (
  ...components: FC<PropsWithChildren>[]
): FC<PropsWithChildren> => {
  return components.reduce(
    (AccumulatedComponents, CurrentComponent) => {
      return function ({
        children,
      }: ComponentProps<FC<PropsWithChildren>>): JSX.Element {
        return (
          <AccumulatedComponents>
            <CurrentComponent>{children}</CurrentComponent>
          </AccumulatedComponents>
        );
      };
    },
    ({ children }) => <Fragment>{children}</Fragment>,
  );
};

const RootContextProvider = combine(...[ModalContextProvider]);

export default RootContextProvider;
