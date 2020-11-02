export const getCookie = (name) => {
  const value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return value ? value[2] : null;
};

export const setCookie = (name, value) => {
  document.cookie = name + '=' + escape(value);
};
