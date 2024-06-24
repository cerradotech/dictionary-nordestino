const locales: Locales = {
  translation: {
    projectOwner: 'CerradoTech',
    errors: {
      opsSomethingWentWrong: 'Ops, Algo deu errado!',
    },
    defaultActions: {
      advance: 'Avançar',
      back: 'Voltar',
      go: 'Ir',
      continue: 'Continuar',
      success: 'Sucesso',
      register: 'Cadastrar',
      enter: 'Entrar',
      cancel: 'Cancelar',
      buy: 'Comprar',
      done: 'Concluido',
      find: 'Procurar',
      search: 'Buscar',
    },
    formFields: {
      email: 'E-mail',
      password: 'Senha',
      name: 'Nome',
      cpf: 'CPF',
      birthDate: 'Data de Nascimento',
      phone: 'Telefone',
      passwordConfirmation: 'Confirmação de senha',
    },
    defaultValidation: {
      nameIsRequired: 'Nome é obrigatório',
      cpfIsRequired: 'CPF é obrigatório',
      invalidCPF: 'Documento inválido',
      birthDateIsRequired: 'Data de nascimento é obrigatória',
      invalidBirthDate: 'Data de nascimento inválida',
      phoneIsRequired: 'Telefone é obrigatório',
      emailIsRequired: 'Email é obrigatório',
      invalidEmail: 'Email inválido.',
      passwordIsRequired: 'Senha é obrigatória.',
      passwordConfirmationIsRequired: 'Confirmação de senha é obrigatória.',
      passwordMustMeetTheRules: 'A senha deve atender às regras',
      bothPasswordsMustBeTheSame: 'As duas senhas devem ser iguais',
      betweenMinAndMaxCharacters: 'Entre {{ min }} a {{ max }} caracteres',
      atLeastQuantityCapitalLetter: 'No mínimo {{ quantity }} letra maiúscula',
      atLeastQuantityNumber: 'No mínimo {{ quantity }} numero',
      atLeastQuantitySpecialCharacter:
        'No mínimo {{ quantity }} caractere especial',
    },
    components: {
      pageWrapper: {
        allRightsReserved: 'Todos os direitos reservados.',
        termsOfUse: 'Termos de uso',
        menu: {
          home: 'HOME',
          login: 'Entrar',
          createAccount: 'Criar Conta',
        },
      },
    },
    homePage: {
      home: 'Home Page',
    },
    loginPage: {
      loggedInSuccessfully: 'Logado com sucesso!',
      forgotYourPasswordQuestion: 'Esqueceu sua senha?',
      createAccount: 'Criar Conta',
    },
    signUpPage: {
      yourRegistrationWasSuccessful: 'Seu cadastro foi efetivado com sucesso!',
      accountCreation: 'Criação de Conta',
      stepPersonalData: 'Dados pessoais',
      stepContact: 'Contato',
      stepSecurity: 'Segurança',
      yourPasswordMustContain: 'A sua senha deve conter',
      byRegisteringYouAgreeTerms:
        'Ao realizar o cadastro você concorda com os Termos de Uso e à Política de Privacidade.',
    },
  },
};

export default locales;
