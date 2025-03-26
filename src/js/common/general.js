export const createTags = (tags) => {
    const tagsNode = document.createElement('div');

    tagsNode.classList.add('M_Tags');

    for (const tag of tags) {
        tagsNode.appendChild(createTag(tag));
    }

    return tagsNode;
}

export const createTag = (tag) => {
    const tagNode = document.createElement('span');

    tagNode.classList.add('A_Tag');
    tagNode.innerText = tag;

    return tagNode;
}

export const createH1 = (header) => {
    const headerNode = document.createElement('h1');

    headerNode.classList.add('A_H1');
    headerNode.innerText = header;

    return headerNode;
}

export const createH2 = (header) => {
    const headerNode = document.createElement('h2');

    headerNode.classList.add('A_H2');
    headerNode.innerText = header;

    return headerNode;
}

export const createH3 = (header) => {
    const headerNode = document.createElement('h3');

    headerNode.classList.add('A_H3');
    headerNode.innerText = header;

    return headerNode;
}

export const createTextNode = (text) => {
    const textNode = document.createElement('div');

    textNode.classList.add('A_Text');
    textNode.innerHTML = text;

    return textNode;
}

export const createCaption = (text) => {
    const caption = document.createElement('div');

    caption.classList.add('A_Caption');
    caption.innerHTML = text;

    return caption;
}

export const createImage = (src) => {
    const image = document.createElement('img');

    image.setAttribute('src', src);

    return image;
}

export const createLink = (text, href) => {
    const link = document.createElement('a');

    link.setAttribute('href', href ?? '#');
    link.innerHTML = text;

    link.classList.add('A_Button');

    return link;
}

export const createButton = (text, onClick) => {
    const button = document.createElement('button');

    button.innerHTML = text;
    button.onclick = onClick;

    button.classList.add('A_Button');

    return button;
}

export const getRandomNumber = (limit) => {
    return Math.floor(Math.random() * limit);
}

export const createBoldText = (text) => {
    const textNode = document.createElement('b');

    textNode.innerHTML = text;

    return textNode;
}