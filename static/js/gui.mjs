import background from './bg.mjs';
import i18n from './i18n.mjs';
import themes from './themes.mjs';

function countryCodeEmoji(cc) {
    if (!/^[a-z]{2}$/i.test(cc)) {
        return false;
    }

    const codePoints = [...cc.toUpperCase()].map(c => c.codePointAt() + 127397);
    return String.fromCodePoint(...codePoints);
}

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

function loadHeader(info) {
    loadAndWrite(info.userimg ? `background: url(${info.userimg}) center;` : undefined, '#profile_img', 'style');
    loadAndWrite(info.name, '#name');
    loadAndWrite(info.username ? `@${info.username}` : undefined, '#username');
    loadAndWrite(info.username ? `https://github.com/${info.username}` : undefined, '#username', 'href');
    loadAndWrite(info.bio, '#userbio');
    loadAndWriteOrDelete(info.company, '#company', undefined, 1);
    loadAndWriteOrDelete(info.email, '#email', undefined, 1);
    loadAndWriteOrDelete(info.location, '#location', undefined, 1);
    if (info.pages) {
        const pagesElement = document.querySelector('#pages');
        if (pagesElement) {
            for (const page of info.pages) {
                const element = document.createElement('span');
                element.innerHTML = `
                    <i class="${page.icon || 'fas fa-link'}"></i>
                    <a href="${page.link}">
                        ${page.text || page.link}
                    </a>
                `
                pagesElement.appendChild(element);
            }
        }
    }
    const header = document.querySelector("header");
    if (header) {
        header.style.display = "";
        background(document.querySelector('header'));
        let lastTouch = 0;
        let dev = 0;

        function rollup(ev) {
            if (dev > 0 || ev.wheelDelta < 0) {
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
        const debounceOb = debounce(rollup);
        window.addEventListener("touchmove", (ev) => {
            dev = lastTouch - ev.touches[0].screenY;
            lastTouch = ev.touches[0].screenY;
            debounceOb(ev)
        });
    }


}
let headerID = 0;
let sectionID = 0;

const tags = (function () {
    const colorList = [
        "#a8ff9b", "#eddd6a", "#edab82", "#c9efff", "#f9fc9c",
        "#9ab9f4", "#ccfc7e", "#b2fff7", "#ffccdf", "#fccfbd",
        "#977de8", "#c695f4", "#f9c0e0", "#97d3ef", "#d391f2",
        "#b2ff8c", "#ceed78", "#977aef", "#bdf9f9", "#a9fca4",
        "#dbf48d", "#7cff9d", "#a9fc92", "#ff87ef", "#d28cf7",
        "#83ea6b", "#ecf78c", "#ed80c3", "#f785e6", "#fcc2ed",
        "#88fcf0", "#70e3e5", "#a5c7f7", "#a9ffa8", "#ae84ed",
        "#ffd6c6", "#c9ff9e", "#7ff4a6", "#b9ed7d", "#d8b6f9",
        "#f7b3a5", "#b5f8ff", "#80f2af", "#d3b8f9", "#a1fcf6",
        "#e4b2f4", "#ffcdc9", "#7bf7d8", "#f9acf0", "#87ffe7"
    ];
    const tagList = [];
    const activeTags = [];
    const events = [];
    const draw = (element, drawTagList) => {
        for (const tag of drawTagList) {
            const tagId = tagList.indexOf(tag);
            const buttonTag = document.createElement('button');
            buttonTag.innerHTML = tag;
            buttonTag.setAttribute('tag-content', tag);
            buttonTag.classList.add('pill');
            buttonTag.name = 'tag-' + tag;
            buttonTag.style.setProperty('--pill-color', colorList[tagId % (colorList.length - 1)]);

            if (activeTags[tagId]) {
                buttonTag.classList.add('active');
            }
            buttonTag.onclick = () => {
                if (activeTags[tagId]) {
                    activeTags[tagId] = false;
                } else {
                    activeTags[tagId] = true;
                }
                const tagsEl = document.querySelectorAll('[name=tag-' + tag + ']');
                for (const tagEl of tagsEl) {
                    tagEl.classList.toggle('active');
                }
                events.forEach(event => { event.type === "change" ? event.callback() : undefined })
            }
            element.appendChild(buttonTag);
        }
    }
    return {
        addTags(newTagList) {
            for (const tag of newTagList) {
                if (!tagList.includes(tag)) {
                    tagList.push(tag);
                    activeTags.push(false);
                }
            }
        },
        drawTags(element, drawTagList) {
            draw(element, drawTagList);
        },
        drawAll(element) {
            draw(element, tagList);
        },
        list() {
            return tagList.map((tag, index) => ({
                name: tag,
                active: activeTags[index],
                color: colorList[index % (colorList.length - 1)]
            }));
        },
        filter(section, cb) {
            let result;
            if (section.contents) {
                const resultArray = []
                for (const nextSection of section.contents) {
                    resultArray.push(this.filter(nextSection, cb));
                }
                result = resultArray.find(result => result) || false;
            } else {
                if (section.tags) {
                    result = !(activeTags.find(tag => tag) || false);
                    if (!result) {
                        for (const tag of section.tags) {
                            const id = tagList.indexOf(tag);
                            if (activeTags[id]) {
                                result = true;
                                break;
                            }
                        }
                    }
                } else {
                    result = !activeTags.find(tag => tag);
                }
            }
            section.visible = result;
            cb(section);
            return result;
        },
        addEventListener(type, callback) {
            events.push({ type, callback });
        }
    }
})();
function gallery(element, gallery) {
    let currentIndex = 0;
    element.innerHTML = `
        <i class="fas fa-chevron-left previous"></i>
        <img class="picture">
        <i class="fas fa-chevron-right next"></i>
        <div class="nav"></div>
    `;
    const previous = element.querySelector('.previous');
    const img = element.querySelector('.picture');
    const next = element.querySelector('.next');
    const nav = element.querySelector('.nav');
    previous.onclick = ()=>{
        currentIndex--;
        if(currentIndex<0){
            currentIndex = gallery.length-1;
        }
        loadImg();
    }
    next.onclick = ()=>{
        currentIndex++;
        if(currentIndex>gallery.length-1){
            currentIndex = 0;
        }
        loadImg();
    }
    for (let index = 0; index < gallery.length; index++) {
        const ball = document.createElement('ball');
        ball.className = 'ball';
        ball.id = 'ball-'+index;
        ball.onclick=()=>{
            currentIndex = index;
            loadImg();
        }
        nav.appendChild(ball);
    }
    function loadImg() {
        img.src = gallery[currentIndex];
        nav.querySelector('.ball.active')?.classList?.remove('active');
        nav.querySelector('.ball#ball-'+currentIndex).classList.add('active');
    }

    const zoomImg = function () {
        const lbBack = document.createElement('div');
        lbBack.id='lb-back';
        const lb = document.createElement('div');
        lb.id='lb-img';
        lbBack.appendChild(lb)
        lbBack.addEventListener("click", function () {
            this.classList.remove("show");
            document.body.removeChild(lbBack);
        })
        const clone = this.cloneNode();
    
        lb.innerHTML = "";
        lb.appendChild(clone);
    
        lbBack.classList.add("show");
        document.body.appendChild(lbBack);
    };
    img.addEventListener("click", zoomImg);

    loadImg();
}
function modal(section) {
    const modalContainer = document.createElement('div');
    modalContainer.className = "modal-container";
    modalContainer.innerHTML = `
        <div class="modal">
            <h1>${section.title}</h1>
            ${section.link ? `<div><a href="${section.link}">${section.link}</a></div>` : ''}
            <div>${section.description || ''}</div>
            <div>${section.body || ''}</div>
            <div class="tag-list"></div>
            <div class="gallery"></div>
        </div>
    `;
    tags.drawTags(modalContainer.querySelector('.tag-list'), section.tags);
    modalContainer.onclick = (ev) => {
        if (ev.target === modalContainer) {
            document.body.removeChild(modalContainer);
        }
    }
    if (section.gallery) {
        gallery(modalContainer.querySelector('.gallery'), section.gallery);
    }
    document.body.appendChild(modalContainer);
}
function drawSection(element, sections, deep = 1) {
    const sectionList = [];
    if (Array.isArray(sections)) {
        const div = document.createElement('div');
        div.className = 'card-list';
        for (const section of sections) {
            const sectionEl = document.createElement('section');
            sectionEl.className = 'card';
            if (section.link || section.description || section.gallery) {
                sectionEl.classList.add('clickable');
                sectionEl.onclick = (ev) => {
                    if(!ev.target.classList.contains('pill')){
                        modal(section);
                    }
                };
            }
            sectionEl.id = 'section-' + sectionID;
            sectionList.push({ id: 'section-' + sectionID, ...JSON.parse(JSON.stringify(section)), visible: true });
            sectionID++;
            sectionEl.innerHTML = `<div class="title">${section.title}</div>
                <div class="cbody">${section.body}</div>
                <div class="footer"></div>`;
            if (section.tags) {
                tags.addTags(section.tags);
                tags.drawTags(sectionEl.querySelector('.footer'), section.tags);
            }
            div.appendChild(sectionEl);
        }
        element.appendChild(div);
    } else {
        for (const key in sections) {
            if (Object.hasOwnProperty.call(sections, key)) {
                const sectionBody = sections[key];
                const h = document.createElement('h' + deep);
                h.className = 'section-title';
                h.innerHTML = key;
                h.id = 'header-' + headerID;
                headerID++;
                element.appendChild(h);
                const contents = drawSection(element, sectionBody, deep + 1);
                sectionList.push({ id: h.id, name: key, contents, visible: true });
            }
        }
    }
    return sectionList;
}
function filterSections(sections) {
    for (const section of sections) {
        tags.filter(section, (section) => {
            const sectionElement = document.getElementById(section.id);
            if (section.visible) {
                sectionElement.classList.remove('hidden');
                setTimeout(() => {
                    sectionElement.classList.remove('hidding');
                }, 300)
            } else {
                sectionElement.classList.add('hidding');
                const finishHidding = (ev) => {
                    if(getComputedStyle(ev.target).opacity==="0"){
                        sectionElement.classList.add('hidden');
                        sectionElement.removeEventListener('transitionend', finishHidding);
                    }
                }
                sectionElement.addEventListener('transitionend', finishHidding);
            }
        });
    }

}

function loadContent(info) {
    const sections = drawSection(document.getElementById('content'), info.sections);
    loadAndWrite(info?.translate?.questionSkills, '#tag-filter-title');
    tags.drawAll(document.getElementById('tag-filter-tags'));
    tags.addEventListener('change', () => { filterSections(sections) });
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
const events = [];
export default {
    load(infoLang) {
        loadHead(infoLang);
        loadHeader(infoLang);
        loadContent(infoLang);
        loadNav(infoLang);
    },
    addEventListener(eventType, callback) {
        events.push({
            type: eventType,
            callback
        });
    }
}