import { NextApiRequest, parseCookies } from '~/modules';
import { COOKIES } from '~/utils';

export const authMiddleware = async (req: NextApiRequest) => {
  const cookies = parseCookies(req.headers.cookie || '');

  return Boolean(cookies[COOKIES.ACCESS_TOKEN]);
};
