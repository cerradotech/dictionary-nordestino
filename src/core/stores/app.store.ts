import {
  enableStaticRendering,
  makeAutoObservable,
  makePersistable,
  runInAction,
} from '~/modules';
import { storage } from '~/utils';

import { RootStore } from './root.store';

enableStaticRendering(typeof window === 'undefined');

export default class AppStore {
  rootStore: RootStore;

  lastUpdate = 0;

  light = false;

  timer: NodeJS.Timeout | number | null = null;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
    makePersistable(this, {
      name: 'AppStore',
      storage,
      properties: ['timer', 'lastUpdate'],
    });
  }

  start = () => {
    this.timer = setInterval(() => {
      runInAction(() => {
        this.lastUpdate = Date.now();
        this.light = true;
      });
    }, 1000);
  };

  get timeString() {
    const pad = (n: number) => (n < 10 ? `0${n}` : n);
    const format = (t: any) =>
      `${pad(t.getUTCHours())}:${pad(t.getUTCMinutes())}:${pad(
        t.getUTCSeconds(),
      )}`;
    return format(new Date(this.lastUpdate));
  }

  stop = () => {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  };

  hydrate = (data: any) => {
    const { app } = data;
    if (!app) return;
    this.lastUpdate = app.lastUpdate;
  };
}
