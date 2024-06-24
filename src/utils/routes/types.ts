import { NextRouter } from 'next/router';

export type BaseRouteParams<T> = Omit<NextRouter, 'query'> & {
  query: T;
};
