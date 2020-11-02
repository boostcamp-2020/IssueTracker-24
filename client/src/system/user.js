import { removeToken } from '../utils/token';
import { getData } from '../lib/request';

const url = {
  LOGIN: 'auth/login',
  GITHUB_LOGIN: 'auth/github/login',
};

export const logout = () => {
  removeToken();
};
