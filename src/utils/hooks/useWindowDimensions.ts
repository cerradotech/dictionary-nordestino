import { useEffect, useState } from 'react';

import { isClient } from '../helpers';

export const useWindowDimensions = () => {
  let initialWindowWidth = 0;
  let initialWindowHeight = 0;

  if (isClient) {
    initialWindowWidth = window.innerWidth;
    initialWindowHeight = window.innerHeight;
  }
  const [windowDimensions, setWindowDimensions] = useState({
    width: initialWindowWidth,
    height: initialWindowHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
};
