import React, { FC } from 'react';

import { useRouter } from '~/modules';
import { PLATFORM, ROUTES, translate } from '~/utils';

import {
  Actions,
  Button,
  Divider,
  Item,
  Label,
  Logo,
  Menu,
  Wrapper,
} from './desktopheader.styles';

const DesktopHeader: FC<PageHeaderProps> = ({ items }) => {
  const router = useRouter();

  return (
    <Wrapper>
      <div onClick={() => router.push(ROUTES.HOME)}>
        <Logo />
      </div>

      <Menu>
        {items.map(({ icon: Icon, label, link, only }) => {
          if (only === PLATFORM.MOBILE) return;

          return (
            <Item key={label} href={link}>
              {Icon && <Icon />}
              <Label>{label}</Label>
            </Item>
          );
        })}
      </Menu>
      <Actions>
        <Item href={ROUTES.SIGN_UP}>
          <Label>Criar Conta</Label>
        </Item>
        <Divider />
        <Button
          flat
          accessibility={translate('defaultActions.enter')}
          onPress={() => {
            router.push(ROUTES.LOGIN);
          }}
        >
          {translate('defaultActions.enter')}
        </Button>
      </Actions>
    </Wrapper>
  );
};

export default DesktopHeader;
