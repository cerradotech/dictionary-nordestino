import React, { FC } from 'react';

import { Logo, Wrapper } from './mobileheader.styles';

const MobileHeader: FC<PageHeaderProps> = () => {
  return (
    <Wrapper>
      <Logo />
    </Wrapper>
  );
};

export default MobileHeader;
