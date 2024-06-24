import { AxiosError } from '~/modules';

class InterceptResponseError {
  public async execute(error: AxiosError): Promise<any> {
    return Promise.reject(error);
  }
}

export default new InterceptResponseError().execute;
