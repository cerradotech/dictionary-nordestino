import { FormValidator } from '~/modules';
import {
  isValidBirthDate,
  isValidCpf,
  reverseScreenDateToParse,
  translate,
  validatePasswordComplexity,
} from '~/utils';

export type FormValues = {
  name: string;
  cpf: string;
  email: string;
  birthDate: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
};

export const initialValues = {
  name: '',
  cpf: '',
  email: '',
  birthDate: '',
  phoneNumber: '',
  password: '',
  confirmPassword: '',
};

export const validationSchema = FormValidator.object({
  name: FormValidator.string().required(
    translate('defaultValidation.nameIsRequired'),
  ),
  cpf: FormValidator.string()
    .required(translate('defaultValidation.cpfIsRequired'))
    .test('cpf', translate('defaultValidation.invalidCPF'), isValidCpf),
  birthDate: FormValidator.string()
    .required(translate('defaultValidation.birthDateIsRequired'))
    .test(
      'birthdate',
      translate('defaultValidation.invalidBirthDate'),
      (value: string) => isValidBirthDate(reverseScreenDateToParse(value)),
    ),
  email: FormValidator.string()
    .required(translate('defaultValidation.emailIsRequired'))
    .email(translate('defaultValidation.invalidEmail')),
  phoneNumber: FormValidator.string().required(
    translate('defaultValidation.phoneIsRequired'),
  ),
  password: FormValidator.string()
    .required(translate('defaultValidation.passwordIsRequired'))
    .test(
      'complexity',
      translate('defaultValidation.passwordMustMeetTheRules'),
      validatePasswordComplexity,
    ),
  confirmPassword: FormValidator.string()
    .required(translate('defaultValidation.passwordConfirmationIsRequired'))
    .test(
      'complexity',
      translate('defaultValidation.passwordMustMeetTheRules'),
      validatePasswordComplexity,
    )
    .oneOf(
      [FormValidator.ref('password')],
      translate('defaultValidation.bothPasswordsMustBeTheSame'),
    ),
});
