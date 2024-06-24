import React, { FC, PropsWithChildren } from 'react';

import { mqDevices, useMediaQuery } from '~/utils';

import { DesktopHeader, Footer, MobileHeader } from './addons';
import { Content, Wrapper } from './pagewrapper.styles';
import { headerMenu } from './utils';

const PageWrapper: FC<PropsWithChildren<PageWrapperProps>> = ({
  children,
  ...rest
}): JSX.Element => {
  const isMobile = useMediaQuery(mqDevices.inTabletSmall);

  const Header = isMobile ? MobileHeader : DesktopHeader;

  return (
    <Wrapper {...rest}>
      <Header items={headerMenu} />
      <Content>{children}</Content>
      <Footer />
    </Wrapper>
  );
};

export default PageWrapper;
