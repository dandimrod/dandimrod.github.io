import gallery from './gallery.mjs';
import tags from './tags.mjs'
function modal(section) {
    const modalContainer = document.createElement('div');
    modalContainer.className = "modal-container";
    modalContainer.innerHTML = `
        <div class="modal">
            ${section.link ? `<div><a href="${section.link}"><h1>${section.title}</h1></a></div>` : '<h1>${section.title}</h1>'}
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

export default modal;