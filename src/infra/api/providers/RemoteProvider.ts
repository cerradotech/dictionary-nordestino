import { AxiosInstance, axios } from '~/modules';

import {
  InterceptRequest,
  InterceptRequestError,
  InterceptResponse,
  InterceptResponseError,
} from './interceptors';

class RemoteProvider {
  config: AxiosInstance;

  constructor() {
    this.config = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
      timeout: 30000,
    });
    this.addInterceptors();
  }

  private addInterceptors(): void {
    this.config.interceptors.request.use(
      InterceptRequest,
      InterceptRequestError,
    );

    this.config.interceptors.response.use(
      InterceptResponse,
      InterceptResponseError,
    );
  }
}

export default new RemoteProvider().config;
