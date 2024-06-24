import * as CNPJ from '@fnando/cnpj';
import * as CPF from '@fnando/cpf';

import { toOnlyNumbers } from './toOnlyNumbers';

export const isValidCnpj = (value?: string): boolean =>
  !!value && CNPJ.isValid(toOnlyNumbers(value));

export const isValidCpf = (value?: string): boolean =>
  !!value && CPF.isValid(toOnlyNumbers(value));

export const isValidCpfOrCnpj = (value?: string): boolean =>
  !!value && (isValidCpf(value) || isValidCnpj(value));

export const isValidDocument = (document?: string): boolean =>
  !!document && /^[a-zA-Z0-9]{4,20}$/.test(document);
