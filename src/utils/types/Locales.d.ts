declare type Translations = {
  projectOwner: string;
  errors: {
    opsSomethingWentWrong: string;
  };
  defaultActions: {
    advance: string;
    back: string;
    go: string;
    continue: string;
    success: string;
    register: string;
    enter: string;
    cancel: string;
    buy: string;
    done: string;
    find: string;
    search: string;
  };
  formFields: {
    email: string;
    password: string;
    name: string;
    cpf: string;
    birthDate: string;
    phone: string;
    passwordConfirmation: string;
  };
  defaultValidation: {
    nameIsRequired: string;
    cpfIsRequired: string;
    invalidCPF: string;
    birthDateIsRequired: string;
    invalidBirthDate: string;
    phoneIsRequired: string;
    emailIsRequired: string;
    invalidEmail: string;
    passwordIsRequired: string;
    passwordConfirmationIsRequired: string;
    passwordMustMeetTheRules: string;
    bothPasswordsMustBeTheSame: string;
    betweenMinAndMaxCharacters: string;
    atLeastQuantityCapitalLetter: string;
    atLeastQuantityNumber: string;
    atLeastQuantitySpecialCharacter: string;
  };
  components: {
    pageWrapper: {
      allRightsReserved: string;
      termsOfUse: string;
      menu: {
        home: string;
        login: string;
        createAccount: string;
      };
    };
  };
  homePage: {
    home: string;
  };
  loginPage: {
    loggedInSuccessfully: string;
    forgotYourPasswordQuestion: string;
    createAccount: string;
  };
  signUpPage: {
    yourRegistrationWasSuccessful: string;
    accountCreation: string;
    stepPersonalData: string;
    stepContact: string;
    stepSecurity: string;
    yourPasswordMustContain: string;
    byRegisteringYouAgreeTerms: string;
  };
};

declare type Locales = {
  translation: Translations;
};
