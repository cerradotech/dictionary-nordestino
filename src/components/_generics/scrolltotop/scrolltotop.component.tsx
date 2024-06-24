import { FC, Fragment, useEffect } from 'react';

import { useRouter } from '~/modules';

const ScrollToTop: FC = () => {
  const { pathname } = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <Fragment />;
};

export default ScrollToTop;
