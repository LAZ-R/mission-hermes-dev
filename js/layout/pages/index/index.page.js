import * as LAZR from '../../../lazR/lazR.js';

export const renderPage = () => {

    /* --------------------------------------------------------------------- */
    const pageTitle = LAZR.APP_DATA.getAppName();
    LAZR.DOM.setHTMLTitle(pageTitle);
    document.getElementById('headerCenterArea').innerHTML = '';

    const logo = LAZR.DOM.createRootVariableColoredSVGElement('headerLogo', 'header-logo', './medias/images/text-only-logo.svg', 'logo appli', '--on-primary')
    document.getElementById('headerCenterArea').appendChild(logo);
    const page = LAZR.DOM.createElement('div', 'indexPage', 'page', `TOTO: faire page "Mission Control"`);
    page.style.padding = '20px var(--horizontal-padding)';
    //document.querySelector(':root').style.setProperty('--phone-footer-height', '0%'); // Pas de footer
    document.getElementById('missionControlIcon').classList.remove('unselected');
    
    return page;
}
