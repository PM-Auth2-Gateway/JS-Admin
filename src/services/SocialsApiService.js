import { instance } from '../axiosConfig';

export default class SocialsApiService {
  static get(appId) {
    const url = SocialsApiService.#buildUrl(appId);

    return instance.get(url);
  }

  static getById(appId, id) {
    const url = SocialsApiService.#buildUrl(appId);

    return instance.get(url + `/${id}`);
  }

  static postById(appId, id, { client_id, scope, secret_key }) {
    const url = SocialsApiService.#buildUrl(appId);

    return instance.post(url + `/${id}`, {
      client_id,
      scope,
      secret_key,
    });
  }

  static updateById(appId, id, { client_id, scope, secret_key }) {
    const url = SocialsApiService.#buildUrl(appId);

    return instance.put(url + `/${id}`, {
      client_id,
      scope,
      secret_key,
    });
  }

  static updateStatusById(appId, id, { status }) {
    const url = SocialsApiService.#buildUrl(appId);

    return instance.post(url + `/${id}/${status}`);
  }

  static #buildUrl = (appId) => {
    return `/Admin/applications/${appId}/socials`;
  };
}
