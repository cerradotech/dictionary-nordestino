import NextLink from 'next/link';

import { getTheme, ifStyle, pxToRem } from '~/core';
import {
  Menu as MenuComponent,
  MenuItem as MenuItemComponent,
  ProSidebar as SidebarComponent,
  SubMenu as SubMenuComponent,
  styled,
} from '~/modules';

const visible = ifStyle('visible');

const fontFamilyT3 = getTheme('fontFamilies.text.t3');

const fontSizesLg = getTheme('fontSizes.lg');

const primary500 = getTheme('colors.primary.500');
const secondary300 = getTheme('colors.secondary.300');
const secondary500 = getTheme('colors.secondary.500');
const shadeBlackFade = getTheme('colors.shade.blackFade');
const text50 = getTheme('colors.text.50');

const spacingMd = getTheme('spacing.md');

export const Wrapper = styled.div<StyledSidebarMenuProps>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${shadeBlackFade};
  z-index: 2;

  display: ${visible('block', 'none')};
`;

export const Sidebar = styled(SidebarComponent)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  height: 100vh;

  background-color: ${secondary500};

  width: ${pxToRem(300)};
  font-family: ${fontFamilyT3};

  padding: ${spacingMd}px;

  svg,
  .pro-arrow-wrapper,
  .pro-arrow {
    color: ${primary500};
    border-color: ${primary500} !important;
    font-size: ${fontSizesLg}px;
  }
  ul {
    list-style-type: none;
  }
  .pro-item-content {
    color: ${text50};
  }
  .pro-inner-list-item {
    background-color: ${secondary300} !important;
  }
  .pro-sidebar-inner {
    background-color: transparent;
    width: 100%;
  }
  .pro-sidebar-layout {
    width: 100%;
  }
`;

export const SidebarMenuComponent = styled(MenuComponent)``;
export const SidebarMenuItem = styled(MenuItemComponent)``;
export const SidebarSubMenu = styled(SubMenuComponent)``;
export const Link = styled(NextLink)``;
export const Backdrop = styled.div`
  background: transparent;
  width: 100vw;
  height: 100vh;
`;
