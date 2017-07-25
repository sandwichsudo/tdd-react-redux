/* eslint no-param-reassign: 0 */
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.github.com/',
  headers: { 'Content-Type': 'application/json;charset=UTF-8' },
});

const errorHandler = (request) => {
  if (request && request.response) {
    if (request.response.status > 399) {
      return Promise.reject(request.response.data);
    }
    return request;
  }
  return Promise.reject({
    message: request.message,
  });
};

axiosInstance.interceptors.response.use(null, errorHandler);

const xhr = {
  _get: url => axiosInstance.get(url),
  _put: (url, body) => axiosInstance.put(url, body),
  _post: (url, data) => axiosInstance.post(url, data),
  errorHandler,
};

export default xhr;
