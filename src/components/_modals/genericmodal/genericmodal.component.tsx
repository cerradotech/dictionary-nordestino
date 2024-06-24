import { FC, PropsWithChildren } from 'react';

import { CloseIcon, ModalWrapper } from './genericmodal.styles';

const GenericModal: FC<PropsWithChildren<GenericModalProps>> = ({
  isOpen,
  backdropColor,
  blockBackdrop,
  close,
  children,
}) => (
  <ModalWrapper
    isOpen={isOpen}
    ariaHideApp={false}
    onRequestClose={close}
    shouldCloseOnOverlayClick={!blockBackdrop}
    style={{
      overlay: {
        backgroundColor: backdropColor,
      },
    }}
  >
    <CloseIcon onClick={close} />
    {children}
  </ModalWrapper>
);

export default GenericModal;
