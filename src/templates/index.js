import {
  sectionTitles,
  headContent,
  contactDetailsContent,
  summaryContent,
  experiencesContent,
  footerContent,
} from '../../src/config';

import {
  headTemplate,
  asideItemTemplate,
  summaryTemplate,
  experienceTemplate,
  footerTemplate
} from './templates';

import {
  experienceBuilder,
  htmlCommentBuilder,
  educationBuilder,
  skillsBuilder,
  dividerBuilder
} from '../utils';

const commentFor = {
  contactDetails: htmlCommentBuilder( 'Contact Details Section' ),
  summary: htmlCommentBuilder( 'Personal Summary Section' ),
  experience: htmlCommentBuilder( 'Experience Section' ),
  education: htmlCommentBuilder( 'Education Section' ),
  skills: htmlCommentBuilder( 'Skills Section' ),
};
const head = headTemplate(headContent);
const aside = asideItemTemplate(contactDetailsContent);
const summary = summaryTemplate( summaryContent, 'p' );
const experiences = experienceTemplate( experiencesContent );
const footer = footerTemplate(footerContent);

// legacy
const content = require( '../content' );
const {
  education,
  skills
} = content;

// end legacy


const body = `

  ${commentFor.contactDetails}
  <aside class="resume__aside">
    ${aside}
  </aside>

  ${dividerBuilder()}

  <main class="resume__main">
    ${commentFor.summary}
    <section class="resume__summary">
      <h2 class="resume__main-title">${sectionTitles.summary}</h2>
      ${summary}
    </section>
  
    ${dividerBuilder()}

    ${commentFor.experience}
    <section class="resume__experience">
      <h2 class="resume__main-title">${sectionTitles.experience}</h2>
      ${experiences}
    </section>

    ${dividerBuilder()}

    ${commentFor.education}
    <section class="resume__education">
      <h2 class="resume__main-title">${sectionTitles.education}</h2>
    ${educationBuilder( education )}
    </section>

    ${dividerBuilder()}

    ${commentFor.skills}
    ${skillsBuilder( skills )}
  </main>
  ${footer}`;

const headAndBody = head.concat( body );

export {
  body,
  headAndBody
};
