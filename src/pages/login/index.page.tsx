import React, { FC, PropsWithChildren } from 'react';

import { FormBehavior, FormikHelpers, observer, useRouter } from '~/modules';
import { ROUTES, TOAST_TYPE, showAlert, translate } from '~/utils';

import { FormValues, initialValues, validationSchema } from './login.form';
import LoginView from './login.view';

export const LoginContainer: FC<PropsWithChildren> = () => {
  const router = useRouter();

  const handleNavigateToSignUp = () => {
    router.push(ROUTES.SIGN_UP);
  };

  const onSubmit = async (
    _values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>,
  ): Promise<void> => {
    try {
      setSubmitting(true);
      showAlert({
        title: translate('defaultActions.success'),
        message: translate('loginPage.loggedInSuccessfully'),
        type: TOAST_TYPE.SUCCESS,
      });
      router.back();
    } catch ({ message }) {
      showAlert({ title: translate('errors.opsSomethingWentWrong'), message });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <FormBehavior
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <LoginView onNavigateToSignUp={handleNavigateToSignUp} />
    </FormBehavior>
  );
};

export default observer(LoginContainer);
