/* eslint-disable func-names */
module.exports = ( function () {
  /**
   * newLineAndTabsBuilder
   * @description Creates a string with a new line and as tabs
   * as it's been specified in the parameter
   * 
   * @param {Number} numberTabs
   * 
   * @returns String
   */
  function newLineAndTabsBuilder( numberTabs ) {
    if (isNaN(Number(numberTabs))) {
      return '';
    }

    let newLine = '\n';

    for ( let i = 1; i <= numberTabs; i += 1 ) {
      newLine += '\t';
    }

    return newLine;
  }

  function htmlCommentBuilder(text, withTab = 0) {
    let tempTab = '';

    if (withTab > 0) {
      for ( let i = 1; i <= withTab; i += 1 ) {
        tempTab += '\t';
      }
    }
    
    return `${tempTab}<!-- ${text} -->\n`;
  }

  const oneTab = newLineAndTabsBuilder( 1 );
  const twoTabs = newLineAndTabsBuilder( 2 );
  const threeTabs = newLineAndTabsBuilder( 3 );

  function htmlTagBuilder( content, tag ) {
    return content.reduce(( acc, curr, index ) => {
      const addTabs = index !== 0 ? `${twoTabs}` : '';

      return acc.concat( `${addTabs}<${tag}>${curr}</${tag}>` );
    }, '' );
  }

  

  function dividerBuilder() {
    return '<div class="divider"></div>';
  }

  function asideItemBuilder( array, headerTittle, id = '' ) {
    const listItems = htmlTagBuilder( array, 'li' );

    return `<nav class="resume__aside-nav">
      <h4 class="resume__aside-title">${headerTittle}</h4>
      <ul class="resume__aside-list ${id}">
        ${listItems}
      </ul>
    </nav>`;
  }

  function preExperiencesBuilder( experiences ) {
    const {
      date, company, items
    } = experiences;
    const listItems = htmlTagBuilder( items.split( '.' ), 'li' );

    return `<section class="resume__experience-item">
      <h3 class="resume__main-title">${company}</h3>
      <h4 class="resume__main-title">${date}</h4>
      <ul class="resume__main-list">
        ${listItems}
      </ul>
    </section>${oneTab}`;
  }

  function experienceBuilder( experiences ) {
    let template = '';
    experiences.forEach( item => {
      const temp = preExperiencesBuilder( item );
      template = template.concat( temp );
    });

    return template;
  }

  function educationBuilder( education ) {
    const content = education.reduce(( acc, curr, index ) => {
      const addTabs = index !== 0 ? `${twoTabs}` : '';
      const hasDetail = curr.detail ? `${threeTabs}<em class="resume__education-detail">${curr.detail}</em>` : '';
      const liTag = 'li';
      const spanTag = 'span';

      return acc.concat( `${addTabs}<${liTag}>${threeTabs}<${spanTag}>${curr.name}${hasDetail}${twoTabs}</${spanTag}></${liTag}>` );
    }, '' );

    return `<section class="resume__education-item">
      <ul class="resume__main-list">
        ${content}
      </ul>
    </section>${oneTab}`;
  }

  function skillsBuilder( skills ) {
    const splitSkills = skills.split( '.' );
    const skillsPerRow = Math.floor( splitSkills.length / 5 );
    let tableRows = '';
    let count = splitSkills.length;

    while ( count >= 0 ) {
      const firstItems = splitSkills.splice( 0, skillsPerRow );
      const tdItems = htmlTagBuilder( firstItems, 'td' );

      tableRows += `<tr>${twoTabs}${tdItems}${oneTab}  </tr>${twoTabs}`;

      count -= skillsPerRow;
    }

    return `<h2 class="resume__main-title">Skills</h2>
    <table class="resume__skills">
      ${tableRows}
    </table>`;
  }

  function footerBuilder( author ) {
    return `<footer class="resume__footer">
      <p class="resume__footer-copy">Made with <span>&lt;3</span> by ${author}, <b class="js-footer-year">2018</b></p>
    </footer>`;
  }

  return {
    newLineAndTabsBuilder,
    asideItemBuilder,
    htmlTagBuilder,
    experienceBuilder,
    htmlCommentBuilder,
    dividerBuilder,
    educationBuilder,
    skillsBuilder,
    footerBuilder
  };
}());
