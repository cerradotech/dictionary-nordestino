import { AxiosResponse } from '~/modules';

class InterceptResponse {
  public async execute(response: AxiosResponse | any): Promise<AxiosResponse> {
    return response;
  }
}

export default new InterceptResponse().execute;
