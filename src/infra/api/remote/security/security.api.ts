import { ResponseError, parseTokenFromApi } from '~/infra';

import { remote } from '../../providers';

export const login = async (
  credentials: AuthCredentials,
): Promise<AccessToken> => {
  try {
    const { data } = await remote.post('/login', credentials);

    return parseTokenFromApi(data);
  } catch (error) {
    throw new ResponseError(error);
  }
};
