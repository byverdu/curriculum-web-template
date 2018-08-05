const headContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charsret="UTF-8">
  <meta name="description" content="Albert Vallverdu Resume">
  <meta name="keywords" content="HTML5, SCSS, JavaScript, Node, Jest, ES6, Gulp">
  <meta name="author" content="@byverdu">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/themes/prism.min.css">
  <title>Albert Vallverdu CV</title>
</head>
<body>`;

module.exports = {
  prismThemesUrl: 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/themes/',
  prismThemes: [
    'prism.min.css',
    'prism-coy.min.css',
    'prism-solarizedlight.min.css',
    'prism-okaidia.min.css',
    'prism-twilight.min.css'
  ],
  headContent,
  contactDetails: [
    'Name: Albert Vallverdu',
    'Email: Byverdu@gmail.com',
    'Telephone: 07720 860376',
    'Address: SW15 2RR'
  ],
  networkDetails: [
    'Github: https://github.com/byverdu',
    'NPM: https://www.npmjs.com/~byverdu',
    'Portfolio: http://portfolio.byverdu.es',
    'Linkedin: https://www.linkedin.com/in/albertbyverdu/'
  ],
  summaryContent: [
    'A highly motivated, fast learner and self-taught Front End developer that feels comfortable working with JavaScript, any CSS preprocessor, version control systems and using the shell.',
    'A proven ability to maintain, enhance or build websites in line with business requirements. Used to work independently, proactive, under pressure, meeting the deadlines, detailed oriented and in an Agile environment.',
    'His main strengths includes a level head and rational approach to problem solving, combined with a passion for technology and innovative and fresh ideas.',
    'Albert is seeking a new role into web development that is more JavaScript related and will involve the use of front-end and back-end technologies so he could be a Full Stack developer and improve his JavaScript and web development skills.'
  ],
  experiences: [
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
  ],
  education: [
    {
      name: 'Makers Academy Aug 2014 – Oct 2014, London (UK)',
      detail: 'A twelve week web programming Bootcamp, focused on learning full stack web development using cutting edge technologies'
    },
    {
      name: 'JavaScript course at UOC Sept 2012 - Dec 2012, Barcelona (Spain)',
      detail: 'Front End development trimester at Open University Catalonia focused on Javascript'
    },
    {
      name: 'Two years of vocational training in Electricity and Network installations. 2005-2007, Barcelona (Spain)'
    },
    {
      name: '3rd grade of B.U.P. 1994-1998, Barcelona (Spain). Equivalent to A Levels in the UK'
    }
  ],
  skills: 'ES6.React, Angular and Aurelia.HTML5.NodeJS and modules.Npm ecosystem.Redux.TypeScript.CSS preprocessors.Responsive web design.BEM Methodology.Twitter Bootstrap.Cross Browser Testing.Test Driven Development.Agile Methodologies.Git.Command Line Interface.Unit Testing.jQuery.Unix Systems.Continous integration.Web APIs.Ability to translate wireframes from designs into functional webpages',

  footer: 'Byverdu'
};
