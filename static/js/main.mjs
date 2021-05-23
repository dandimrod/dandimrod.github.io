import loader from './loader.mjs';
import themes from './themes.mjs';
import i18n from './i18n.mjs';
import gui from './gui.mjs';
import nav from './gui_modules/nav.mjs';

async function main() {
    loader.on();
    const info = await fetch(`./info.json`).then(res => res.json());
    themes.load(info.themes);
    i18n.load(info);
    const lang = i18n.get();
    const infoLang = await fetch(`./info.${lang}.json`).then(res => res.json());
    gui.load(infoLang);
    nav.addEventListener('changeLanguage', async (newLang) => {
        loader.on();
        i18n.set(newLang);
        const lang = i18n.get();
        const infoLang = await fetch(`./info.${lang}.json`).then(res => res.json());
        gui.load(infoLang);
        setTimeout(()=>loader.off(), 1000);
    });
    nav.addEventListener('changeTheme', (newTheme)=>{
        themes.change(newTheme);
    });
    setTimeout(()=>loader.off(), 1000);
}
window.addEventListener('load', () => {
    main();
});