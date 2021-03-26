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

//BUG: Maybe not working due to backend issuses
// instance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     const originalRequest = error.config;
//     if (error.response.status === 401) {
//       if (LocalStorageService.getToken()) {
//         const { data } = await instance.post(
//           `Admin/refreshToken?${LocalStorageService.getToken()}`
//         );
//         LocalStorageService.setToken(data.token);
//         return instance(originalRequest);
//       }
//     }
//     return Promise.reject(error);
//   }
// );
