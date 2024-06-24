import { makeAutoObservable, makePersistable, runInAction } from '~/modules';
import { storage } from '~/utils';

import { ThemeType, theme, themeFormatter } from '../theme';

const themeJson = themeFormatter(theme);

export default class ThemeStore {
  theme: ThemeType = themeJson;

  darkTheme: ThemeType = themeJson;

  lightTheme: ThemeType = themeJson;

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: 'ThemeStore',
      storage,
      properties: ['darkTheme', 'lightTheme', 'theme'],
    });
  }

  setDarkTheme = (): void => {
    runInAction(() => {
      this.theme = this.darkTheme;
    });
  };

  setLightTheme = (): void => {
    runInAction(() => {
      this.theme = this.lightTheme;
    });
  };

  setThemeClientProvider = async (lightTheme: string, darkTheme?: string) => {
    if (lightTheme) {
      const themeFromJson: ThemeType = themeFormatter(JSON.parse(lightTheme));
      this.theme = themeFromJson;
      this.lightTheme = themeFromJson;
    }
    if (darkTheme) {
      const themeDarkFromJson: ThemeType = themeFormatter(
        JSON.parse(darkTheme),
      );
      this.darkTheme = themeDarkFromJson;
    }
  };
}
