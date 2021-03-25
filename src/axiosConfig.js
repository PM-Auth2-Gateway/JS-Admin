import axios from 'axios';
import LocalStorageService from './services/LocalStorageService';

export const instance = axios.create({
  baseURL: 'https://net-api-hbyuu.ondigitalocean.app/',
});

instance.interceptors.request.use((config) => {
  if (LocalStorageService.getToken()) {
    config.headers['Authorization'] = LocalStorageService.getToken();
  }
  return config;
});
