import { ERRORS, REQUEST_ERRORS } from '~/utils';

export default class ExpiredSessionError extends Error {
  response: ResponseError;

  constructor() {
    super();
    this.response = {
      data: {
        message: ERRORS.SESSION_EXPIRED,
        code: REQUEST_ERRORS.TOKEN_EXPIRED,
      },
      status: 401,
    };
  }
}
