import { useContext } from 'react';

import { ModalContext } from '~/core';

export const useModal = (): ModalContextData => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useModal must be used within an ModalContextProvider');
  }

  return context;
};
