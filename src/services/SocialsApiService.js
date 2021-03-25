import { instance } from '../axiosConfig';

export default class SocialsApiService {
  static get() {
    const url = SocialsApiService.#buildUrl();

    return instance.get(url);
  }

  static getById(id) {
    const url = SocialsApiService.#buildUrl();

    return instance.get(url + `/${id}`);
  }

  static post({ name }) {
    const url = SocialsApiService.#buildUrl();

    return instance.post(url, {
      name,
    });
  }

  static #buildUrl = () => {
    return new URL('/Admin/socials');
  };
}
