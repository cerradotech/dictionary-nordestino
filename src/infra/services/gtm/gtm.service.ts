import { TagManager, TagManagerArgs } from '~/modules';
import { ENVIRONMENT } from '~/utils';

export default class GoogleTagManagerService {
  public getGmtId(): TagManagerArgs {
    const gtmId = process.env.NEXT_PUBLIC_GOOGLE_GMT_ID!;

    const tagManagerArgs: TagManagerArgs = {
      gtmId,
    };

    return tagManagerArgs;
  }

  public init(): void {
    if (process.env.NEXT_PUBLIC_ENV === ENVIRONMENT.PROD) {
      TagManager.initialize(this.getGmtId());
    }
  }
}
