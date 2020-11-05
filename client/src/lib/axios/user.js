import { removeToken } from '../../utils/token';
import { getData } from '../lib/axios/request';

const url = {
  LOGOUT: 'auth/logout',
};

export const logout = () => {
  await getData(url.LOGOUT);
  removeToken();
};
