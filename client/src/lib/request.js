import axios from 'axios';
import { getToken } from '../utils/token';

const API_URL =
  process.env.NODE_ENV === 'production'
    ? `${process.env.PROD_URL}`
    : `${process.env.DEV_URL}`;

const getOptions = (body) => {
  const headers = { 'Content-Type': 'application/json; charset=UTF-8' };
  const options = {
    mode: 'cors',
    credentials: 'include',
  };
  options.headers = headers;

  const token = getToken();
  if (token) {
    options.headers = { Authorization: token };
  }

  if (body) {
    options.body = JSON.stringify(body);
  }

  return options;
};

const getData = async (url, body) => {
  const options = getOptions(body);

  const response = await axios.get(`${API_URL}${url}`, options);
  return response;
};

const postData = async (url, body) => {
  const options = getOptions(body);

  const response = await axios.post(`${API_URL}${url}`, options);
  return response;
};

const patchData = async (url, body) => {
  const options = getOptions(body);

  const response = await axios.patch(`${API_URL}${url}`, options);
  return response;
};

const deleteData = async (url, body) => {
  const options = getOptions(body);

  const response = await axios.delete(`${API_URL}${url}`, options);
  return response;
};

export { getData, postData, patchData, deleteData };
