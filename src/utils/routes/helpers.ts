import { ROUTES } from './enums';

export const urlWithRouteParams = (
  route: ROUTES,
  params: Record<string, string>,
) => {
  Object.keys(params).map((key) => {
    route = route.replace(`[${key}]`, params[key]) as ROUTES;
  });

  return route;
};
