import i18n from '../i18n.mjs';
import themes from '../themes.mjs';

const events = [];

function countryCodeEmoji(cc) {
    if (!/^[a-z]{2}$/i.test(cc)) {
        return false;
    }

    const codePoints = [...cc.toUpperCase()].map(c => c.codePointAt() + 127397);
    return String.fromCodePoint(...codePoints);
}

function loadNav(info) {
    const nav = document.querySelector('nav');
    if (nav) {
        nav.innerHTML = `<div class="nav-icon"><span></span> <span></span> <span></span></div>`;
        document.querySelector('.nav-icon').onclick = () => {
            document.querySelector('.nav-icon').classList.toggle('open');
            document.querySelector('.nav-tray').classList.toggle('open');
        }
        const tray = document.createElement('div');
        tray.className = 'nav-tray';
        if (info.pages) {
            for (const page of info.pages) {
                const element = document.createElement('span');
                element.innerHTML = `
                    <i class="${page.icon || 'fas fa-link'}"></i>
                    <a href="${page.link}">
                        ${page.text || page.link}
                    </a>
                `
                tray.appendChild(element);
            }
            const buttonElement = document.createElement('span');
            buttonElement.className = 'button-element';
            const themeButton = document.createElement('i');
            themeButton.className = themes.list().find(theme => theme.id === themes.get()).icon;
            themeButton.onclick = () => {
                let index = themes.list().findIndex(theme => theme.id === themes.get());
                index++;
                if (index >= themes.list().length) {
                    index = 0;
                }
                const newTheme = themes.list()[index].id;
                events.forEach(event => event.type === 'changeTheme' ? event.callback(newTheme) : undefined);
                themeButton.className = themes.list().find(theme => theme.id === themes.get()).icon;
            }
            buttonElement.appendChild(themeButton);
            const selectLang = document.createElement('select');
            for (const lang of i18n.list()) {
                const cc = lang.split('_')[1];
                const option = document.createElement('option');
                option.value = lang;
                option.innerHTML = countryCodeEmoji(cc) || lang;
                selectLang.appendChild(option);
            }
            selectLang.value = i18n.get();
            selectLang.onchange = () => {
                const newLang = selectLang.value;
                events.forEach(event => event.type === 'changeLanguage' ? event.callback(newLang) : undefined);
            }
            buttonElement.appendChild(selectLang);
            const cvButton = document.createElement('a');
            cvButton.href = "./cv.html";
            cvButton.innerHTML = `<i class="fas fa-file-download" title="${info?.translate?.downloadCV || ''}"></i>`;
            buttonElement.appendChild(cvButton);
            tray.appendChild(buttonElement);
        }
        document.body.appendChild(tray);
    }
}

export default {
    load:loadNav,
    addEventListener(eventType, callback) {
        events.push({
            type: eventType,
            callback
        });
    }
};