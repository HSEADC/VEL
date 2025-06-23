import { filterEntities, createFilters } from "../common/filters";
import { createTag, createH3, createH2 } from "../common/general";

export const LIFEHACKS_PATH = 'lifehacks.html';
const LIFEHACK_PATH = 'lifehack.html';
const LIFEHACKS_URL = 'api/lifehacks-list.json';

export const createLifehacks = () => {    
    void fetchLifehacks()
        .then((lifehacks) => {
            renderEditorChoice(lifehacks);

            createFilters(lifehacks, createLifehacks);

            const filteredLifehacks = filterEntities(lifehacks);
            renderLifehacks(filteredLifehacks);
        });
}

export const fetchLifehacks = async () => {
    return fetch(LIFEHACKS_URL).then((response) => response.json());
}

const renderEditorChoice = (lifehacks) => {
    const editorChoiceNode = document.getElementById('editor_lifehacks');

    if (!editorChoiceNode) {
        return;
    }

    editorChoiceNode.innerHTML = '';

    for (const lifehack of lifehacks) {
        if (lifehack.is_editor_choice) {
            createEditorCard(lifehack);
        }
    }
}

export const renderLifehacks = (lifehacks) => {
    const listNode = document.getElementById('lifehacks_list');

    if (!listNode) {
        return;
    }

    listNode.innerHTML = '';

    for (const [index, lifehack] of lifehacks.entries()) {
        const lifehackCard = createLifehackCard(lifehack, index);

        listNode.appendChild(lifehackCard);
    }
}

const createLifehackCard = (lifehack, index) => {
    // 2 7 16 21
    return createCard(lifehack, index);
}

const createCard = (lifehack, index) => {
    const lifehackCard = document.createElement('a');
    lifehackCard.setAttribute('href', `${LIFEHACK_PATH}?id=${lifehack.id}`);
    lifehackCard.classList.add('M_LifehackCard', `Q_LifehackBG${index % 6 + 1}`);

    lifehackCard.appendChild(createTag(lifehack.tag));
    lifehackCard.appendChild(createImage(lifehack.image));
    lifehackCard.appendChild(createH3(lifehack.title));

    return lifehackCard;
}

const createEditorCard = (lifehack, index) => {
    const editorList = document.getElementById('editor_lifehacks');

    if (!editorList) {
        return;
    }

    const lifehackCard = document.createElement('a');
    lifehackCard.setAttribute('href', `${LIFEHACK_PATH}?id=${lifehack.id}`);
    lifehackCard.classList.add('M_LifehackLargeCard', `Q_LifehackBG${index % 6 + 1}`);
    
    const textWrapper = document.createElement('div');
    textWrapper.classList.add('W_LifehackLargeCardText');

    textWrapper.appendChild(createTag(lifehack.tag));
    textWrapper.appendChild(createH2(lifehack.title));

    lifehackCard.appendChild(textWrapper);
    lifehackCard.appendChild(createImage(lifehack.image));

    editorList.append(lifehackCard);
}

const createImage = (imageSrc) => {
    const imageElement = document.createElement('img');

    imageElement.setAttribute('src', imageSrc)
    imageElement.classList.add('A_LifehackPhoto');

    return imageElement;
}
