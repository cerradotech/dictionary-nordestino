import {
  InitRemoteConfig,
  RemoteConfig,
  fetchAndActivate,
  getAll,
  getBoolean,
  getValue,
} from '~/modules';
import { ENVIRONMENT } from '~/utils';

export default class RemoteConfigService {
  private fetchInterval =
    process.env.NEXT_PUBLIC_ENV === ENVIRONMENT.DEV ? 3600000 : 43200000; // 1h em dev e 12h em prod

  remoteConfig: RemoteConfig;

  constructor() {
    this.remoteConfig = InitRemoteConfig();
    this.remoteConfig.settings.minimumFetchIntervalMillis = this.fetchInterval;
  }

  public async setup(params: DefaultParamsRemoteConfig): Promise<void> {
    this.remoteConfig.defaultConfig = params;
    await fetchAndActivate(this.remoteConfig);
  }

  public async fetch(): Promise<boolean> {
    return fetchAndActivate(this.remoteConfig);
  }

  public async getValue(key: string): Promise<string> {
    return getValue(this.remoteConfig, key).asString();
  }

  public async getValueJson<T>(key: string): Promise<T> {
    const valueJson = getValue(this.remoteConfig, key);

    if (valueJson) {
      return JSON.parse(valueJson.asString());
    }

    return JSON.parse('{}');
  }

  public async getBoolean(key: string): Promise<boolean> {
    return getBoolean(this.remoteConfig, key);
  }

  public async getAllJson(): Promise<RemoteConfigParams> {
    const configs = getAll(this.remoteConfig);
    const json: RemoteConfigParams = {} as RemoteConfigParams;

    Object.entries(configs).forEach((config) => {
      json[config[0] as keyof RemoteConfigParams] = JSON.parse(
        config[1].asString(),
      );
    });

    return json;
  }
}
