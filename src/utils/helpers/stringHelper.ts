export const removeSpecialCharacters = (str = '') =>
  str.replace(/[^a-zA-Z0-9 ]/g, '');

export const containsNumber = (str: string): boolean => /\d/.test(str);

export const containsSpecialChars = (str: string): boolean =>
  /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(str);

export const containsUppercase = (str: string): boolean => /[A-Z]/.test(str);

export const formatToPhoneNumber = (phoneNumber: string) => {
  if (phoneNumber.length === 11)
    return phoneNumber.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');

  return phoneNumber.replace(/(\+\d{2})(\d{2})(\d{5})(\d{4})/, '$1 ($2) $3-$4');
};

export const parsePrice = (price: number) =>
  (price / 100).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

export const maskContractHash = (str: string) => {
  return str.replace(/^(.....).*(.....)$/, '$1...$2');
};
