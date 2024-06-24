export enum ERRORS {
  TOKEN_INVALID = 'Token inválido',
  UNEXPECTED_ERROR = 'Erro inesperado. Verifique sua internet e tente novamente',
  SESSION_EXPIRED = 'Sessão expirada. Autentique novamente para continuar',
  PASSWORD_MIN_LENGTH = 'Senha deve conter pelo menos 6 dígitos',
  PASSWORD_INVALID = 'Senha inválida',
  PASSWORD_REQUIRED = 'Senha obrigatória',
  DATE_MIN_LENGTH = 'A data deve conter pelo menos 8 dígitos',
}

export enum REQUEST_ERRORS {
  ACCESS_BLOCKED = 'USR00008',
  USER_UNAUTHORIZED = 'USR00012',
  TOKEN_EXPIRED = 'JWT00001',
  TOKEN_UNAUTHORIZED = 'TK00004',
  USER_NOT_FOUND = 'USR00010',
}

export enum GENERIC_RESPONSE_ERRORS {
  METHOD_NOT_ALLOWED = 'Método não permitido.',
  ACTION_NOT_SPECIFIED = 'Ação não especificada.',
}
