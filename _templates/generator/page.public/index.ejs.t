---
to: src/pages/<%= h.changeCase.lower(name) %>/index.page.tsx
---
import { FC } from 'react';

import { observer } from '~/modules';

import <%= h.changeCase.pascal(name) %>View from './<%= h.changeCase.lower(name) %>.view';

export const <%= h.changeCase.pascal(name) %>Container: FC = () => {
  return <<%= h.changeCase.pascal(name) %>View />;
};

export default observer(<%= h.changeCase.pascal(name) %>Container);
