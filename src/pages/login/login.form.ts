import { FormValidator } from '~/modules';
import { translate } from '~/utils';

export type FormValues = {
  email: string;
  password: string;
};

export const initialValues = {
  email: '',
  password: '',
};

export const validationSchema = FormValidator.object({
  email: FormValidator.string()
    .required(translate('defaultValidation.emailIsRequired'))
    .email(translate('defaultValidation.invalidEmail')),
  password: FormValidator.string().required(
    translate('defaultValidation.passwordIsRequired'),
  ),
});
