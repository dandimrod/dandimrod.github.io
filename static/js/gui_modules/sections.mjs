import tags from './tags.mjs';
import modal from './modal.mjs';
let headerID = 0;
let sectionID = 0;

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

export default {drawSection, filterSections};