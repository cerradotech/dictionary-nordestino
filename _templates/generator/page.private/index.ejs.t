---
to: src/pages/<%= h.changeCase.lower(name) %>/index.page.tsx
---
import { FC } from 'react';

import { authMiddleware } from '~/infra';
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextApiRequest,
  observer,
} from '~/modules';
import { ROUTES } from '~/utils';

import <%= h.changeCase.pascal(name) %>View from './<%= h.changeCase.lower(name) %>.view';

type Props = {
  todo?: string;
};

export const getServerSideProps: GetServerSideProps<
  ProtectedPage<Props>
> = async ({ req }) => {
  const isAuthenticated = await authMiddleware(req as NextApiRequest);

  if (!isAuthenticated) {
    return {
      redirect: {
        destination: ROUTES.LOGIN,
        permanent: false,
      },
    };
  }

  return {
    props: {
      isAuthenticated,
    },
  };
};

export const <%= h.changeCase.pascal(name) %>Container: FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = () => {
  return <<%= h.changeCase.pascal(name) %>View />;
};

export default observer(<%= h.changeCase.pascal(name) %>Container);
