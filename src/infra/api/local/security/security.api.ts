import { ResponseError, parseTokenFromApi } from '~/infra';

import { local } from '../../providers';

export const localAuth = async (
  body: LocalRequestAction<AuthCredentials>,
): Promise<UserData> => {
  try {
    const { data } = await local.post('/auth', body);

    return parseTokenFromApi(data);
  } catch (error) {
    throw new ResponseError(error);
  }
};
