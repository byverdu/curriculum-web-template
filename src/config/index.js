/*
Data entry point for all the config and content that will be used
*/

/*********    Prism Config    *********/

// prism theme, defaults to dracula a custom theme
// possible values are prism, coy, dark, funky, okaidia, solorizedlight, tomorrow, twilight
const prismThemes = [
  'dracula', 'prism', 'coy', 'dark', 'funky', 'okaidia', 'solarizedlight', 'tomorrow', 'twilight'
];
export const prismTheme = 'solarizedlight';
export const isValidPrismTheme = () => {
  if (!prismThemes.includes(prismTheme)) {
    throw Error(`\x1b[31m ${prismTheme} is not a valid prism theme, choose one from the "prismThemes" array in "${__dirname}" \x1b[0m`);
  } 
}

/**
 * prismThemeLoader
 * @description grabs prism theme from user's options
 * @export
 * @param {String} themeToLoad
 * @returns stylesheet
 */
export function prismThemeLoader(themeToLoad) {
  if (themeToLoad === 'dracula') {
    return require('../sass/themes/prism-dracula.css');
  } else {
    const tempTheme = themeToLoad === 'prism' ? themeToLoad : `prism-${themeToLoad}`;
    return require(`prismjs/themes/${tempTheme}.css`);
  }
}


/*********    Content For templates Config    *********/

// Content for <meta> tags in <head>
export const headContent = {
  description: 'John Doe Resume',
  keywords: 'HTML5, SCSS, JavaScript, Node, Jest, ES6, Gulp',
  author: '@DoeJohn'
};

// Content for <aside> and <nav> tag
// the template expects an Array of Ojects with this shape
export const contactDetailsContent = [
  {
    details: [
      'Name: John Doe Resume',
      'Email: DoeJohn@gmail.com',
      'Telephone: 07720 666999',
      'Address: W69 22IP'
    ],
    headerTitle: 'Contact Details',
    className: 'me-icons'
  },
  {
    details: [
      'Github: https://github.com/DoeJohn',
      'NPM: https://www.npmjs.com/~DoeJohn',
      'Portfolio: http://portfolio.DoeJohn.es.lo',
      'Linkedin: https://www.linkedin.com/in/DoeJohn/'
    ],
    headerTitle: 'Dev Network Details',
    className: 'dev-icons'
  }
];

// Title for the different section
export const sectionTitles = {
  summary: 'Summary',
  experience: 'Experience',
  education: 'Education'
};

// Content for user summary
// Keep the format, i.e. Array of of Ojects with this shape
export const summaryContent = [
  'Bacon ipsum dolor amet fatback brisket kevin burgdoggen buffalo. Pig doner sirloin turducken pancetta pork chop pork belly alcatra. Tri-tip salami kielbasa biltong. Fatback cupim pork belly ball tip.',
  'Shank shoulder strip steak ham hock tail ham pork alcatra short loin pork loin landjaeger meatball. Tail salami jerky sirloin ham swine pork chop ribeye. Doner flank tongue shank sirloin. Burgdoggen frankfurter pork belly meatball pork loin. Cupim capicola hamburger, biltong turkey chicken shankle turducken pig kevin strip steak jowl short loin.',
  'Corned beef prosciutto doner andouille t-bone jowl pancetta pork, frankfurter flank kevin capicola shankle ribeye sirloin. Tail beef prosciutto, sausage landjaeger brisket buffalo pork chop rump jerky fatback. Frankfurter andouille jowl capicola, filet mignon corned beef biltong picanha. Chicken prosciutto sirloin drumstick sausage.'
];


// Content for user experiences
// Keep the format, i.e. Array of of Ojects with this shape
// [items], is a string where the delimeter is a dot '.'
export const experiencesContent = [
  {
    date: 'All things Developer || December 2017 – Present',
    company: 'Farmer Games',
    items: 'Corned beef prosciutto doner andouille t-bone jowl pancetta pork.Frankfurter flank kevin capicola shankle ribeye sirloin.Tail beef prosciutto, sausage landjaeger brisket buffalo pork chop rump jerky fatback.Frankfurter andouille jowl capicola'
  },
  {
    date: 'Front End Developer || June 2016 – November 2017',
    company: 'Blue Deep Water',
    items: 'Corned beef prosciutto doner andouille t-bone jowl pancetta pork.Frankfurter flank kevin capicola shankle ribeye sirloin.Tail beef prosciutto, sausage landjaeger brisket buffalo pork chop rump jerky fatback.Frankfurter andouille jowl capicola'
  },
  {
    date: 'Front End Developer || February 2015 – June 2016',
    company: 'Bacon Digital',
    items: 'Corned beef prosciutto doner andouille t-bone jowl pancetta pork.Frankfurter flank kevin capicola shankle ribeye sirloin.Tail beef prosciutto, sausage landjaeger brisket buffalo pork chop rump jerky fatback.Frankfurter andouille jowl capicola'
  }
];

// Content for <footer> tag
export const footerContent = {
  author: '@DoeJohn'
}
