import { instance } from '../axiosConfig';
import LocalStorageService from './LocalStorageService';

export default class LoginApiService {
  static async login() {
    const { data } = await instance.get('Admin/token');
    LocalStorageService.setToken(data.token);
  }
}
