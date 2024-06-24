import { NextApiResponse } from '~/modules';

import { GENERIC_RESPONSE_ERRORS, RESPONSE_STATUS } from '../enums';

export const actionNotSpecified = (res: NextApiResponse) => {
  return res
    .status(RESPONSE_STATUS.BAD_REQUEST)
    .json({ message: GENERIC_RESPONSE_ERRORS.ACTION_NOT_SPECIFIED });
};

export const methodNotAllowed = (res: NextApiResponse) => {
  return res
    .status(RESPONSE_STATUS.METHOD_NOT_ALLOWED)
    .json({ message: GENERIC_RESPONSE_ERRORS.METHOD_NOT_ALLOWED });
};
