import axios from 'axios';
import { getToken } from '../../utils/token';

axios.defaults.baseURL =
  process.env.NODE_ENV === 'production'
    ? `${process.env.PROD_URL}`
    : `${process.env.DEV_URL}`;

const getOptions = (body) => {
  const options = {
    mode: 'cors',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json;charset=UTF-8' },
  };

  const token = getToken();
  if (token) options.headers = { ...options.headers, Authorization: token };

  if (body) options.body = JSON.stringify(body);

  return options;
};

const getData = async (url) => {
  const options = getOptions();

  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    console.error(error);
    alert('오류가 발생하여 요청에 실패했습니다.');
  }
};

const postData = async (url, body) => {
  const options = getOptions(body);

  try {
    const response = await axios.post(url, options);
    return response.data;
  } catch (error) {
    console.error(error);
    alert('오류가 발생하여 요청에 실패했습니다.');
  }
};

const patchData = async (url, body) => {
  const options = getOptions(body);

  try {
    const response = await axios.patch(url, options);
    return response.data;
  } catch (error) {
    console.error(error);
    alert('오류가 발생하여 요청에 실패했습니다.');
  }
};

const putData = async (url, body) => {
  const options = getOptions(body);

  try {
    const response = await axios.put(url, options);
    return response.data;
  } catch (error) {
    console.error(error);
    alert('오류가 발생하여 요청에 실패했습니다.');
  }
};

const deleteData = async (url) => {
  const options = getOptions();

  try {
    const response = await axios.delete(url, options);
    return response.data;
  } catch (error) {
    console.error(error);
    alert('오류가 발생하여 요청에 실패했습니다.');
  }
};

export { getData, postData, patchData, putData, deleteData };
