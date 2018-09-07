/* eslint-disable func-names */
module.exports = ( function () {
  /**
   * Blueprint class for validation errors
   * @class ValidationError
   */
  class ValidationError {
    constructor() {
      this.name = this.constructor.name;
      this.message = `${this.name}::`;
    }
  }

  /**
   * Error class for wrong number of arguments
   * @class WrongNumberArgsError
   * @extends {ValidationError}
   */
  class WrongNumberArgsError extends ValidationError {
    constructor(fncName, numberArgs) {
      super()
      this.message += ` ${fncName} expects at least ${numberArgs} arguments`;
    }
  }

  /**
   * Error class for wrong type of arguments
   * @class WrongNumberArgsError
   * @extends {ValidationError}
   */
  class WrongTypeArgsError extends ValidationError {
    constructor(fncName, typeArg) {
      super()
      this.message += ` ${fncName} expects a ${typeArg} argument`;
    }
  }

  /**
   * Error class for wrong value of arguments
   * @class WrongNumberArgsError
   * @extends {ValidationError}
   */
  class WrongValueArgsError extends ValidationError {
    constructor(fncName, typeArg) {
      super()
      this.message += ` ${typeArg} argument is not a valid value for ${fncName}`;
    }
  }
  
  /**
   * @name newLineAndTabsBuilder
   * @description Creates a string with a new line and as tabs
   * as it's been specified in the parameter
   * @param {Number} numberTabs
   * 
   * @returns String
   */
  function newLineAndTabsBuilder( numberTabs ) {
    if (isNaN(Number(numberTabs))) {
      throw new WrongTypeArgsError('newLineAndTabsBuilder', 'Number');
    }

    return '\n'.concat('\t'.repeat(numberTabs));
  }

  /**
   * @name newLineAndSpacesBuilder
   * @description Creates a string with a new line and as spaces
   * as it's been specified in the parameter
   * @param {Number} [numberSpaces = 6]
   * 
   * @returns String
   */
  function newLineAndSpacesBuilder( numberSpaces = 6 ) {
    if (isNaN(Number(numberSpaces))) {
      throw new WrongTypeArgsError('newLineAndSpacesBuilder', 'Number');
    }

    return '\n'.concat(' '.repeat(numberSpaces));
  }

  /**
   * @name whiteSpaceBuilder
   * @description generates white space depending as per argument passed
   * 
   * @param {Number} numberSpaces
   * 
   * @returns String
   */
  function whiteSpaceBuilder(numberSpaces) {
    if (arguments.length < 1) {
      throw new WrongNumberArgsError('whiteSpaceBuilder', 1);
    }
    if (isNaN(Number(numberSpaces))) {
      throw new WrongTypeArgsError('whiteSpaceBuilder', 'Number');
    }

    return ''.concat(' '.repeat(numberSpaces));
  }

  /** 
   * @name addTabSpaceOrBlank
   * @description calls a method depending the argument type
   * calls [newLineAndTabsBuilder, newLineAndSpacesBuilder, whiteSpaceBuilder] respectively
   * 
   * @param {Boolean} condition 
   * @param {String} type > tab, space or whiteSpace
   * @param {Number} counter
   * 
   * @returns String
   */
  function addTabSpaceOrBlank(condition, type, counter) {
    if (arguments.length < 2) {
      throw new WrongNumberArgsError('addTabSpaceOrBlank', 2);
    }
    const methods = {
      tab: newLineAndTabsBuilder,
      space: newLineAndSpacesBuilder,
      whiteSpace: whiteSpaceBuilder
    }
    if (!Object.keys(methods).includes(type)) {
      throw new WrongValueArgsError('addTabSpaceOrBlank', type);
    }

    return condition ? methods[type](counter) : '';
  }

  /**
   * @name htmlCommentBuilder
   * @description Creates an html comment with possible tabs
   * @param {string} text
   * @param {number} [withTab=0]
   * 
   * @returns String
   */
  function htmlCommentBuilder(text, withTab = 0) {
    const tabs = ''.concat('\t'.repeat(withTab));
    
    return `${tabs}<!-- ${text} -->`;
  }

  /**
   * @name dividerBuilder
   * @description Some markup that could be used to differentiate
   * sections in CV, makes sense use it when rendering the markup
   * 
   * @param {string} [className='divider']
   * 
   * @returns String
   */
  function dividerBuilder(className = 'divider') {
    return `<div class="${className}"></div>`;
  }

  /**
   * @name htmlTagBuilder
   * @description creates html tags
   * 
   * @param {*} content
   * @param {*} tag
   * @param {number} [numberTabs=2]
   * 
   * @returns String
   */
  function htmlTagBuilder( content, tag, numberTabs = 6 ) {

    if (arguments.length < 2) {
      throw new WrongNumberArgsError('htmlTagBuilder', 2);
    }

    const spaces = newLineAndSpacesBuilder( numberTabs );

    return content.reduce(( acc, curr, index ) => {
      const addSpaces = index !== 0 ? `${spaces}` : '';

      return acc.concat( `${addSpaces}<${tag}>${curr}</${tag}>` );
    }, '' );
  }

  /**
   * @name isLastItem
   * @description Checks if actual index is the last item in an Array
   * 
   * @param {Array} array 
   * @param {Number} index
   *
   * @returns Boolean
   */
  function isLastItem(array, index) {
    return (index + 1) === array.length;
  }

  return {
    newLineAndTabsBuilder,
    newLineAndSpacesBuilder,
    htmlTagBuilder,
    htmlCommentBuilder,
    dividerBuilder,
    addTabSpaceOrBlank,
    isLastItem,
    whiteSpaceBuilder
  };
}());
