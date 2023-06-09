import * as LAZR from '../../../lazR/lazR.js';

let user = LAZR.STORAGE.getUser();
let settings = user.settings;

const handleCheck = (id) => {
    let shoudlRefresh = false;
    settings.forEach(settingsGroups => {
        settingsGroups.settings.forEach(setting => {
            if (setting.id == id) {
                setting.isActive = document.getElementById(id).checked;
                if (setting.id == 'jsonWizard') shoudlRefresh = true;
            }
        });
    });
    user.settings = settings;
    LAZR.STORAGE.setUser(user);
    if (shoudlRefresh) {
        setTimeout(() => {
            window.location = './?page=settings';
        }, 300);
    }
};
window.handleCheck = handleCheck;

const renderSettingsGroup = (settingsGroup) => {
    let str = `
    <div id="settingsGroup${settingsGroup.id}" class="settings-group">
        <h2 class="settings-group-name">${settingsGroup.name}</h2>`
        
    settingsGroup.settings.forEach(setting => {
        str += `
        <div class="setting-tile">
            <div class="setting-label-area">
                <span class="setting-label">${setting.name}</span>
            </div>
            <div class="setting-switch-area">
                <label class="switch">
                    <input id="${setting.id}" type="checkbox"
                        onclick="handleCheck('${setting.id}')" ${setting.isActive ? "checked" : ""} />
                    <span class="slider round"></span>
                </label>
            </div>    
        </div>`
    });
    str += `</div>`;
    return str;
}

export const renderPage = () => {
    const pageTitle = 'Paramètres';
    LAZR.DOM.setHTMLTitle(pageTitle);
    document.getElementById('headerTitle').innerHTML = pageTitle;

    const page = LAZR.DOM.createElement('div', 'settingsPage', 'page', ``);
    settings.forEach(settingsGroup => {
        if ((settingsGroup.name == 'Avancé' && LAZR.STORAGE.isUserDev()) || settingsGroup.name != 'Avancé') {
            page.appendChild(LAZR.DOM.getElementFromHTMLString(renderSettingsGroup(settingsGroup)));
        }
    });

    document.getElementById('settingsIcon').classList.remove('unselected');

    return page;
}