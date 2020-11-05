import { removeToken } from '../../utils/token';
import { getData } from './request';

const url = {
  LOGOUT: 'auth/logout',
  GET_CURRENT_USER: '/users/current',
};

export const logout = async () => {
  await getData(url.LOGOUT);
  removeToken();
};

export const getCurrentUser = async () => {
  const currentUser = await getData(url.GET_CURRENT_USER);
  return currentUser;
};
