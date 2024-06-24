import Keys from './keys';

export default class StorageService {
  storage: Storage;

  constructor() {
    this.storage = window.localStorage;
  }

  public clearWholeStorage = (): void => {
    this.storage.clear();
  };

  public getToken = (): AccessToken => {
    const value = this.storage.getItem(Keys.TOKEN);
    return value ? JSON.parse(value) : '';
  };

  public setToken = (accessToken: AccessToken | null): void => {
    const item = JSON.stringify(accessToken);
    this.storage.setItem(Keys.TOKEN, item);
  };
}
