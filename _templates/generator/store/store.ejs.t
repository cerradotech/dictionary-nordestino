---
to: src/core/stores/<%= h.changeCase.camel(name) %>.store.ts
---
import { makeAutoObservable, makePersistable, runInAction } from '~/modules';
import { storage } from '~/utils';

import { RootStore } from './root.store';

export default class <%= h.changeCase.pascal(name) %>Store {
  rootStore: RootStore;

  todo = '';

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
    makePersistable(this, {
      name: '<%= h.changeCase.pascal(name) %>Store',
      storage,
      properties: ['todo'],
    });
  }

  todoAction = (value: string): void => {
    runInAction(() => {
      this.todo = value;
    });
  };
}
