import {
  prismThemeLoader,
  prismTheme,
  globalText
} from '../src/config';

import {
  body,
  headAndBody
} from './templates';

import './sass/main.scss';

prismThemeLoader(prismTheme);

document.addEventListener( 'DOMContentLoaded', function contentLoaded() {
  prettyLetters( '#headerTitle' ); // eslint-disable-line
  
  const contentMarkup = document.getElementById( 'content' );
  const renderContent = document.getElementById( 'renderContent' );
  const { textBtn: {
      asCode: asCode,
      asHtml: asHtml,
    }
  } = globalText;

  // Appending content to the DOM
  contentMarkup.innerHTML = headAndBody;
  renderContent.innerHTML = renderContent.innerHTML.concat(body);

  // adding year to Footer
  document.querySelector( '.js-footer-year' ).textContent = new Date().getFullYear();
  
  document.getElementById( 'renderButton' ).addEventListener( 'click', function renderButtonClicked( event ) {
    const markup = document.querySelector( 'pre.language-markup' );
    const isHidden = markup.className.includes( 'is-hidden' );

    // Change button text
    event.target.textContent = isHidden ? `${asHtml}` : `${asCode}`;

    // Show or hide prism content or rendered
    renderContent.classList.toggle( 'is-hidden' );
    markup.classList.toggle( 'is-hidden' );
    document.body.classList.toggle( 'theme' );

    document.removeEventListener( 'click', renderButtonClicked );
  });
});
