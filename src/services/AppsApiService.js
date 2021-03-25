import { instance } from '../axiosConfig';

export default class AppsApiService {
  static get() {
    const url = AppsApiService.#buildUrl();

    return instance.get(url);
  }

  static getById(id) {
    const url = AppsApiService.#buildUrl();

    return instance.get(url + `/${id}`);
  }

  static updateById(id, { name }) {
    const url = AppsApiService.#buildUrl();

    return instance.put(url + `/${id}`, {
      name,
    });
  }

  static deleteById(id) {
    const url = AppsApiService.#buildUrl();

    return instance.delete(url + `/${id}`);
  }

  static post({ name }) {
    const url = AppsApiService.#buildUrl();

    return instance.post(url, {
      name,
    });
  }

  static #buildUrl = () => {
    return '/Admin/applications';
  };
}
