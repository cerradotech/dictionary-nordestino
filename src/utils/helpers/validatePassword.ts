export const validatePasswordComplexity = (value?: string): boolean => {
  // ALTERNATIVA
  //  /^(?=.*\d)(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,}$/;

  const regex =
    /^(?=.*[\W|_/\\])(?=.*[0-9])(?=.*[A-Z])[\W|_/\\a-zA-Zà-úÀ-Ú0-9]{8,15}$/;
  return !!value && regex.test(value);
};
