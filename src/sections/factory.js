import Promise from 'bluebird';
import {readdirSync, statSync} from 'fs';
import {join, sep} from 'path';
import Section from './section';

const NO_PATH = '';

// http://stackoverflow.com/questions/18112204/get-all-directories-within-directory-nodejs
const getDirectories = (srcpath) => {
  return readdirSync(srcpath).filter(function(file) {
    return statSync(join(srcpath, file)).isDirectory();
  });
}

export default class SectionsFactory {
  constructor({path = NO_PATH} = {}) {
    if(path === NO_PATH ) {
      throw new Error('[SectionsFactory#constructor] path cant be a empty string');
    }
    this.path = path;
  }

  sections() {
    return new Promise((resolve, reject) => {
      const sectionsBuilders = getDirectories(this.path)
                  .map(dir => `${this.path}${sep}${dir}`)
                  .map(path => Section.build({path}));

      Promise.all(sectionsBuilders).then(sections => resolve(sections));
    });
  }
}
