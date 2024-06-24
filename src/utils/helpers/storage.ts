import { isClient } from './nextChecks';

export const storage = isClient ? window.localStorage : undefined;
