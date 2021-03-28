export default class LocalStorageService {
  static getToken() {
    return localStorage.getItem('token');
  }

  static setToken(token) {
    localStorage.setItem('token', token);
  }

  static getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  static setUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  static clear() {
    localStorage.clear();
  }
}
