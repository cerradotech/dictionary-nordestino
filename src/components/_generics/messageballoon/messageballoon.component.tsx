import { FC } from 'react';

import {
  IoCheckmarkDoneCircleOutline,
  IoCloseCircleOutline,
  IoInformationCircleOutline,
  IoWarningOutline,
  STATUS,
} from '~/utils';

import { Text, Wrapper } from './messageballoon.styles';

const MessageBalloon: FC<MessageBalloonProps> = ({
  type = STATUS.DEFAULT,
  message,
}) => {
  const icon = {
    [STATUS.SUCCESS]: <IoCheckmarkDoneCircleOutline />,
    [STATUS.WARNING]: <IoWarningOutline />,
    [STATUS.DANGER]: <IoCloseCircleOutline />,
    [STATUS.INFO]: <IoInformationCircleOutline />,
    [STATUS.DEFAULT]: <IoInformationCircleOutline />,
  };

  return (
    <Wrapper type={type}>
      {icon[type]}

      <Text>{message}</Text>
    </Wrapper>
  );
};

export default MessageBalloon;
