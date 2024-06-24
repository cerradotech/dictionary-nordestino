import { useEffect, useRef } from 'react';

type Callback = (args?: any) => void;

type UseDebounce = {
  debounce: Callback;
};

export const useDebounce = (callback: Callback, delay: number): UseDebounce => {
  const timeout = useRef<NodeJS.Timeout>();
  const savedCallback = useRef(callback);

  const clear = (): void => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
  };

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  const debounce = (args?: any): void => {
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => savedCallback.current(args), delay);
  };

  useEffect(() => {
    return () => clear();
  }, []);

  return { debounce };
};
