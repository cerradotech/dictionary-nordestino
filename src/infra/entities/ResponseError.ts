import { AxiosError } from 'axios';

import { ERRORS } from '~/utils';

export default class ResponseError {
  rawApiError?: string;

  url?: string;

  message: string;

  code: number;

  constructor({ response }: AxiosError) {
    this.message = response?.data.message || ERRORS.UNEXPECTED_ERROR;

    this.code = response?.status || 0;

    if (response?.data)
      this.rawApiError = `st: ${response.status} res: ${JSON.stringify(
        response.data,
      )}`;

    if (!!response?.data.message && typeof response?.data.message !== 'string')
      this.message = response?.data.message[0];

    if (response?.config?.url) this.url = response?.config?.url;
  }
}
