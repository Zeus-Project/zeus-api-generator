/* eslint no-unused-vars:0 */
import sinon from 'sinon';
import {expect} from 'chai';

import {Section} from '../../src';

import {PATH_STATIC_SECTION, PATH_DINAMYC_SECTION} from '../constants';

describe('Section', () => {
  it('expect be an instanciable class', () => {
    return expect(Section).to.not.be.undefined;
  });

  describe('.build', () => {
    describe('Given an empty path', () => {
      it('expect throw an error', () => {
        expect(() => Section.build()).to.throw('[Section.build] path cant be a empty string');
      });
    });

    describe('Given a path for a static page', () => {
      let build, section;

      beforeEach((done) => {
        build = Section.build({path: PATH_STATIC_SECTION});
        build.then(instance => {
          section = instance;
          done();
        });
      });

      afterEach(() => {
        build = null;
        section = null;
      });

      it('expect return a promise with the an instance created', () => {
        build.then(instance => {
          expect(instance).to.be.an.instanceof(Section);
        });
      });

      it('expect have a name in the section', () => {
        expect(section.name).to.be.eql('Name CSS Section');
      });

      it('expect have a title in the section', () => {
        expect(section.title).to.be.eql('Title CSS Section');
      });

      it('expect have a describe in the section', () => {
        expect(section.description).to.be.eql('<p>Description HTML CSS Section</p>');
      });

      it('expect have a url attribute with the dirrection for the static page', () => {
      });

    });
  });
});
