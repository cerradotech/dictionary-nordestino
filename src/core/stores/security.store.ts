import { LocalSecurityApi } from '~/infra';
import { makeAutoObservable, makePersistable } from '~/modules';
import { AUTH_ACTIONS, storage } from '~/utils';

import { RootStore } from './root.store';

export default class SecurityStore {
  rootStore: RootStore;

  authData: UserData = {} as UserData;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
    makePersistable(this, {
      name: 'SecurityStore',
      storage,
      properties: [],
    });
  }

  auth = async (data: AuthCredentials): Promise<void> => {
    this.authData = await LocalSecurityApi.localAuth({
      action: AUTH_ACTIONS.AUTH,
      ...data,
    });
  };
}
