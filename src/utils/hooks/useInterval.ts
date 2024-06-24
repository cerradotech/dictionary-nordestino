import { useEffect, useRef, useState } from 'react';

type UseInterval = {
  isIntervalCleared: boolean;
  clearInterval: () => void;
};

export const useInterval = (
  callback: () => void,
  delay?: number,
): UseInterval => {
  const interval = useRef<NodeJS.Timer>();
  const savedCallback = useRef(callback);
  const [isIntervalCleared, setIsIntervalCleared] = useState(false);

  const clear = (): void => {
    if (interval.current) {
      clearInterval(interval.current);
      setIsIntervalCleared(true);
    }
  };

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!delay) return;
    interval.current = setInterval(() => savedCallback.current(), delay);
    return () => clear();
  }, [delay]);

  return {
    isIntervalCleared,
    clearInterval: clear,
  };
};
