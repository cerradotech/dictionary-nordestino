---
to: src/pages/<%= h.changeCase.lower(name) %>/<%= h.changeCase.lower(name) %>.view.tsx
---
import { FC } from 'react';

import { Heading, Wrapper } from './<%= h.changeCase.lower(name) %>.styles';

type Props = {
  todo?: string;
};

const <%= h.changeCase.pascal(name) %>View: FC<Props> = ({ todo }) => (
  <Wrapper>
    <Heading><%= h.changeCase.pascal(name) %> {todo}</Heading>
  </Wrapper>
);

export default <%= h.changeCase.pascal(name) %>View;
