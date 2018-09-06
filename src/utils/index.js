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
   * newLineAndTabsBuilder
   * @description Creates a string with a new line and as tabs
   * as it's been specified in the parameter
   * @param {Number} numberTabs
   * @returns String
   */
  function newLineAndTabsBuilder( numberTabs ) {
    if (isNaN(Number(numberTabs))) {
      return '';
    }

    let newLine = '\n';

    for ( let i = 1; i <= numberTabs; i += 1 ) {
      newLine += '\t';
    }

    return newLine;
  }

  /**
   * newLineAndSpacesBuilder
   * @description Creates a string with a new line and as spaces
   * as it's been specified in the parameter
   * @param {Number} [numberSpaces = 6]
   * @returns String
   */
  function newLineAndSpacesBuilder( numberSpaces = 6 ) {
    if (isNaN(Number(numberSpaces))) {
      return '';
    }

    let newLine = '\n';

    for ( let i = 1; i <= numberSpaces; i += 1 ) {
      newLine += ' ';
    }

    return newLine;
  }

  /**
   * htmlCommentBuilder
   * @description Creates an html comment with possible tabs
   * @param {string} text
   * @param {number} [withTab=0]
   * @returns String
   */
  function htmlCommentBuilder(text, withTab = 0) {
    let tempTab = '';

    if (withTab > 0) {
      for ( let i = 1; i <= withTab; i += 1 ) {
        tempTab += '\t';
      }
    }
    
    return `${tempTab}<!-- ${text} -->`;
  }

  /**
   * dividerBuilder
   * @description Some markup that could be used to differentiate
   * sections in CV, makes sense use it when rendering the markup
   * @param {string} [className='divider']
   * @returns String
   */
  function dividerBuilder(className = 'divider') {
    return `<div class="${className}"></div>`;
  }

  /**
   * htmlTagBuilder
   * @description 
   * @param {*} content
   * @param {*} tag
   * @param {number} [numberTabs=2]
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

  function addTabSpaceOrBlank(condition, type, counter) {
    const method = type === 'tab' ? newLineAndTabsBuilder : newLineAndSpacesBuilder;

    return condition ? method(counter) : '';
  }

  function isLastItem(array, index) {
    return (index + 1) === array.length;
  }



  const oneTab = newLineAndTabsBuilder( 1 );
  const twoTabs = newLineAndTabsBuilder( 2 );
  const threeTabs = newLineAndTabsBuilder( 3 );

  function educationBuilder( education ) {
    const content = education.reduce(( acc, curr, index ) => {
      const addTabs = addTabSpaceOrBlank((index !== 0), 'tab', 2);
      const hasDetail = curr.detail ? `${threeTabs}    <em class="resume__education-detail">${curr.detail}</em>` : '';
      const liTag = 'li';
      const spanTag = 'span';

      acc += `${addTabs}<${liTag}>
              <${spanTag}>
                ${curr.name}${hasDetail}
              </${spanTag}>
            </${liTag}>`

      return acc;
    }, '' );

    return `  <section class="resume__education-item">
          <ul class="resume__main-list">
            ${content}
          </ul>
        </section>${oneTab}`;
  }

  return {
    newLineAndTabsBuilder,
    newLineAndSpacesBuilder,
    htmlTagBuilder,
    htmlCommentBuilder,
    dividerBuilder,
    addTabSpaceOrBlank,
    isLastItem,
    educationBuilder,
  };
}());
