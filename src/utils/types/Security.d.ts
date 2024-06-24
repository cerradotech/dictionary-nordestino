declare type PasswordRules = {
  characters: boolean;
  upperLetter: boolean;
  specialCharacter: boolean;
  numbers: boolean;
};

declare type AuthCredentials = {
  email: string;
  password: string;
};

declare type AccessToken = {
  accessToken: string;
};

declare type ProtectedPage<T extends object = {}> = T & {
  isAuthenticated?: boolean;
};
