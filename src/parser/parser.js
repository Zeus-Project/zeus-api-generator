export default class Parser {
  get name() {
    throw new Error('[Parser.name] must be implemented');
  }

  get title() {
    throw new Error('[Parser.title] must be implemented');
  }

  get description() {
    throw new Error('[Parser.description] must be implemented');
  }
}
