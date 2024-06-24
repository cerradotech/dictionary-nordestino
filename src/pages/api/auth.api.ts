import { AuthActionService } from '~/infra';
import { NextApiRequest, NextApiResponse } from '~/modules';
import {
  AUTH_ACTIONS,
  HTTP_METHODS,
  actionNotSpecified,
  methodNotAllowed,
} from '~/utils';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { action } = req.body;

  switch (req.method) {
    case HTTP_METHODS.POST:
      if (action === AUTH_ACTIONS.AUTH) {
        await AuthActionService.execute(req, res);
        return;
      }

      return actionNotSpecified(res);

    default:
      return methodNotAllowed(res);
  }
}
