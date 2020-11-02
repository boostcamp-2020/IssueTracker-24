const USER_TOKEN = 'USER_TOKEN';

export const setToken = (token) => {
  localStorage.setItem(USER_TOKEN, `bearer ${token}`);
};

export const getToken = () => localStorage.getItem(USER_TOKEN);

export const removeToken = () => {
  localStorage.removeItem(USER_TOKEN);
};
