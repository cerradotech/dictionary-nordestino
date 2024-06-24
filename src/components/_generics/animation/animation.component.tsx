import { FC } from 'react';

import { Animation as AnimationContainer } from '~/modules';
import { LoadingCircleAnimation } from '~/utils';

const Animation: FC<AnimationProps> = ({
  animationData = LoadingCircleAnimation,
  speed = 1.5,
}) => (
  <AnimationContainer
    options={{
      animationData,
    }}
    speed={speed}
  />
);

export default Animation;
