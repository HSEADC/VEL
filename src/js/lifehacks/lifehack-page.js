import { createH1, createH3, createImage, createTags, createTextNode, getRandomNumber, updateDocumentTitle } from "../common/general";
import { fetchLifehacks, renderLifehacks } from "./lifehacks-list";

export const LIFEHACK_PATH = 'lifehack.html';

export const createLifehack = () => {
    const url = new URL(window.location);

    if (!url.pathname.includes(LIFEHACK_PATH)) {
        return;
    }

    const id = url.searchParams.get('id');

    if (!id) {
        window.location.href = '/';
    }

    void fetch(`api/lifehacks/${id}.json`)
        .then((response) => response.json())
        .then((lifehack) => renderLifehack(lifehack))
        .catch(() => {
            window.location.href = '/';
        });
}

const renderLifehack = (lifehack) => {
    const lifehackNode = document.getElementById('lifehack-text');
    lifehackNode.innerHTML = '';

    lifehackNode.appendChild(createLifehackHead(lifehack));

    for (const part of lifehack.parts) {
        lifehackNode.appendChild(createPart(part));
    }

    updateDocumentTitle(lifehack.title);
    createRecomendations();
}

const createLifehackHead = (lifehack) => {
    const headNode = document.createElement('div');
    headNode.classList.add('W_LifehackHeadWrapper');

    const titleWrapper = document.createElement('div');
    titleWrapper.classList.add('W_LifehackTitleWrapper');

    titleWrapper.append(
        createTags(lifehack.tags),
        createH1(lifehack.title),
    )

    headNode.append(
        titleWrapper,
        createImage(lifehack.image),
    );

    return headNode;
}

const createPart = (part) => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('W_LifehackPartWrapper');

    wrapper.append(
        createH3(part.title),
        createTextNode(part.text),
    );

    return wrapper;
}

const createRecomendations = () => {
    const url = new URL(window.location);
    const id = parseInt(url.searchParams.get('id'), 10);

    fetchLifehacks().then(
        (lifehacks) => {
            const uniqueLifehacks = lifehacks.filter((lifehack) => lifehack.id !== id);
            
            if (uniqueLifehacks.length > 4) {
                const limit = uniqueLifehacks.length - 3;
                const randomNumber = getRandomNumber(limit);
                const randomLifehacks = lifehacks.slice(randomNumber, randomNumber + 4);
                renderLifehacks(randomLifehacks);

                return;
            }

            renderLifehacks(uniqueLifehacks);
        }
    )
}