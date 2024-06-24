import React, { FC, PropsWithChildren, useState } from 'react';

import { FormBehavior, FormikHelpers, observer, useRouter } from '~/modules';
import {
  PASSWORD_RULES,
  ROUTES,
  TOAST_TYPE,
  containsNumber,
  containsSpecialChars,
  containsUppercase,
  showAlert,
  translate,
} from '~/utils';

import { FormValues, initialValues, validationSchema } from './signup.form';
import SignUp from './signup.view';

export const SignUpContainer: FC<PropsWithChildren> = () => {
  const router = useRouter();

  const [activeSectionId, setActiveSectionId] = useState(0);
  const [password, setPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [passwordRules, setPasswordRules] = useState<PasswordRules>({
    characters: false,
    upperLetter: false,
    specialCharacter: false,
    numbers: false,
  });

  const onSubmit = async (
    _values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>,
  ): Promise<void> => {
    try {
      setSubmitting(true);
      showAlert({
        title: translate('defaultActions.success'),
        message: translate('signUpPage.yourRegistrationWasSuccessful'),
        type: TOAST_TYPE.SUCCESS,
      });
      router.push(ROUTES.LOGIN);
    } catch ({ message }) {
      setActiveSectionId(0);
      showAlert({ title: translate('errors.opsSomethingWentWrong'), message });
    } finally {
      setSubmitting(false);
    }
  };

  const verifyPasswordRules = (pass: string) => {
    setPassword(pass);
    setPasswordRules({
      characters: pass.length >= PASSWORD_RULES.MIN_PASSWORD_LENGTH,
      upperLetter: containsUppercase(pass),
      specialCharacter: containsSpecialChars(pass),
      numbers: containsNumber(pass),
    });
  };

  const verifyPasswordMatch = (pass: string) =>
    setPasswordMatch(pass === password);

  return (
    <FormBehavior
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <SignUp
        passwordRules={passwordRules}
        passwordMatch={passwordMatch}
        activeSectionId={activeSectionId}
        setActiveSectionId={setActiveSectionId}
        verifyPasswordRules={verifyPasswordRules}
        verifyPasswordMatch={verifyPasswordMatch}
      />
    </FormBehavior>
  );
};

export default observer(SignUpContainer);
