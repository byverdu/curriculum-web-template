import {prismTheme} from '../src/config';
const content = require( './content' );
const util = require( './utils' );
import './sass/main.scss';

if (prismTheme === 'dracula') {
  require('../src/sass/themes/prism-dracula.css');
} else {
  const tempTheme = prismTheme === 'prism' ? prismTheme : `prism-${prismTheme}`;
  require(`prismjs/themes/${tempTheme}.css`);
}

const {
  headContent,
  contactDetails,
  networkDetails,
  summaryContent,
  experiences,
  education,
  skills,
  footer
} = content;
const {
  asideItemBuilder,
  htmlTagBuilder,
  experienceBuilder,
  htmlCommentBuilder,
  educationBuilder,
  skillsBuilder,
  dividerBuilder,
  footerBuilder
} = util;

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
    ${asideContacts}
    ${asideNetwork}
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
  ${footerBuilder( footer )}`;

document.addEventListener( 'DOMContentLoaded', function contentLoaded() {
  const contentMarkup = document.getElementById( 'content' );
  const renderContent = document.getElementById( 'renderContent' );

  prettyLetters( '#headerTitle' ); // eslint-disable-line

  document.getElementById( 'renderButton' ).addEventListener( 'click', function renderButtonClicked( event ) {
    const markup = document.querySelector( 'pre.language-markup' );
    const title = document.getElementById( 'headerTitle' );
    const yearTarget = document.querySelector( '.js-footer-year' );
    const isHidden = markup.className.includes( 'is-hidden' );
    const eventTarget = event.target;
    const textButton = isHidden ? 'Render As Markup' : 'Render As Code';


    eventTarget.textContent = textButton;
    yearTarget.textContent = new Date().getFullYear();
    eventTarget.blur();

    if ( isHidden ) {
      renderContent.classList.toggle( 'is-hidden' );
      markup.classList.toggle( 'is-hidden' );
      title.classList.toggle( 'is-hidden' );
      document.body.classList.toggle( 'theme' );
      document.body.removeAttribute( 'class' );
    } else {
      title.classList.toggle( 'is-hidden' );
      renderContent.classList.toggle( 'is-hidden' );
      markup.classList.toggle( 'is-hidden' );
      document.body.classList.toggle( 'theme', true );
    }

    document.removeEventListener( 'click', renderButtonClicked );
  });

  contentMarkup.innerHTML = headContent.concat( body );
  renderContent.innerHTML = body;
});
