import {
  htmlTagBuilder,
  newLineAndTabsBuilder
} from '../utils';

/**
 * headTemplate
 * @description Head tag builder that contains most used meta tags
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
 * asideItemTemplate
 * @description Aside Item builder
 * 
 * @param {Array} arrayDetails
 * 
 *  @returns String
 */
export function asideItemTemplate(arrayDetails) {
  let aside = '';
  
  arrayDetails.forEach((item, index) => {
    const { details, headerTitle, className } = item;
    const listItems = htmlTagBuilder( details, 'li' );
    const addTab = (index === 0) ? newLineAndTabsBuilder( 1 ) : '';

    aside += `<nav class="resume__aside-nav">
    <h4 class="resume__aside-title">${headerTitle}</h4>
    <ul class="resume__aside-list ${className}">
      ${listItems}
    </ul>
  </nav>${addTab}`;
  });

  return aside;
}

/**
 * summaryTemplate
 * @description Your personnal summary template
 * @export
 * @param {Array} content
 * @param {String} tagName
 * @returns String
 */
export function summaryTemplate(content, tagName) {
  return htmlTagBuilder( content, tagName );
}

/**
 *
 *
 * @param {*} { date, company, items }
 * @returns
 */
function preExperiencesTemplate({ date, company, items }, isLastItem) {
  const listItems = htmlTagBuilder( items.split( '.' ), 'li', 10);
  const oneTab = newLineAndTabsBuilder( 1 );
  const addOneTab = isLastItem ? '' : oneTab;

  return `${oneTab}  <section class="resume__experience-item">
        <h3 class="resume__main-title">${company}</h3>
        <h4 class="resume__main-title">${date}</h4>
        <ul class="resume__main-list">
          ${listItems}
        </ul>
      </section>${addOneTab}`;
}

export function experienceTemplate( experiences ) {
  let template = '';
  experiences.forEach((item, index) => {
    const isLastItem = (index + 1) === experiences.length;
    const temp = preExperiencesTemplate( item, isLastItem );
    template = template.concat( temp );
  });

  return template;
}

/**
 * footerContentTemplate
 * @description Footer tag builder
 *
 * @param {Object} {
 *   author = author name
 * }
 * @returns String
 */
export function footerTemplate ({author}) {
  return `<footer class="resume__footer">
      <p class="resume__footer-copy">Made with <span>&lt;3</span> by ${author}, <b class="js-footer-year">2018</b></p>
    </footer>`;
}
