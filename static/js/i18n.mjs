let supportedLang = [];

export default {
    load(info){
        supportedLang = info.supportedLang;
    },
    get(){
        const lang = localStorage.getItem('lang') || navigator.language;
        if(supportedLang.includes(lang)){
            return lang;
        }else{
            return supportedLang[0];
        }
    },
    list(){
        return supportedLang;
    },
    set(lang){
        if(supportedLang.includes(lang)){
            localStorage.setItem('lang', lang);
        }
    }
}