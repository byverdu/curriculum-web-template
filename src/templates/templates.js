import {
  htmlTagBuilder
} from '../utils';

/**
 * headContentTemplate
 * @description Head tag builder that contains most used meta tags
 *
 * @param {Object} {
 *   description = meta tag for description,
 *   keywords = meta tag for keywords,
 *   author = meta tag for author
 * }
 * @returns String
 */
export function headContentTemplate({
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
 * asideItemContentTemplate
 * @description Aside Item builder
 * 
 * @param {Array} array 
 * @param {String} headerTittle 
 * @param {String} id
 * 
 *  @returns String
 */
export function asideItemContentTemplate( array, headerTittle, className = '' ) {
  const listItems = htmlTagBuilder( array, 'li' );

  return `<nav class="resume__aside-nav">
    <h4 class="resume__aside-title">${headerTittle}</h4>
    <ul class="resume__aside-list ${className}">
      ${listItems}
    </ul>
  </nav>`;
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
export function footerContentTemplate ({author}) {
  return `<footer class="resume__footer">
      <p class="resume__footer-copy">Made with <span>&lt;3</span> by ${author}, <b class="js-footer-year">2018</b></p>
    </footer>`;
}
