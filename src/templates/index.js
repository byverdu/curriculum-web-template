import {
  headContentConfig,
  contactDetailsContentConfig,
  footerContentConfig,
} from '../../src/config';

import {
  headContentTemplate,
  asideItemContentTemplate,
  footerContentTemplate
} from './templates';

import {
  asideItemBuilder,
  htmlTagBuilder,
  experienceBuilder,
  htmlCommentBuilder,
  educationBuilder,
  skillsBuilder,
  dividerBuilder
} from '../utils';

const headContent = headContentTemplate(headContentConfig);
const footerContent = footerContentTemplate(footerContentConfig);


// legacy
const content = require( '../content' );
const {
  contactDetails,
  networkDetails,
  summaryContent,
  experiences,
  education,
  skills
} = content;

// end legacy

const asideContacts = asideItemBuilder( contactDetails, 'Contact Details', 'me-icons' );
const asideNetwork = asideItemBuilder( networkDetails, 'Dev Network Details', 'dev-icons' );
const summary = htmlTagBuilder( summaryContent, 'p' );
const experienceContent = experienceBuilder( experiences );
const summaryComment = htmlCommentBuilder( 'Personal Summary Section' );
const experienceComment = htmlCommentBuilder( 'Experience Section' );
const educationComment = htmlCommentBuilder( 'Education Section' );
const skillsComment = htmlCommentBuilder( 'Skills Section' );

const body = `
  <aside class="resume__aside">
    ${contactDetailsContentConfig.forEach(item => {
      const {details, headerTitle, className} = item;
      asideItemBuilder(details, headerTitle, className);
    })}
  </aside>
  <main class="resume__main">
    ${summaryComment}
    <section class="resume__summary">
      <h2 class="resume__main-title">Summary</h2>
      ${summary}
    </section>
  
    ${dividerBuilder()}
    ${experienceComment}
    <section class="resume__experience">
      <h2 class="resume__main-title">Experience</h2>
      ${experienceContent}
    </section>

    ${dividerBuilder()}
    ${educationComment}
    <section class="resume__education">
      <h2 class="resume__main-title">Education</h2>
      ${educationBuilder( education )}
    </section>

    ${dividerBuilder()}
    ${skillsComment}
    ${skillsBuilder( skills )}
  </main>
  ${footerContent}`;

const headAndBody = headContent.concat( body );

export {
  body,
  headAndBody
};
