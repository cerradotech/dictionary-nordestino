export const parseTokenFromApi = (data: UserData): UserData => {
  return {
    accessToken: data.accessToken || '',
    id: data.id || '',
    email: data.email || '',
    name: data.name || '',
  };
};
