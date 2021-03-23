import axios from 'axios';
import config from '../config';

export default class AppsApiService {
  static async get(authToken) {
    const url = AppsApiService.#buildUrl();

    return axios.get(url, {
      headers: {
        Authentication: authToken,
      },
    });
  }

  static async getById(authToken, { id }) {
    const url = AppsApiService.#buildUrl();

    return axios.get(url.href + `/${id}`, {
      headers: {
        Authentication: authToken,
      },
    });
  }

  static async updateById(authToken, { id, name }) {
    const url = AppsApiService.#buildUrl();

    return axios.put(
      url.href + `/${id}`,
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

  static async deleteById(authToken, { id }) {
    const url = AppsApiService.#buildUrl();

    return axios.delete(url.href + `/${id}`, {
      headers: {
        Authentication: authToken,
      },
    });
  }

  static async post(authToken, { name }) {
    const url = AppsApiService.#buildUrl();

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
    return new URL('/Admin/applications', config.API_ENDPOINT);
  };
}
