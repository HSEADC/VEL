import { createBoldText, createCaption, createImage, createTextNode, updateDocumentTitle } from "../common/general";
import { createStoryBanner, createStoryIntro, createStorySection } from "../common/story-components";

export const ROUTE_PATH = 'route.html';

const DISTANCE_IMAGE = 'images/routes/quarks/location.svg';
const TIME_IMAGE = 'images/routes/quarks/time.svg';

export const createRoute = () => {
    const url = new URL(window.location);

    const id = url.searchParams.get('id');

    if (!id) {
        window.location.href = '/404.html';
    }

    void fetch(`api/routes/${id}.json`)
        .then((response) => response.json())
        .then((route) => renderRoute(route))
        .catch(() => {
            window.location.href = '/404.html';
        });
}

const renderRoute = (route) => {
    if (!route) {
        return;
    }

    const introElement = document.getElementById('story-intro');

    if (!introElement) {
        return;
    }

    updateDocumentTitle(route.title);
    createStoryBanner(route.banner_image);
    introElement.appendChild(createRouteHead(route));

    const sectionsElement = document.getElementById('story-sections');

    for (const sectionData of route.sections) {
        sectionsElement.appendChild(createStorySection(sectionData));
    }

    createEnding(route.ending);
}

const createRouteHead = (route) => {
    const wrapper = document.createElement('div');

    wrapper.classList.add('W_StoryHead');

    wrapper.append(
        createSummary(route.summary),
        createStoryIntro(route)
    );

    return wrapper;
}


const createSummary = (summaryData) => {
    const summaryNode = document.createElement('aside');

    summaryNode.classList.add('W_InfoCardWay');

    const difficultyNode = document.createElement('div');
    difficultyNode.classList.add('M_WayInfo');
    difficultyNode.append(createImage(summaryData.difficulty))

    const distanceNode = document.createElement('div');
    distanceNode.classList.add('M_WayInfo');
    distanceNode.append(
        createImage(DISTANCE_IMAGE),
        createCaption(summaryData.distance)
    )
    const timeNode = document.createElement('div');
    timeNode.classList.add('M_WayInfo');
    timeNode.append(
        createImage(TIME_IMAGE),
        createCaption(summaryData.time)
    )

    summaryNode.append(difficultyNode, distanceNode, timeNode);

    return summaryNode;
}

const createEnding = (ending) => {
    const endingNode = document.getElementById('story-ending');

    const factoid = document.createElement('div');

    factoid.classList.add('O_Factoid');
    factoid.classList.add('Q_LineDecorate')

    const listNode = document.createElement('div');

    listNode.classList.add('M_StoryList');

    for (const listItem of ending) {
        const itemNode = createTextNode(listItem.value);
        itemNode.prepend(createBoldText(listItem.title), ': ')

        listNode.appendChild(itemNode);
    }

    factoid.append(listNode);
    endingNode.append(factoid);
}