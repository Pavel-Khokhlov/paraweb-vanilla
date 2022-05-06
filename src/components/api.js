export default class Api {
  constructor(config) {
    this.url = config.url;
    this.headers = config.headers;
  }

  getCards() {
    return fetch(this.url, {
      headers: this.headers,
    }).then(this._checkPromise);
  }

  _checkPromise(res) {
    if (!res.ok) {
      Promise.reject(`Error ${res.status}`);
    }
    return res.json();
  }
}
