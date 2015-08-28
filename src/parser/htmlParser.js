import Parser from './parser';
import cheerio from 'cheerio';

const NO_HTML = '';

export default class HtmlParser extends Parser {
  constructor({$ = cheerio, html = NO_HTML} = {}){
    super();
    if(html === NO_HTML){
      throw new Error('[HtmlParser#constructor] html is a required param');
    }
    this.$ = $.load(html, {decodeEntities: false});
  }

  get name() {
    return this.$('[data-zeus=name]').text();
  }

  get title() {
    return this.$('[data-zeus=title]').text();
  }

  get description() {
    return this.$('[data-zeus=description]').html();
  }
}
