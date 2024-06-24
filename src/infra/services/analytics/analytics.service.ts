import { firebaseInstance } from '~/core';
import {
  Analytics,
  FbAnalyticsLogEvent,
  InitAnalytics,
  setAnalyticsCollectionEnabled,
} from '~/modules';
import { ANALYTICS_EVENTS_TYPES, ENVIRONMENT } from '~/utils';

import { EventLogger } from './types';

export default class AnalyticsService {
  analytics: Analytics;

  constructor() {
    this.analytics = InitAnalytics(firebaseInstance);

    if (process.env.NEXT_PUBLIC_ENV === ENVIRONMENT.PROD) {
      setAnalyticsCollectionEnabled(this.analytics, true);
    } else {
      setAnalyticsCollectionEnabled(this.analytics, false);
    }
  }

  public async logEvent({
    event,
    params,
    options,
  }: EventLogger): Promise<void> {
    FbAnalyticsLogEvent(this.analytics, event, params, options);
  }

  public async logError(params: ErrorParameters): Promise<void> {
    FbAnalyticsLogEvent(this.analytics, ANALYTICS_EVENTS_TYPES.EVENT_ERR, {
      P_SCR: params.screen_name,
      P_CON: params.action,
      P_ERR: params.error,
    });
  }
}
