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
function headContentTemplate({
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
      <title>${description}</title>
    </head>
    <body>`;
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
function footerContentTemplate ({author}) {
  return `<footer class="resume__footer">
      <p class="resume__footer-copy">Made with <span>&lt;3</span> by ${author}, <b class="js-footer-year">2018</b></p>
    </footer>`;
}

export const templates = {
  headContentTemplate,
  footerContentTemplate
};
