import {
  ButtonHTMLAttributes,
  ChangeEventHandler,
  ComponentType,
  DetailedHTMLProps,
  HTMLAttributes,
  HTMLButtonElement,
  HTMLInputElement,
  HTMLOptionElement,
  HTMLSelectElement,
  HTMLSpanElement,
  InputHTMLAttributes,
  OptionHTMLAttributes,
  PropsWithChildren,
  ReactNode,
  SelectHTMLAttributes,
} from 'react';

import { InputMaskProps, Toastify } from '~/modules';
import { STATUS, TOAST_THEME_TYPE, TOAST_TYPE } from '~/utils/enums';

declare module '*.png';

declare module '*.jpg';

declare global {
  namespace Aggregates {
    export {
      Toastify,
      PropsWithChildren,
      ReactNode,
      ButtonHTMLAttributes,
      ComponentType,
      HTMLButtonElement,
      InputHTMLAttributes,
      HTMLInputElement,
      ChangeEventHandler,
      DetailedHTMLProps,
      OptionHTMLAttributes,
      HTMLOptionElement,
      SelectHTMLAttributes,
      HTMLSelectElement,
      InputMaskProps,
      HTMLAttributes,
      HTMLSpanElement,
    };
  }
  namespace ENUMS {
    export { STATUS, TOAST_THEME_TYPE, TOAST_TYPE };
  }
}
