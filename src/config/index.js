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
  'A highly motivated, fast learner and self-taught Front End developer that feels comfortable working with JavaScript, any CSS preprocessor, version control systems and using the shell.',
  'A proven ability to maintain, enhance or build websites in line with business requirements. Used to work independently, proactive, under pressure, meeting the deadlines, detailed oriented and in an Agile environment.',
  'His main strengths includes a level head and rational approach to problem solving, combined with a passion for technology and innovative and fresh ideas.',
  'Albert is seeking a new role into web development that is more JavaScript related and will involve the use of front-end and back-end technologies so he could be a Full Stack developer and improve his JavaScript and web development skills.'
];


// Content for user experiences
// Keep the format, i.e. Array of Strings, each item in array
// will be converted into tha html tag specified
export const experiencesContent = [
  {
    date: 'Front End Developer || December 2017 – Present',
    company: 'Scientific Games',
    items: 'Developed javaScript apps for a multi-app SPA using ReactJS and Redux.Unit testing base for apps using Jest and Enzyme.Ensured cross browser/platform compliance.Contributed design, functionality and technology improvements.Contributed with FE micro-apps deployment and Continuous Integration systems'
  },
  {
    date: 'Front End Developer || June 2016 – November 2017',
    company: 'Clarksons Platou',
    items: 'Developed new user interfaces for internal web applications using the Aurelia framework and Typescript.Creation and maintenance of style sheets using SASS.Wrote custom solutions with typescript using third party libraries to integrate them for the internal web applications.Workflow based on sprints, scrum meetings, Kanban boards and Agile methodologies'
  },
  {
    date: 'Front End Developer || February 2015 – June 2016',
    company: 'Deloitte Digital',
    items: 'Developed UI components for CMS Hybris with FlightJS by following the designer wireframes and user stories provided by Business Analysts.Solved Front End defects before the websites go live, cross-browser and device related issues Front End Developer.Wrote acceptance tests with Selenium Webdriver to ensure that clients website\’s met the functionality specified by the acceptance criteria for the user stories provided by Business Analysts.Built websites and internal apps by using front end technologies, such as HTML, Sass and Javascript (jQuery, React, Meteor).Workflow based on sprints, scrum meetings, Kanban boards and Agile methodologies'
  }
];

// Content for <footer> tag
export const footerContent = {
  author: '@DoeJohn'
}
