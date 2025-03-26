import { createBoldText, createCaption, createH1, createImage, createLink, createTags, createTextNode } from "./general";
import { createNavLink, createSectionHeader } from "./story-navigation";

export const createStoryBanner = (...images) => {
    const banner = document.getElementById('story-banner');

    const backgroundImage = images.map(
        (image) => `url('${image}')`
    ).join(', ')

    banner.style.backgroundImage = backgroundImage;
}

export const createStoryIntro = (story) => {
    const introNode = document.createElement('div');

    introNode.classList.add('W_NameStory');

    introNode.append(
        createH1(story.title),
        createTags(story.tags),
        createTextNode(story.description)
    );

    return introNode;
}

export const createStorySection = (sectionData) => {
    const articleSection = document.createElement('section');

    articleSection.classList.add('O_BlockStoryText');

    const header = createSectionHeader(sectionData.title);
    createNavLink(sectionData);

    header.setAttribute('id', sectionData.id);

    articleSection.appendChild(header);

    articleSection.appendChild(createSectionPart(sectionData.parts));

    return articleSection;
}

const createSectionPart = (sectionParts) => {
    const sectionText = document.createElement('div');

    sectionText.classList.add('W_TextStory');

    for (const part of sectionParts ?? []) {
        const partElement = createPart(part);

        if (!partElement) {
            continue;
        }

        sectionText.appendChild(partElement);
    }

    return sectionText;
}

const createPart = (part) => {
    if (part.type === 'text') {
        return createTextNode(part.value);
    }

    if (part.type === 'list') {
        return createStoryList(part.value);
    }

    if (part.type === 'image') {
        return createStoryImagesList(part.value);
    }

    if (part.type === 'remark') {
        return createRemark(part.value);
    }

    if (part.type === 'reference') {
        return createReference(part.value);
    }

    if (part.type === 'features') {
        return createFeatures(part.value);
    }

    return null;
}

const createStoryList = (articleList) => {
    const listNode = document.createElement('div');

    listNode.classList.add('M_StoryList');

    for (const listItem of articleList) {
        const itemNode = createTextNode(listItem.value);
        itemNode.prepend(createBoldText(listItem.title), '. ')

        listNode.appendChild(itemNode);
    }

    return listNode;
}

const createStoryImagesList = (articleImages) => {
    const imagesNode = document.createElement('div');

    imagesNode.classList.add('M_StoryImagesList');

    for (const image of articleImages) {
        imagesNode.appendChild(createImage(image));
    }

    return imagesNode;
}

const createRemark = (reminderText) => {
    const remark = createTextNode(reminderText);

    remark.classList.add('O_Factoid');
    remark.classList.add('Q_LineDecorate')

    return remark;
}


const createReference = (reminderData) => {
    const reference = document.createElement('div');

    reference.classList.add('O_Factoid');

    reference.append(
        createTextNode(reminderData.text),
        createLink(reminderData.title, reminderData.href)
    );

    return reference;
}

const createFeatures = (features) => {
    const featuresNode = document.createElement('div');
    featuresNode.classList.add('C_WayFeatures');

    for (const feature of features) {
        featuresNode.appendChild(createFeature(feature));
    }

    return featuresNode;
}

const createFeature = (feature) => {
    const featureNode = document.createElement('div');
    featureNode.classList.add('M_WayFeature');

    featureNode.append(
        createImage(feature.icon),
        createCaption(feature.text),
    );

    return featureNode;
}