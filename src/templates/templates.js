import {
  htmlTagBuilder,
  newLineAndTabsBuilder,
  newLineAndSpacesBuilder,
  isLastItem,
  addTabSpaceOrBlank
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
    const listItems = htmlTagBuilder( details, 'li', 12 );
    const addTab = addTabSpaceOrBlank(!isLastItem(arrayDetails, index), 'tab', 2);
  
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
  return htmlTagBuilder( content, tagName, 10 );
}

/**
 * experienceTemplate
 * @description Extracts info from Array of objects
 *
 * @param {Array} experiences
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

    template += `${oneTab}<section class="resume__experience-item">
            <h3 class="resume__main-title">${company}</h3>
            <h4 class="resume__main-title">${date}</h4>
            <ul class="resume__main-list">
              ${listItems}
            </ul>
          </section>${addTab}`
  });

  return template;
}

/**
 * skillsTemplate
 * @description Footer tag template
 * 
 * @export
 * @param {String} skills
 * @returns String
 */
export function skillsTemplate( skills ) {
  const splitSkills = skills.split( '.' );
  const skillsPerRow = Math.floor( splitSkills.length / 5 );
  let tableRows = '';
  let count = splitSkills.length;

  while ( count > 0 ) {
    const firstItems = splitSkills.splice( 0, skillsPerRow );
    const tdItems = htmlTagBuilder( firstItems, 'td', 12 );
    const addSpaces = addTabSpaceOrBlank((count / skillsPerRow > 1), 'space');
    const addTabs = addTabSpaceOrBlank((count !== splitSkills.length), 'space', 10);
    
    tableRows += `${addTabs}<tr>
            ${tdItems}
          </tr>${addSpaces}`;
    
    count -= skillsPerRow;
  }

  return tableRows;
}

/**
 * footerContentTemplate
 * @description Footer tag template
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
