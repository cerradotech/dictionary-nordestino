---
to: src/components/<%= h.changeCase.lower(name) %>/<%= h.changeCase.lower(name) %>.component.tsx
---
import { FC, PropsWithChildren } from 'react';

import { Text, Wrapper } from './<%= h.changeCase.lower(name) %>.styles';

type Props = {
  todo?: string;
};

const <%= h.changeCase.pascal(name) %>: FC<PropsWithChildren<Props>> = ({ todo }) => (
  <Wrapper>
    <Text><%= h.changeCase.pascal(name) %> component {todo}</Text>
  </Wrapper>
);

export default <%= h.changeCase.pascal(name) %>;
