import { SecurityApi } from '~/infra';
import { NextApiRequest, NextApiResponse, serialize } from '~/modules';
import { COOKIES, RESPONSE_STATUS } from '~/utils';

export default class AuthActionService {
  public static async execute(req: NextApiRequest, res: NextApiResponse) {
    try {
      const { email, password } = req.body;

      const authResponse = await SecurityApi.login({
        email,
        password,
      });

      res.setHeader(
        'Set-Cookie',
        serialize(COOKIES.ACCESS_TOKEN, authResponse.accessToken, {
          httpOnly: true,
          maxAge: 3600,
          path: '/',
        }),
      );

      return res.status(RESPONSE_STATUS.OK).json(authResponse);
    } catch (error) {
      return res.status(error.code).json({ message: error.message });
    }
  }
}
