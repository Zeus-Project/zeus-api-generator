/* eslint no-unused-vars:0 */
import sinon from 'sinon';
import {expect} from 'chai';
import {join} from 'path';

import {SectionsFactory, Section} from '../../src';

import {BASE_PATH} from '../constants';

describe('SectionsFactory', () => {

  it('Expect be an instanciable class', () => {
    return expect(SectionsFactory).to.not.be.undefined;
  });

  describe('Given an empty path', () => {

    it('expect throw an error', () => {
      expect(() => new SectionsFactory()).to.throw('[SectionsFactory#constructor] path cant be a empty string');
    });

  });

  describe( 'Given a path', () => {

    let sectionsFactory;
    beforeEach(() => {
      sectionsFactory = new SectionsFactory({path: BASE_PATH});
    });
    afterEach(() => {
      sectionsFactory = null;
    });

    it('expect return a list of Section Objects when call #sections method', (done) => {
      sectionsFactory.sections().then((sections) => {
        expect(sections).to.be.instanceof(Array);
        expect(sections[0]).to.be.an.instanceof(Section);
        done();
      });
    });

  } );
});
