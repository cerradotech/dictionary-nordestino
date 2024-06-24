import { ToastMessage } from '~/components';
import { theme } from '~/core';
import { Toastify, get } from '~/modules';

import { TOAST_THEME_TYPE, TOAST_TYPE } from '../enums';

export const showAlert = ({
  title,
  message,
  position = 'top-left',
  type = TOAST_TYPE.ERROR,
}: ShowAlertProps) => {
  const themeType = type === TOAST_TYPE.ERROR ? TOAST_THEME_TYPE.DANGER : type;
  Toastify.toast(
    <ToastMessage title={title} message={message} typeToast={themeType} />,
    {
      position,
      type,
      style: {
        backgroundColor: get(theme, `colors.${themeType}.100.value`),
        border: `0.5px solid ${get(theme, `colors.${themeType}.500.value`)}`,
        borderRadius: '8px',
      },
    },
  );
};
