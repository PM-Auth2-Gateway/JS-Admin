import axios from 'axios';
import config from '../config';

export default class SocialsApiService {
  static async get(authToken) {
    const url = SocialsApiService.#buildUrl();

    return axios.get(url, {
      headers: {
        Authentication: authToken,
      },
    });
  }

  static async getById(authToken, { id }) {
    const url = SocialsApiService.#buildUrl();

    return axios.get(url.href + `/${id}`, {
      headers: {
        Authentication: authToken,
      },
    });
  }

  static async post(authToken, { name }) {
    const url = SocialsApiService.#buildUrl();

    return axios.post(
      url,
      {
        name,
      },
      {
        headers: {
          Authentication: authToken,
        },
      }
    );
  }

  static #buildUrl = () => {
    return new URL('/Admin/socials', config.API_ENDPOINT);
  };
}
