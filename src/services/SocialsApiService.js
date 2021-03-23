import axios from 'axios';
import config from '../config';

export default class SocialsApiService {
  static get(authToken) {
    const url = SocialsApiService.#buildUrl();

    return axios.get(url, {
      headers: {
        Authentication: authToken,
      },
    });
  }

  static getById(authToken, { id }) {
    const url = SocialsApiService.#buildUrl();

    return axios.get(url.href + `/${id}`, {
      headers: {
        Authentication: authToken,
      },
    });
  }

  static post(authToken, { name }) {
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
