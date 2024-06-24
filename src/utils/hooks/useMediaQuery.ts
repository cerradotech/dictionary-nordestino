import { useEffect, useState } from 'react';

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const documentChangeHandler = (): void =>
      setMatches(!!mediaQueryList.matches);

    try {
      mediaQueryList.addEventListener('change', documentChangeHandler);
    } catch (e) {
      // Safari isn't supporting mediaQueryList.addEventListener
      mediaQueryList.addListener(documentChangeHandler);
    }

    documentChangeHandler();

    return (): void => {
      try {
        mediaQueryList.removeEventListener('change', documentChangeHandler);
      } catch (e) {
        // Safari isn't supporting mediaQueryList.removeEventListener
        mediaQueryList.removeListener(documentChangeHandler);
      }
    };
  }, []); // Empty array ensures that effect is only run on mount

  return matches;
};
