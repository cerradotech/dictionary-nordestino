import React, { FC, PropsWithChildren } from 'react';

import { useFormikContext } from '~/modules';
import { translate } from '~/utils';

import { FormValues } from './login.form';
import {
  ActionsWrapper,
  Button,
  Caption,
  ContentWrapper,
  Form,
  FormContentWrapper,
  Heading,
  TextInput,
  Wrapper,
} from './login.styles';

type Props = {
  onNavigateToSignUp(): void;
};

const LoginView: FC<PropsWithChildren<Props>> = ({ onNavigateToSignUp }) => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    setFieldValue,
    isSubmitting,
  } = useFormikContext<FormValues>();

  return (
    <Wrapper>
      <ContentWrapper>
        <Form onSubmit={handleSubmit}>
          <Heading>Entrar</Heading>
          <FormContentWrapper>
            <TextInput
              id="email"
              label={translate('formFields.email')}
              value={values.email}
              error={touched.email && errors.email}
              onChange={handleChange('email')}
              onClear={() => setFieldValue('email', '')}
            />

            <TextInput
              id="password"
              type="password"
              label={translate('formFields.password')}
              value={values.password}
              error={touched.password && errors.password}
              onChange={handleChange('password')}
              onClear={() => setFieldValue('password', '')}
            />

            <ActionsWrapper>
              <Button
                accessibility={translate('defaultActions.enter')}
                type="submit"
                loading={isSubmitting}
                disabled={isSubmitting}
              >
                {translate('defaultActions.enter')}
              </Button>

              <Caption>
                {translate('loginPage.forgotYourPasswordQuestion')}
              </Caption>
            </ActionsWrapper>
          </FormContentWrapper>

          <ActionsWrapper>
            <Button
              disabled={isSubmitting}
              onPress={onNavigateToSignUp}
              accessibility={translate('loginPage.createAccount')}
              type="button"
              flat
            >
              {translate('loginPage.createAccount')}
            </Button>
          </ActionsWrapper>
        </Form>
      </ContentWrapper>
    </Wrapper>
  );
};

export default LoginView;
