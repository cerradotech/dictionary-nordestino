import React, { FC, Fragment, useState } from 'react';

import { useRouter } from '~/modules';
import { ROUTES } from '~/utils';

import SidebarMenu from '../sidebarmenu/sidebarmenu.component';

import { Logo, MenuIcon, Wrapper } from './mobileheader.styles';

const MobileHeader: FC<PageHeaderProps> = ({ items }) => {
  const router = useRouter();

  const [sidebarVisibility, setSidebarVisibility] = useState(false);

  const handleToggleVisibility = () =>
    setSidebarVisibility((prvState) => !prvState);

  return (
    <Fragment>
      <Wrapper>
        <MenuIcon onClick={handleToggleVisibility} />

        <div onClick={() => router.push(ROUTES.HOME)}>
          <Logo />
        </div>
      </Wrapper>
      <SidebarMenu items={items} visible={sidebarVisibility} />
    </Fragment>
  );
};

export default MobileHeader;
