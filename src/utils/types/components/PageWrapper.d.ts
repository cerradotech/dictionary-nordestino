declare type MenuItem = {
  icon?: React.ComponentType;
  label: string;
  link: string;
  hasDropdown?: boolean;
  dropdown?: MenuItem[];
  only?: 'desktop' | 'mobile';
};

declare type PageHeaderProps = {
  items: MenuItem[];
};

declare type SidebarMenuProps = {
  items: MenuItem[];
  visible?: boolean;
};

declare type PageWrapperProps = {
  children: Aggregates.ReactNode;
};

declare type StyledPageFooterProps = {
  direction?: 'row' | 'column';
};

declare type StyledSidebarMenuProps = {
  visible?: boolean;
};
