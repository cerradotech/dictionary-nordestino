import { configurePersistable } from '~/modules';
import { storage } from '~/utils';

import AppStore from './app.store';
import SecurityStore from './security.store';
import ThemeStore from './theme.store';

export class RootStore {
  app: AppStore;

  theme: ThemeStore;

  security: SecurityStore;

  constructor() {
    this.app = new AppStore(this);
    this.theme = new ThemeStore();
    this.security = new SecurityStore(this);
  }
}

configurePersistable({
  debugMode: false,
  storage,
});

export default new RootStore();
