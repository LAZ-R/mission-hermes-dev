import * as LAZR from '../../../lazR/lazR.js';

export const renderPage = () => {

    /* --------------------------------------------------------------------- */
    const pageTitle = 'Base de données';
    LAZR.DOM.setHTMLTitle(pageTitle);
    document.getElementById('headerTitle').innerHTML = pageTitle;

    const page = LAZR.DOM.createElement('div', 'indexPage', 'page', `TOTO: faire page "Base de données"`);
    page.style.padding = '20px var(--horizontal-padding)';
    //document.querySelector(':root').style.setProperty('--phone-footer-height', '0%'); // Pas de footer
    document.getElementById('databaseIcon').classList.remove('unselected');
    
    return page;
}
