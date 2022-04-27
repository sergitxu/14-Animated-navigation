const tagsEl = document.querySelector('.choices-tag-list');
const textareaEl = document.querySelector('.choices-textarea');

textareaEl.focus();
textareaEl.addEventListener('keyup', (e) => {
    createTags(e.target.value);
    if (e.code === 'Enter') {
        setTimeout(() => {
            e.target.value = '';
        }, 10);
        highlightRandom();
    }
});

function createTags(input) {
    const listTags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());
    tagsEl.innerHTML = '';
    listTags.forEach(tag => {
        tagsEl.innerHTML += `
            <span class="choices-tag">${tag}</span>
        `
    });
}

function highlightRandom() {
    const times = 30;
    const interval = setInterval(() => {
        const randomTag = pickRandomTag();
        highlight(randomTag);
        setTimeout(() => {
            unHighlight(randomTag);
        }, 100);
    }, 100)
    pickRandomTag()

    setTimeout(() => {
        clearInterval(interval);
        setTimeout(() => {
            const randomTag = pickRandomTag();
            highlight(randomTag);
        }, 100);
    }, times * 100);
}

function pickRandomTag() {
    const tagsElements = document.querySelectorAll('.choices-tag');
    console.log(tagsElements);
    return tagsElements[Math.floor(Math.random() * tagsElements.length)]
};

function highlight(tag) {
    tag.classList.add('choices-tag__highlighted');
}

function unHighlight(tag) {
    tag.classList.remove('choices-tag__highlighted');
}