import { FC, Fragment, memo, useMemo, useState } from 'react';

import { Conditional } from '~/components/_layouts';
import { PLATFORM } from '~/utils';

import {
  Backdrop,
  Link,
  Sidebar,
  SidebarMenuComponent,
  SidebarMenuItem,
  SidebarSubMenu,
  Wrapper,
} from './sidebarmenu.styles';

const SidebarMenu: FC<SidebarMenuProps> = ({ items, visible = false }) => {
  const [localVisibility, setLocalVisibility] = useState(false);

  const onBackdropClick = () => setLocalVisibility(false);

  const renderRecursiveMenu = ({
    icon: Icon,
    label,
    link,
    hasDropdown,
    dropdown,
  }: MenuItem) => (
    <Fragment>
      <Conditional condition={!!hasDropdown}>
        <SidebarSubMenu icon={Icon && <Icon />} title={label}>
          {dropdown?.map((item: MenuItem) => renderRecursiveMenu(item))}
        </SidebarSubMenu>
      </Conditional>

      <Conditional condition={!hasDropdown}>
        <SidebarMenuItem key={label}>
          <Link href={link!}>{label}</Link>
        </SidebarMenuItem>
      </Conditional>
    </Fragment>
  );

  useMemo(() => {
    setLocalVisibility(visible);
  }, [visible]);

  return (
    <Wrapper visible={localVisibility}>
      <Sidebar>
        <SidebarMenuComponent>
          {items.map((item: MenuItem) => {
            if (item.only === PLATFORM.DESKTOP) return;

            return (
              <Fragment key={item.label}>{renderRecursiveMenu(item)}</Fragment>
            );
          })}
        </SidebarMenuComponent>
      </Sidebar>
      <Backdrop onClick={onBackdropClick} />
    </Wrapper>
  );
};

export default memo(SidebarMenu);
