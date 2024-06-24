import { useEffect, useRef, useState } from 'react';

type UseTimeout = {
  isTimeoutCleared: boolean;
  clearTimeout: () => void;
  timer: () => void;
};

export const useTimeout = (callback: () => void, delay: number): UseTimeout => {
  const timeout = useRef<NodeJS.Timeout>();
  const savedCallback = useRef(callback);
  const [isTimeoutCleared, setIsTimeoutCleared] = useState(false);

  const clear = (): void => {
    if (timeout.current) {
      clearTimeout(timeout.current);
      setIsTimeoutCleared(true);
    }
  };

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  const timer = () => {
    timeout.current = setTimeout(() => savedCallback.current(), delay);
  };

  useEffect(() => {
    return () => clear();
  }, []);

  return {
    isTimeoutCleared,
    clearTimeout: clear,
    timer,
  };
};
