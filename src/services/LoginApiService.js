import { instance } from '../axiosConfig';
import LocalStorageService from './LocalStorageService';

export default class LoginApiService {
  static async login() {
    const { data } = await instance.post('Admin/testToken');
    LocalStorageService.setToken(data);
  }
}
