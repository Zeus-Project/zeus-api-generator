/* eslint no-underscore-dangle: 0 */
export const NO_BASE_PATH = '';
export const NO_PATH = '';
export const NO_HOST = '';

export class Url {
  constructor() {
    this._basePath = NO_BASE_PATH;
    this._host = NO_HOST;
  }

  set basePath(path) {
    this._basePath = path;
  }

  set host(host) {
    this._host = host;
  }

  absolute({path = NO_PATH} = {}){
    if(this._basePath === NO_BASE_PATH || this._host === NO_HOST) {
      throw new Error('[Url#absolute] setup basePath and/or host');
    }
  }
}

export default new Url();
