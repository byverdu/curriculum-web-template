/*
Data entry point for all the content that will be used
*/

// prism theme, defaults to dracula a custom theme
// possible values are prism, coy, dark, funky, okaidia, solorizedlight, tomorrow, twilight
const prismThemes = [
  'dracula', 'prism', 'coy', 'dark', 'funky', 'okaidia', 'solarizedlight', 'tomorrow', 'twilight'
];
export const prismTheme = 'dark';
export const isValidPrismTheme = () => {
  if (!prismThemes.includes(prismTheme)) {
    throw Error(`\x1b[31m ${prismTheme} is not a valid prism theme, choose one from the "prismThemes" array in "${__dirname}" \x1b[0m`);
  } 
}

// Content for <meta> tags in <head>
export const headContentConfig = {
  description: 'John Doe Resume',
  keywords: 'HTML5, SCSS, JavaScript, Node, Jest, ES6, Gulp',
  author: '@DoeJohn'
};

// Content for <footer> tag
export const footerContentConfig = {
  author: '@DoeJohn'
}


export function prismThemeLoader(themeToLoad) {
  if (themeToLoad === 'dracula') {
    return require('../sass/themes/prism-dracula.css');
  } else {
    const tempTheme = themeToLoad === 'prism' ? themeToLoad : `prism-${themeToLoad}`;
    return require(`prismjs/themes/${tempTheme}.css`);
  }
}
