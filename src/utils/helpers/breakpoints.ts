export const breakpoints: Breakpoints = {
  mobile: '600px',
  tablet: '768px',
  desktop: '1140px',
  lg: '1280px',
  xl: '1600px',
  xxl: '1920px',
};

export const mqDevices: TypeDevice = {
  inMobile: `(max-width: ${breakpoints.mobile})`,
  inTabletSmall: `(max-width: ${breakpoints.tablet})`,
  inTablet: `(min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.desktop})`,
  inDesktop: `(min-width: ${breakpoints.desktop})`,
  inMobileAndTablet: `(max-width: ${breakpoints.desktop})`,
  inSmallMobile: `(max-width: ${breakpoints.mobile})`,
  inExtraSmallMobile: `(max-width: ${breakpoints.mobile})`,
  inSmallDesktop: `(min-width: ${breakpoints.desktop}) and (max-width: ${breakpoints.lg})`,
};
