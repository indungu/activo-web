import * as Cookie from 'cookies-js';
import * as jwtDecode from 'jwt-decode';

export const authService = {
  getToken() {
    return Cookie.get('jwt-token');
  },
  isAuthenticated() {
    return this.getToken() ? true : false;
  },
  getUser() {
    return this.getToken() ? jwtDecode(Cookie.get('jwt-token')) : null;
  },
  logoutUser() {
    Cookie.expire('jwt-token', { path: '/', domain: '.andela.com' });
  },
};
