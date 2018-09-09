import {
  htmlTagBuilder,
  whiteSpaceBuilder,
  newLineAndSpacesBuilder,
  isLastItem,
  addTabSpaceOrBlank
} from '../utils';

import {
  rootCssClass
} from '../../src/config';

/**
 * @name headTemplate
 * @description Head tag builder that contains most used meta tags
 * @export
 * 
 * @param {Object} {
 *   description = meta tag for description,
 *   keywords = meta tag for keywords,
 *   author = meta tag for author
 * }
 * @returns String
 */
export function headTemplate({
  description, keywords, author
}) {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charsret="UTF-8">
      <meta name="description" content="${description}">
      <meta name="keywords" content="${keywords}">
      <meta name="author" content="${author}">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/themes/prism.min.css">
      <title>${description}</title>
    </head>
    <body>`;
}

/**
 * @name asideItemTemplate
 * @description Aside section template
 * @export
 * 
 * @param {Array} arrayDetails
 * 
 *  @returns String
 */
export function asideItemTemplate(arrayDetails) {
  let aside = '';
  
  arrayDetails.forEach((item, index) => {
    const { details, headerTitle, className } = item;
    const listItems = htmlTagBuilder( details, 'li', 12 );
    const addTab = addTabSpaceOrBlank(!isLastItem(arrayDetails, index), 'tab', 2);
  
    aside += `<nav class="${rootCssClass}__aside-nav">
          <h4 class="${rootCssClass}__aside-title">${headerTitle}</h4>
          <ul class="${rootCssClass}__aside-list ${className}">
            ${listItems}
          </ul>
        </nav>${addTab}`;
  });

  return aside;
}

/**
 * @name summaryTemplate
 * @description Personnal summary section template
 * @export
 * 
 * @param {Array} content
 * @param {String} tagName
 * 
 * @returns String
 */
export function summaryTemplate(content, tagName) {
  return htmlTagBuilder( content, tagName, 10 );
}

/**
 * @name experienceTemplate
 * @description Experience section template
 * @export
 *
 * @param {Array} experiences
 * 
 * @returns String
 */
export function experienceTemplate( experiences ) {
  let template = '';
  const oneTab = newLineAndSpacesBuilder(10);
  // const isLastItem = index => (index + 1) === experiences.length;

  experiences.forEach((experience, index) => {
    const { date, company, items } = experience;
    const listItems = htmlTagBuilder( items.split( '.' ), 'li', 14);
    const addTab = addTabSpaceOrBlank(!isLastItem(experiences, index), 'tab', 1);

    template += `${oneTab}<section class="${rootCssClass}__experience-item">
            <h3 class="${rootCssClass}__main-title">${company}</h3>
            <h4 class="${rootCssClass}__main-title">${date}</h4>
            <ul class="${rootCssClass}__main-list">
              ${listItems}
            </ul>
          </section>${addTab}`
  });

  return template;
}

/**
 * @name educationTemplate
 * @description Education section template
 * 
 * @param {Array} education
 * 
 * @returns String 
 */
export function educationTemplate( education ) {
  const twoSpaces = whiteSpaceBuilder( 2 );
  const sixteenSpaces = newLineAndSpacesBuilder( 16 );

  const content = education.reduce(( acc, curr, index ) => {
    const addLiSpaces = addTabSpaceOrBlank((index !== 0), 'space', 12);
    const hasDetail = curr.detail ? `${sixteenSpaces}<em class="${rootCssClass}__education-detail">${curr.detail}</em>` : '';
    const liTag = 'li';
    const spanTag = 'span';

    acc += `${twoSpaces}${addLiSpaces}<${liTag}>
              <${spanTag}>
                ${curr.name}${hasDetail}
              </${spanTag}>
            </${liTag}>`

    return acc;
  }, '' );

  return `${twoSpaces}<section class="${rootCssClass}__education-item">
          <ul class="${rootCssClass}__main-list">
          ${content}
          </ul>
        </section>`;
}

/**
 * @name skillsTemplate
 * @description Skills section template
 * @export
 * 
 * @param {String} skills
 * 
 * @returns String
 */
export function skillsTemplate( skills ) {
  const splitSkills = skills.split( '.' );
  const skillsPerRow = Math.floor( splitSkills.length / 5 );
  let tableRows = '';
  let count = splitSkills.length;
  let hasIterated = false;

  while ( count > 0 ) {
    const firstItems = splitSkills.splice( 0, skillsPerRow );
    const tdItems = htmlTagBuilder( firstItems, 'td', 12 );
    const addTabs = addTabSpaceOrBlank(
      hasIterated,
      'whiteSpace',
      10
    );
    const addSpaces = addTabSpaceOrBlank(
      (count / skillsPerRow > 1),
      'space',
      null
    );

    tableRows += `${addTabs}<tr>
            ${tdItems}
          </tr>${addSpaces}`;
    
    count -= skillsPerRow;
    hasIterated = true;
  }

  return tableRows;
}

/**
 * @name footerContentTemplate
 * @description Footer tag template
 * @export
 *
 * @param {Object} {
 *   author = author name
 * }
 * @returns String
 */
export function footerTemplate ({author}) {
  return `<footer class="${rootCssClass}__footer">
        <p class="${rootCssClass}__footer-copy">Made with <span>&lt;3</span> by ${author}, <b class="js-footer-year">2018</b></p>
      </footer>`;
}
