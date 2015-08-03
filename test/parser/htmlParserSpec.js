/* eslint no-unused-vars:0 */
import sinon from 'sinon';
import {expect} from 'chai';

import HtmlParser from '../../src/parser/htmlParser';

import {PATH_STATIC_SECTION, PATH_DINAMYC_SECTION} from '../constants';

describe('HtmlParser', () => {
  it('Expect be an instanciable class', () => {
    return expect(HtmlParser).to.not.be.undefined;
  });
});
