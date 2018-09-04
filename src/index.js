import {
  prismThemeLoader,
  prismTheme
} from '../src/config';

import {
  body,
  headAndBody
} from './templates';

import './sass/main.scss';

prismThemeLoader(prismTheme);

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

  contentMarkup.innerHTML = headAndBody;
  renderContent.innerHTML = body;
});
