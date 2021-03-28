import { instance } from '../axiosConfig';

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
    return instance.post(
      'Admin/tokenAndProfile',
      {
        session_id: LoginApiService.session_id,
      },
      {
        withCredentials: true,
      }
    );
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
}
