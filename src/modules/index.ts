import * as DateHelper from 'date-fns';
import * as Toastify from 'react-toastify';
import * as FormValidator from 'yup';

export { DateHelper, Toastify, FormValidator };
export {
  type NextApiRequest,
  type NextApiResponse,
  type GetServerSideProps,
  type InferGetServerSidePropsType,
} from 'next';
export { Poppins } from 'next/font/google';
export { DefaultSeo, NextSeo } from 'next-seo';
export { useRouter } from 'next/router';
export {
  Formik as FormBehavior,
  Form as FormikForm,
  useFormikContext,
  type FormikProps,
  type FormikHelpers,
  type FormikErrors,
  type FormikBag,
} from 'formik';
export { default as Animation } from 'react-lottie';
export {
  observer,
  inject,
  Provider,
  enableStaticRendering,
  MobXProviderContext,
} from 'mobx-react';
export {
  createGlobalStyle,
  ThemeProvider,
  css,
  default as styled,
} from 'styled-components';
export {
  action,
  makeObservable,
  observable,
  runInAction,
  computed,
  makeAutoObservable,
} from 'mobx';
export {
  isEmpty,
  groupBy,
  get,
  toNumber,
  merge,
  replace,
  toUpper,
} from 'lodash';
export {
  initializeApp as InitFirebaseApp,
  type FirebaseApp,
} from 'firebase/app';
export {
  doc,
  getDoc,
  getFirestore as InitFirestore,
  type Firestore,
} from 'firebase/firestore';
export {
  type AnalyticsCallOptions,
  type EventParams,
  getAnalytics as InitAnalytics,
  logEvent as FbAnalyticsLogEvent,
  setAnalyticsCollectionEnabled,
  isSupported as AnalyticsIsSupported,
  type Analytics,
} from 'firebase/analytics';
export {
  type RemoteConfig,
  fetchAndActivate,
  getBoolean,
  getRemoteConfig as InitRemoteConfig,
  getValue,
  getAll,
} from 'firebase/remote-config';
export { default as TagManager, type TagManagerArgs } from 'react-gtm-module';
export {
  default as axios,
  type AxiosRequestConfig,
  type AxiosResponse,
  type AxiosError,
  type AxiosInstance,
} from 'axios';
export {
  default as InputMask,
  type Props as InputMaskProps,
} from 'react-input-mask';
export { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
export { serialize, parse as parseCookies } from 'cookie';
export {
  default as ReactModal,
  type Props as ReactModalProps,
} from 'react-modal';
export {
  clearPersistedStore,
  makePersistable,
  configurePersistable,
} from 'mobx-persist-store';
export { default as i18next } from 'i18next';
export { default as i18nextLanguageDetector } from 'i18next-browser-languagedetector';
export { I18nextProvider } from 'react-i18next';
