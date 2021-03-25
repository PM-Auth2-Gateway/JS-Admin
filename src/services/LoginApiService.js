import { instance } from '../axiosConfig';
import LocalStorageService from './LocalStorageService';

export default class LoginApiService {
  static app_id = 1;
  static session_id;
  static async getSocials() {
    const { data } = await instance.get('Socials/', {
      headers: {
        App_id: this.app_id,
      },
    });
    return data.socials;
  }

  static async getAuthLink(social_id) {
    const { data } = await instance.post(
      'Socials/auth-link',
      { social_id, device: 'browser' },
      {
        headers: {
          App_id: LoginApiService.app_id,
        },
      }
    );
    LoginApiService.session_id = data.state;
    return this.buildUrl(data);
  }

  static async getProfile() {
    const { data } = await instance.post(
      'Admin/tokenAndProfile',
      {
        session_id: LoginApiService.session_id,
      },
      {
        headers: {
          App_id: LoginApiService.app_id,
        },
      }
    );
    LocalStorageService.setToken(data.token);
    return data;
  }

  static buildUrl(authLink) {
    const {
      auth_uri,
      redirect_uri,
      response_type,
      client_id,
      scope,
      state,
    } = authLink;

    return `${auth_uri}?redirect_uri=${redirect_uri}&response_type=${response_type}&client_id=${client_id}&scope=${scope}&state=${state}`;
  }

  static async login(social_id) {
    const link = await LoginApiService.getAuthLink(social_id);
    const modal = window.open(
      link,
      'Auth',
      'width=972,height=660,modal=yes,alwaysRaised=yes'
    );

    const interval = setInterval(() => {
      if (modal.closed) {
        clearInterval(interval);
      }
    }, 1000);
  }
}
