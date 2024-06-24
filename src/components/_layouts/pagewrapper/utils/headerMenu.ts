import { toUpper } from '~/modules';
import { PLATFORM, ROUTES, translate } from '~/utils';

export default [
  {
    label: toUpper(translate('components.pageWrapper.menu.home')),
    link: ROUTES.HOME,
    // IF YOU WANT DROPDOWN ON MODILHE SIDEMENU
    // ADD THIS LINES
    // hasDropdown: true,
    // dropdown: [
    //   {
    //     label: 'Criar',
    //     link: '',
    //   },
    //   {
    //     label: 'Deletar',
    //     link: '',
    //   },
    // ],
  },
  {
    label: translate('components.pageWrapper.menu.createAccount'),
    link: ROUTES.SIGN_UP,
    only: PLATFORM.MOBILE,
  },
  {
    label: translate('components.pageWrapper.menu.login'),
    link: ROUTES.LOGIN,
    only: PLATFORM.MOBILE,
  },
] as MenuItem[];
