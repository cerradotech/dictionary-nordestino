import { AnalyticsCallOptions, EventParams } from '~/modules';

export type EventLogger = {
  event: string;
  params?: EventParams;
  options?: AnalyticsCallOptions;
};
