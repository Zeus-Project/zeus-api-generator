import Promise from 'bluebird';
import {HtmlParser} from '../parser';
import {readFile} from 'fs';
import {join} from 'path';

const readFilePromisify = Promise.promisify(readFile);

const NO_PATH = '';
const DATA_FILE = 'index.html';

export default class Section {
  static build({path = NO_PATH} = {}) {
    if(path === NO_PATH ) {
      throw new Error('[Section.build] path cant be a empty string');
    }

    return new Promise((resolve) => {
      readFilePromisify(join(path, DATA_FILE), {encoding: 'utf8'})
      .then(html => new HtmlParser({html}))
      .then(parser => resolve(new Section({parser})));
    });
  }

  constructor({parser} = {}) {
    if(!parser) {
      throw new Error('[Section#constructor] parser is a required param');
    }

    this.parser = parser;
  }

  get name() {
    return this.parser.name;
  }

  get title() {
    return this.parser.title;
  }

  get description() {
    return this.parser.description;
  }
}
