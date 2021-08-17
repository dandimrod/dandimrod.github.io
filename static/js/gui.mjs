import background from './gui_modules/bg.mjs';
import sec from './gui_modules/sections.mjs';
import nav from './gui_modules/nav.mjs';
import tags from './gui_modules/tags.mjs';

function loadAndWrite(text, selector, property) {
    const element = document.querySelector(selector);
    if (text && element) {
        if (!property) {
            element.innerHTML = text;
        } else {
            element[property] = text;
        }
    }
}

function loadAndWriteOrDelete(text, selector, property, parentLevel) {
    const element = document.querySelector(selector);
    if (text && element) {
        if (!property) {
            element.innerHTML = text;
        } else {
            element[property] = text;
        }
    } else {
        if (!element) {
            return;
        }
        if (!parent) {
            element.parentElement.removeChild(element);
        } else {
            let parent = element.parentElement;
            let children = element;
            for (let index = 0; index < parentLevel; index++) {
                children = parent;
                parent = parent.parentElement;
            }
            parent.removeChild(children);
        }
    }
}

function loadHead(info) {
    loadAndWrite(info.title, 'title');
    loadAndWrite(info.description, '#description', 'content');
    loadAndWrite(info.favicon, '#icon', 'href');
}

function loadHeader(info, cvMode, contactInfo) {
    loadAndWrite(info.userimg ? `background: url(${info.userimg}) center;` : undefined, '#profile_img', 'style');
    loadAndWrite(info.name, '#name');
    loadAndWrite(info.username ? `@${info.username}` : undefined, '#username');
    loadAndWrite(info.username ? `https://github.com/${info.username}` : undefined, '#username', 'href');
    loadAndWrite(info.bio, '#userbio');
    loadAndWriteOrDelete(info.company, '#company', undefined, 1);
    loadAndWriteOrDelete(info.email, '#email', undefined, 1);
    loadAndWriteOrDelete(info.location, '#location', undefined, 1);
    loadAndWriteOrDelete(info.translate?.resume, '#resume-trans');
    loadAndWriteOrDelete(info.translate?.contactInfo, '#contact-info-trans');
    loadAndWriteOrDelete(info.translate?.name, '#name-trans');
    loadAndWriteOrDelete(info.translate?.coverLetter, '#cover-letter-trans');
    if (contactInfo) {
        const contactElement = document.querySelector('#contact-info');
        if (contactElement) {
            contactElement.innerHTML = '';
            for (const info of contactInfo) {
                const element = document.createElement('div');
                element.innerHTML = `
                    <span class="label">${info.name ? info.name + ': ' : ''}</span>
                    ${info.link ? 
                        `<a href="${info.link}">${info.text}</a>`
                    :
                        `<span>${info.text}</span>`
                    }
                `;
                contactElement.appendChild(element);
            }
            loadAndWriteOrDelete(undefined, '#name-container');
            loadAndWriteOrDelete(undefined, '#pages');
        }

    }
    if (info.pages && !contactInfo) {
        const pagesElement = document.querySelector('#pages');
        if (pagesElement) {
            pagesElement.innerHTML = '';
            for (const page of info.pages) {
                const element = document.createElement('span');
                if (cvMode) {
                    element.innerHTML = `
                    <div>
                        <i class="${page.icon || 'fas fa-link'}"></i>
                        <span class="label">${page.text ? page.text + ':' : ''}</span>
                        <a href="${page.link}">
                            ${page.link}
                        </a>
                    </div>
                `
                } else {
                    element.innerHTML = `
                    <i class="${page.icon || 'fas fa-link'}"></i>
                    <a href="${page.link}">
                        ${page.text || page.link}
                    </a>
                `
                }
                pagesElement.appendChild(element);
            }
        }
        loadAndWriteOrDelete(undefined, '#contact-info');
    }
    const header = document.querySelector("header");
    if (header) {
        header.style.display = "";
        background(document.querySelector('header'));
        let lastTouch = 0;
        let dev = 0;

        function rollup(ev) {
            if (dev > 0 || ev.wheelDelta < 0 || ev.deltaY > 0) {
                document.querySelector('header').classList.add("collapsed");
            } else {
                if (window.scrollY === 0) {
                    document.querySelector('header').classList.remove("collapsed");
                }
            }
            dev = 0;
        }
        const debounce = func => {
            let timer;
            return event => {
                if (timer) {
                    clearTimeout(timer);
                }
                timer = setTimeout(func, 100, event);
            };
        };
        window.addEventListener("mousewheel", debounce(rollup));
        window.addEventListener("wheel", debounce(rollup));
        const debounceOb = debounce(rollup);
        window.addEventListener("touchmove", (ev) => {
            dev = lastTouch - ev.touches[0].screenY;
            lastTouch = ev.touches[0].screenY;
            debounceOb(ev)
        });
    }


}

function loadContent(info, cvMode) {
    const content = document.getElementById('content');
    content.innerHTML = '';
    const sections = sec.drawSection(content, info.sections, cvMode? 2: 1, cvMode);
    const tagContainerElement = document.querySelector('#tag-filter');
    if (tagContainerElement) {
        tagContainerElement.style.display = "";
        loadAndWrite(info?.translate?.questionSkills, '#tag-filter-title');
        tags.drawAll(document.getElementById('tag-filter-tags'));
    }
    tags.addEventListener('change', () => { sec.filterSections(sections) });
}

function loadCoverLetter() {
    loadAndWriteOrDelete(undefined, '#cover-letter')
}

export default {
    load(infoLang) {
        loadHead(infoLang);
        loadHeader(infoLang);
        loadContent(infoLang);
        nav.load(infoLang);
    },
    loadcv(infoLang, infoContact) {
        loadHead(infoLang);
        loadHeader(infoLang, true, infoContact);
        loadContent(infoLang, true);
        loadCoverLetter();
        nav.load(infoLang);
    }
}