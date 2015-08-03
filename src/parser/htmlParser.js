import Parser from './parser';
import cheerio from 'cheerio';

const NO_HTML = '';

export default class HtmlParser extends Parser {
  constructor({$ = cheerio, html = NO_HTML} = {}){
    super();
    if(html === NO_HTML){
      throw new Error('[HtmlParser#constructor] html is a required param');
    }
    this.$html = $(html);
  }
}
