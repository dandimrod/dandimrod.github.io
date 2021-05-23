let themes={};
const setTheme = (themeId)=>{
    if(themes[themeId]){
        theme = themeId;
        let style = '';
        for (const key in themes[themeId]) {
            if (Object.hasOwnProperty.call(themes[themeId], key) && key!=='icon') {
                const value = themes[themeId][key];
                style += `--${key}: ${value};\n`
            }
        }
        document.querySelector('html').style=style;
    }
}
let theme = '';
export default {
    load(newThemes, defaultTheme){
        themes = newThemes;
        let theme = defaultTheme || localStorage.getItem('theme');
        if(!theme){
            if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
                theme = 'dark';
            } else {
                theme = 'light';
            }
        }
        setTheme(theme);
    },
    list(){
        return Object.keys(themes).map(
            themeId => { 
                return {
                    id:themeId,
                    icon:themes[themeId].icon
                }
            }
        );
    },
    get(){
        return theme;
    },
    change(themeId){
        if(themes[themeId]){
            localStorage.setItem('theme', themeId);
            setTheme(themeId);
        }
    }
};