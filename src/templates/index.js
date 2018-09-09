import {
  sectionTitles,
  headContent,
  contactDetailsContent,
  summaryContent,
  experiencesContent,
  skillsContent,
  educationContent,
  footerContent,
  rootCssClass
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
      <aside class="${rootCssClass}__aside">
        ${aside}
      </aside>

      ${dividerBuilder()}

      <main class="${rootCssClass}__main">
        ${commentFor.summary}
        <section class="${rootCssClass}__summary">
          <h2 class="${rootCssClass}__main-title">${sectionTitles.summary}</h2>
          ${summary}
        </section>
      
        ${dividerBuilder()}

        ${commentFor.experience}
        <section class="${rootCssClass}__experience">
          <h2 class="${rootCssClass}__main-title">${sectionTitles.experience}</h2>
          ${experiences}
        </section>

        ${dividerBuilder()}

        ${commentFor.education}
        <section class="${rootCssClass}__education">
          <h2 class="${rootCssClass}__main-title">${sectionTitles.education}</h2>
        ${education}
        </section>

        ${dividerBuilder()}

        ${commentFor.skills}
        <h2 class="${rootCssClass}__main-title">${sectionTitles.skills}</h2>
        <table class="${rootCssClass}__skills">
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
