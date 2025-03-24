import { filterEntities, createFilters } from "../common/filters";
import { createTag, createH3 } from "../common/general";

export const LIFEHACKS_PATH = 'lifehacks.html';
const apiUrl = 'api/lifehacks-data.json';

export const createLifehacks = () => {
    const listNode = document.getElementById('lifehacks_list');
    const editorChoiceNode = document.getElementById('editor_choice_list');

    if (!listNode && !editorChoiceNode) {
        return;
    }
    
    void fetch(apiUrl)
        .then((response) => response.json())
        .then((lifehacks) => {
            createFilters(lifehacks);
            renderLifehacks(lifehacks);
        });
}

const renderLifehacks = (lifehacks) => {
    const listNode = document.getElementById('lifehacks_list');
    const editorChoiceNode = document.getElementById('editor_choice_list');

    if (!listNode && !editorChoiceNode) {
        return;
    }

    if (listNode) {
        listNode.innerHTML = '';
    }

    if (editorChoiceNode) {
        editorChoiceNode.innerHTML = '';
    }

    lifehacks = filterEntities(lifehacks);

    for (const [index, lifehack] of lifehacks.entries()) {
        const lifehackCard = createLifehackCard(lifehack, index);

        if (editorChoiceNode && lifehack.is_editor_choice) {
            editorChoiceNode.appendChild(lifehackCard);
        }

        if (listNode) {
            listNode.appendChild(createLifehackCard(lifehack, index));
        }
    }
}

const createLifehackCard = (lifehack, index) => {
    const lifehackCard = document.createElement('div');

    lifehackCard.classList.add('M_LifehackCard', `Q_LifehackBG${index + 1}`);

    lifehackCard.appendChild(createTag(lifehack.tag));
    lifehackCard.appendChild(createImage(lifehack.image));
    lifehackCard.appendChild(createH3(lifehack.title));

    return lifehackCard;
}

const createImage = (imageSrc) => {
    const imageElement = document.createElement('img');

    imageElement.setAttribute('src', imageSrc)
    imageElement.classList.add('A_LifehackPhoto');

    return imageElement;
}

createLifehacks();