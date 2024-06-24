import { getTheme, pxToRem } from '~/core';
import { Toastify, styled } from '~/modules';

import Typography from '../typography/typography.component';

// spacing
const spacingSm = getTheme('spacing.sm');

// color
const text500 = getTheme('colors.text.500');

export const ToastContainer = styled(Toastify.ToastContainer)`
  flex-direction: column;
  width: max-content;
  max-width: ${pxToRem(400)};
  min-width: ${pxToRem(264)};
`;

export const Content = styled.div`
  flex-direction: column;
  margin-left: ${spacingSm}px;
`;

export const Title = styled(Typography).attrs({
  variant: 'md',
})<StyledToastMessageProps>`
  font-weight: 600;
  color: ${({ type }) => getTheme(`colors.${type}.500` as any)};
  margin-bottom: ${spacingSm}px;
`;

export const Message = styled(Typography).attrs({ variant: 'xs' })`
  color: ${text500};
`;
