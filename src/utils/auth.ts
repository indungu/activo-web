import * as Cookie from 'cookies-js';

export const authService = {
  isAuthenticated: (): boolean => Cookie.get('jwt-token') ? true : false,
};
