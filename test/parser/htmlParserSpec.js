/* eslint no-unused-vars:0 */
import sinon from 'sinon';
import {expect} from 'chai';

import {readFileSync} from 'fs';
import {join} from 'path';

import HtmlParser from '../../src/parser/htmlParser';

import {PATH_STATIC_SECTION, PATH_DINAMYC_SECTION} from '../constants';

const DATA_FILE = 'index.html';

describe('HtmlParser', () => {
  it('Expect be an instanciable class', () => {
    return expect(HtmlParser).to.not.be.undefined;
  });

  describe('An instance with a empty html param', () => {
    it('expect throw an exception', () => {
      expect(() => new HtmlParser()).to.throw('[HtmlParser#constructor] html is a required param');
    });
  });

  describe('An instance with a valid HTML string', () => {
    let htmlParser;

    beforeEach(() => {
      htmlParser = new HtmlParser({html: readFileSync(join(PATH_STATIC_SECTION, DATA_FILE))});
    });
    afterEach(() => {
      htmlParser = null;
    });

    it('expect be possible query for the name attribute', () => {
      expect(htmlParser.name).to.be.eql('Name CSS Section');
    });

    it('expect be possible query for the title attribute', () => {
      expect(htmlParser.title).to.be.eql('Title CSS Section');
    });

    it('expect be possible query for the description attribute', () => {
      expect(htmlParser.description).to.be.eql('<p>Description HTML CSS Section</p>');
    });
  });
});
