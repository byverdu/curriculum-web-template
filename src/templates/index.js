import {
  sectionTitles,
  headContent,
  contactDetailsContent,
  summaryContent,
  experiencesContent,
  skillsContent,
  educationContent,
  footerContent,
} from '../../src/config';

import {
  headTemplate,
  asideItemTemplate,
  summaryTemplate,
  experienceTemplate,
  skillsTemplate,
  educationTemplate,
  footerTemplate
} from './templates';

import {
  htmlCommentBuilder,
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
const skills = skillsTemplate(skillsContent);
const education = educationTemplate(educationContent);
const footer = footerTemplate(footerContent);

const body = `${commentFor.contactDetails}
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
        ${education}
        </section>

        ${dividerBuilder()}

        ${commentFor.skills}
        <h2 class="resume__main-title">${sectionTitles.skills}</h2>
        <table class="resume__skills">
          ${skills}
        </table>
      </main>
      ${footer}`;

const headAndBody = `${head}
      ${body}
    </body>
  </html>`;

export {
  body,
  headAndBody
};
