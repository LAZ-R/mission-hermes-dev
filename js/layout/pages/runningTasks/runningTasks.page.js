import * as LAZR from '../../../lazR/lazR.js';

export const renderPage = () => {

    /* --------------------------------------------------------------------- */
    const pageTitle = 'Tâches en cours';
    LAZR.DOM.setHTMLTitle(pageTitle);
    document.getElementById('headerTitle').innerHTML = pageTitle;

    const page = LAZR.DOM.createElement('div', 'indexPage', 'page', `TOTO: faire page "Tâches en cours"`);
    page.style.padding = '20px var(--horizontal-padding)';
    //document.querySelector(':root').style.setProperty('--phone-footer-height', '0%'); // Pas de footer
    document.getElementById('runningTasksIcon').classList.remove('unselected');
    
    return page;
}
