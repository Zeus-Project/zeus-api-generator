/* eslint no-unused-vars:0 */
import sinon from 'sinon';
import {expect} from 'chai';

import url, {Url, NO_BASE_PATH, NO_HOST} from '../../src/url';

import {BASE_PATH, PATH_STATIC_SECTION, PATH_DINAMYC_SECTION, GITHUB_HOST_FIXTURE} from '../constants';

describe('url', () => {
  it('expect be an instance of Url', () => expect(url).to.be.an.instanceof(Url));

  describe('Whitout setting the host and basePath', () => {
    it('Expect throw an error when request for the absolute URL', () => {
      expect(() => url.absolute({path: PATH_STATIC_SECTION})).to.throw('[Url#absolute] setup basePath and/or host');
    });
  });

  describe('Setting host and basePath', () => {
    beforeEach(() => {
      url.basePath = BASE_PATH;
      url.host = GITHUB_HOST_FIXTURE;
    });

    afterEach(() => {
      url.basePath = NO_BASE_PATH;
      url.host = NO_HOST;
    });

    xit('Expect have a absolute URL giving an Absolute Path to a section', () => {
    });

  });

});
