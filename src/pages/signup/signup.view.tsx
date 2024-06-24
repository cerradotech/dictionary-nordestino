import React, { FC, PropsWithChildren, useMemo } from 'react';

import { useFormikContext } from '~/modules';
import {
  INPUT_MASK,
  PASSWORD_RULES,
  formatToPhoneNumber,
  translate,
} from '~/utils';

import { FormValues } from './signup.form';
import {
  ContentWrapper,
  Form,
  FormContentWrapper,
  Heading,
  Hint,
  HintTitle,
  HintsWrapper,
  MessageBalloon,
  SectionWithDisclaimer,
  StepsIndicator,
  TextInput,
  TextInputWrapper,
  Wrapper,
} from './signup.styles';

type Props = {
  passwordRules: PasswordRules;
  passwordMatch: boolean;
  activeSectionId: number;
  setActiveSectionId(id: number): void;
  verifyPasswordRules(pass: string): void;
  verifyPasswordMatch(pass: string): void;
};

const SignUpView: FC<PropsWithChildren<Props>> = ({
  passwordRules,
  passwordMatch,
  activeSectionId,
  setActiveSectionId,
  verifyPasswordRules,
  verifyPasswordMatch,
}) => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    setFieldValue,
    isSubmitting,
  } = useFormikContext<FormValues>();

  useMemo(() => {
    setActiveSectionId(0);
  }, [errors]);

  return (
    <Wrapper>
      <ContentWrapper>
        <Form onSubmit={handleSubmit}>
          <Heading>{translate('signUpPage.accountCreation')}</Heading>
          <StepsIndicator
            activeSectionId={activeSectionId}
            steps={[
              {
                stepLabel: translate('signUpPage.stepPersonalData'),
                onNextAction: {
                  preventAction:
                    !!errors.name || !!errors.cpf || !!errors.birthDate,
                },
                stepContent: (
                  <FormContentWrapper>
                    <TextInputWrapper>
                      <TextInput
                        id="name"
                        label={translate('formFields.name')}
                        value={values.name}
                        error={touched.name && errors.name}
                        onChange={handleChange('name')}
                        onClear={() => setFieldValue('name', '')}
                      />
                    </TextInputWrapper>
                    <TextInputWrapper>
                      <TextInput
                        id="cpf"
                        label={translate('formFields.cpf')}
                        mask={INPUT_MASK.CPF}
                        value={values.cpf}
                        error={touched.cpf && errors.cpf}
                        onChange={handleChange('cpf')}
                        onClear={() => setFieldValue('cpf', '')}
                      />
                    </TextInputWrapper>
                    <TextInputWrapper>
                      <TextInput
                        id="birthDate"
                        mask={INPUT_MASK.DATE}
                        label={translate('formFields.birthDate')}
                        value={values.birthDate}
                        error={touched.birthDate && errors.birthDate}
                        onChange={handleChange('birthDate')}
                        onClear={() => setFieldValue('birthDate', '')}
                      />
                    </TextInputWrapper>
                  </FormContentWrapper>
                ),
              },
              {
                stepLabel: translate('signUpPage.stepContact'),
                onNextAction: {
                  preventAction: !!errors.email || !!errors.phoneNumber,
                },
                stepContent: (
                  <FormContentWrapper>
                    <TextInputWrapper>
                      <TextInput
                        id="email"
                        type="email"
                        label={translate('formFields.email')}
                        value={values.email}
                        error={touched.email && errors.email}
                        onChange={handleChange('email')}
                        onClear={() => setFieldValue('email', '')}
                      />
                    </TextInputWrapper>
                    <TextInputWrapper>
                      <TextInput
                        id="phoneNumber"
                        type="tel"
                        label={translate('formFields.phone')}
                        value={formatToPhoneNumber(values.phoneNumber)}
                        error={touched.phoneNumber && errors.phoneNumber}
                        onChange={handleChange('phoneNumber')}
                        onClear={() => setFieldValue('phoneNumber', '')}
                      />
                    </TextInputWrapper>
                  </FormContentWrapper>
                ),
              },
              {
                stepLabel: translate('signUpPage.stepSecurity'),
                onNextAction: {
                  label: translate('defaultActions.register'),
                  type: 'submit',
                  loading: isSubmitting,
                  preventAction:
                    !!errors.password ||
                    !!errors.confirmPassword ||
                    isSubmitting,
                },
                stepContent: (
                  <SectionWithDisclaimer>
                    <FormContentWrapper>
                      <HintsWrapper>
                        <HintTitle>
                          {translate('signUpPage.yourPasswordMustContain')}:
                        </HintTitle>
                        <Hint match={+passwordRules.characters}>
                          {translate(
                            'defaultValidation.betweenMinAndMaxCharacters',
                            {
                              min: PASSWORD_RULES.MIN_PASSWORD_LENGTH,
                              max: PASSWORD_RULES.MAX_PASSWORD_LENGTH,
                            },
                          )}
                        </Hint>
                        <Hint match={+passwordRules.upperLetter}>
                          {translate(
                            'defaultValidation.atLeastQuantityCapitalLetter',
                            {
                              quantity:
                                PASSWORD_RULES.MIN_CAPITAL_LETTERS_LENGTH,
                            },
                          )}
                        </Hint>
                        <Hint match={+passwordRules.numbers}>
                          {translate(
                            'defaultValidation.atLeastQuantityNumber',
                            {
                              quantity: PASSWORD_RULES.MIN_NUMBERS_LENGTH,
                            },
                          )}
                        </Hint>
                        <Hint match={+passwordRules.specialCharacter}>
                          {translate(
                            'defaultValidation.atLeastQuantitySpecialCharacter',
                            {
                              quantity: PASSWORD_RULES.MIN_SPECIAL_CHARS_LENGTH,
                            },
                          )}
                        </Hint>
                        <Hint match={+passwordMatch}>
                          {translate(
                            'defaultValidation.bothPasswordsMustBeTheSame',
                          )}
                        </Hint>
                      </HintsWrapper>
                      <TextInputWrapper>
                        <TextInput
                          id="password"
                          type="password"
                          label={translate('formFields.password')}
                          value={values.password}
                          error={touched.password && errors.password}
                          onChange={(e) => {
                            verifyPasswordRules(e.target.value);
                            return handleChange('password')(e);
                          }}
                          onClear={() => setFieldValue('password', '')}
                        />
                      </TextInputWrapper>
                      <TextInputWrapper>
                        <TextInput
                          id="confirmPassword"
                          type="password"
                          label={translate('formFields.passwordConfirmation')}
                          value={values.confirmPassword}
                          error={
                            touched.confirmPassword && errors.confirmPassword
                          }
                          onChange={(e) => {
                            verifyPasswordMatch(e.target.value);
                            return handleChange('confirmPassword')(e);
                          }}
                          onClear={() => setFieldValue('confirmPassword', '')}
                        />
                      </TextInputWrapper>
                      <MessageBalloon
                        message={translate(
                          'signUpPage.byRegisteringYouAgreeTerms',
                        )}
                      />
                    </FormContentWrapper>
                  </SectionWithDisclaimer>
                ),
              },
            ]}
          />
        </Form>
      </ContentWrapper>
    </Wrapper>
  );
};

export default SignUpView;
