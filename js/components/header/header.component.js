import * as LAZR from '../../lazR/lazR.js';

export const renderView = () => {
    const header = document.getElementById('header');

    const headerPreviousArea = LAZR.DOM.createElement(
        'a', 
        'headerPreviousArea',
        'header-previous-area', 
        '');
    headerPreviousArea.setAttribute('href', './');
    const headerPreviousIcon = LAZR.DOM.createRootVariableColoredSVGElement(
        'headerPreviousIcon', 
        'header-previous-icon', 
        './medias/images/logo-white.svg', 
        'Pointe de flèche vers la gauche', 
        '--on-primary');
    headerPreviousArea.appendChild(headerPreviousIcon);
    header.appendChild(headerPreviousArea);

    const headerCenterArea = LAZR.DOM.createElement(
        'div', 
        'headerCenterArea', 
        'header-center-area', 
        '');
    /* const headerLogo = LAZR.DOM.createRootVariableColoredSVGElement(
        'headerLogo', 
        'header-logo', 
        './medias/images/logo-white.svg', 
        'Logo texte indiquant "Mission Hermès" en police futuriste', 
        '--on-primary');
    headerCenterArea.appendChild(headerLogo); */

    const headerTitle = LAZR.DOM.createElement('h1', 'headerTitle', 'header-title', 'Default');
    headerCenterArea.appendChild(headerTitle);
    header.appendChild(headerCenterArea);

    const headerAboutArea = LAZR.DOM.createElement(
        'a', 
        'headerAboutArea', 
        'header-about-area', 
        '');
    headerAboutArea.setAttribute('href', './?page=about');
    const headerAboutIcon = LAZR.DOM.createRootVariableColoredSVGElement(
        'headerAboutIcon', 
        'header-about-icon', 
        './medias/images/font-awsome/circle-info-solid.svg', 
        'Logo texte indiquant "Mission Hermès" en police futuriste', 
        '--on-primary');
    headerAboutArea.appendChild(headerAboutIcon);
    header.appendChild(headerAboutArea);
}