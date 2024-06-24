import { AnalyticsService } from '~/infra';

class InterceptRequestError {
  public async execute(error: Error | any): Promise<void> {
    const analytics = new AnalyticsService();
    analytics.logError(error);
    throw error;
  }
}

export default new InterceptRequestError().execute;
