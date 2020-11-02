export const getCookie = (name) => {
  const value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return value ? value[2] : null;
};

export const setCookie = (name, value) => {
  document.cookie = name + '=' + escape(value);
};

export const deleteCookie = (name) => {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};
