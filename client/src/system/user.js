import { removeToken } from '../utils/token';
import { getData } from '../lib/request';

const url = {
  LOGIN: 'auth/login',
  GITHUB_LOGIN: 'auth/github/login',
};

export const login = async (id, password) => {
  const body = { id, password };

  const response = await getData(url.LOGIN, body);
  return response;
};

export const gitHubLogin = async () => {
  const response = await getData(url.GITHUB_LOGIN);
  return response;
};

export const logout = () => {
  removeToken();
};
