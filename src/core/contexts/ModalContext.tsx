import React, {
  Fragment,
  PropsWithChildren,
  createContext,
  useCallback,
  useMemo,
  useState,
} from 'react';

import { GenericModal } from '~/components';
import { useStores } from '~/utils';

export const ModalContext = createContext<ModalContextData>(
  {} as ModalContextData,
);

const ModalContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { theme } = useStores().theme;

  const DEFAULT_SETTING: ModalSettingsProps = {
    content: null,
    onHide: undefined,
    blockBackdropAction: false,
    backdropCustomColor: theme.colors.shade.blackFade,
  };

  const [isOpen, setIsOpen] = useState(false);
  const [settingsApplied, setSettingsApplied] =
    useState<ModalSettingsProps>(DEFAULT_SETTING);

  const show = useCallback((s: ModalSettingsProps) => {
    setSettingsApplied({ ...DEFAULT_SETTING, ...s });
    setIsOpen(true);
  }, []);

  const hide = useCallback(() => {
    setIsOpen(false);

    if (settingsApplied.onHide) settingsApplied.onHide();

    setTimeout(() => {
      setSettingsApplied(DEFAULT_SETTING);
    }, 100);
  }, [settingsApplied]);

  const modal = useMemo(() => {
    if (settingsApplied.content) {
      return (
        <GenericModal
          isOpen={isOpen}
          backdropColor={settingsApplied.backdropCustomColor!}
          blockBackdrop={settingsApplied.blockBackdropAction!}
          close={hide}
        >
          {settingsApplied.content}
        </GenericModal>
      );
    }

    return <Fragment />;
  }, [settingsApplied, hide]);

  const value = useMemo(
    () => ({
      isOpen,
      show,
      hide,
    }),
    [isOpen, show, hide],
  );

  return (
    <ModalContext.Provider value={value}>
      {children}

      {modal}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
