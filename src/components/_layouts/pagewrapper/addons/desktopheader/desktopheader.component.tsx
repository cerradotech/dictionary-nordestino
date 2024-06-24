import React, { FC } from 'react';

import { Logo, Wrapper } from './desktopheader.styles';

const DesktopHeader: FC<PageHeaderProps> = () => {
  return (
    <Wrapper>
      <Logo />
    </Wrapper>
  );
};

export default DesktopHeader;
