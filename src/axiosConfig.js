import axios from 'axios';
import LocalStorageService from './services/LocalStorageService';

export const instance = axios.create({
  baseURL: 'https://net-api-hbyuu.ondigitalocean.app/',
});

instance.interceptors.request.use((config) => {
  if (LocalStorageService.getToken()) {
    config.headers[
      'Authorization'
    ] = `Bearer ${LocalStorageService.getToken()}`;
  }
  return config;
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      return instance
        .post(
          'Admin/refreshToken',
          {},
          {
            withCredentials: true,
            headers: {
              token: LocalStorageService.getToken(),
            },
          }
        )
        .then(({ data }) => {
          LocalStorageService.setToken(data.token);
          return instance(originalRequest);
        });
    }
    return Promise.reject(error);
  }
);
