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

export default tags;