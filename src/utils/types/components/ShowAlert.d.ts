declare type ShowAlertProps = {
  title?: string;
  message: string;
  position?: Aggregates.Toastify.ToastPosition;
  type?: TOAST_TYPE;
};

declare type ToastMessageProps = ShowAlertProps & {
  typeToast: ENUMS.TOAST_THEME_TYPE | ENUMS.TOAST_TYPE;
};

declare type StyledToastMessageProps = {
  type: ENUMS.TOAST_THEME_TYPE | ENUMS.TOAST_TYPE;
};
