/** Modal Context */
declare type ModalSettingsProps = {
  content: React.ReactNode;
  backdropCustomColor?: string;
  blockBackdropAction?: boolean;
  onHide?: () => void;
};

declare type ModalContextData = {
  isOpen: boolean;
  show: (settings: ModalSettingsProps) => void;
  hide: () => void;
};
