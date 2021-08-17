import loader from './loader.mjs';
import themes from './themes.mjs';
import i18n from './i18n.mjs';
import gui from './gui.mjs';

async function main() {
    const info = await fetch(`./info.json`).then(res => res.json());
    themes.load(info.themes, 'light');
    i18n.load(info);
    const lang = i18n.get();
    const infoLang = await fetch(`./info.${lang}.json`).then(res => res.json());
    let infoContact;
    try {
        infoContact = await fetch(`./info.contact.${lang}.json`).then(res => res.json());
    } catch (error) {
    }
    gui.loadcv(infoLang, infoContact);
    const script = document.createElement('script');
    script.src='https://unpkg.com/pagedjs/dist/paged.polyfill.js';
    document.body.appendChild(script);
    setTimeout(window.print, 1000);
}
window.addEventListener('load', () => {
    main()
});