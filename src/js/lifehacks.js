const apiUrl = '../api/lifehacks-data.json';
const requiredKeys = ['id', 'tag', 'image', 'title'];
let areLifehacksLoaded = false;

const createTag = (tag) => {
    const tagElement = document.createElement('span');

    tagElement.classList.add('A_Tag');
    tagElement.innerText = tag;

    return tagElement;
}

const createImage = (imageSrc) => {
    const imageElement = document.createElement('img');

    imageElement.setAttribute('src', imageSrc)
    imageElement.classList.add('A_LifehackPhoto');

    return imageElement;
}

const createTitle = (title) => {
    const titleElement = document.createElement('h3');

    titleElement.classList.add('A_H3');
    titleElement.innerText = title;

    return titleElement;
}

const createLifehackCard = (lifehack) => {
    for (const requiredKey of requiredKeys) {
        if (!lifehack.hasOwnProperty(requiredKey)) {
            return;
        }
    }

    const lifehackCard = document.createElement('div');
    const backgroundQuarkIndex = (lifehack['id'] - 1) % 6 + 1;

    lifehackCard.classList.add('M_Lifehack', `Q_LifehackBG${backgroundQuarkIndex}`);

    lifehackCard.appendChild(createTag(lifehack['tag']));
    lifehackCard.appendChild(createImage(lifehack['image']));
    lifehackCard.appendChild(createTitle(lifehack['title']));

    return lifehackCard;
}

const createLifehacks = () => {
    const listNode = document.getElementById('lifehacks_list');
    const editorChoiceNode = document.getElementById('editor_choice_list');

    if (!listNode || !editorChoiceNode || areLifehacksLoaded) {
        return;
    }
    
    void fetch(apiUrl)
        .then((response) => response.json())
        .then((lifehacks) => {
            for (const lifehack of lifehacks) {
                const lifehackCard = createLifehackCard(lifehack);

                listNode.appendChild(createLifehackCard(lifehack));

                if (lifehack['is_editor_choice']) {
                    editorChoiceNode.appendChild(lifehackCard);
                }
            }

            areLifehacksLoaded = true;
        });
}

createLifehacks();