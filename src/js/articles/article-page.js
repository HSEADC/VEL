import { createTags, createH1, createTextNode, createH2, createImage, createLink, createCaption, getRandomNumber } from "../common/general";
import { fetchArticles, renderArticles } from "./articles-list";

export const ARTICLE_PATH = 'article.html';

export const createArticle = () => {
    const url = new URL(window.location);

    if (!url.pathname.includes(ARTICLE_PATH)) {
        return;
    }

    const id = url.searchParams.get('id');

    if (!id) {
        window.location.href = '/';
    }

    void fetch(`api/articles/${id}.json`)
        .then((response) => response.json())
        .then((article) => renderArticle(article))
        .catch(() => {
            window.location.href = '/';
        });
}

const renderArticle = (article) => {
    if (!article) {
        return;
    }

    const introElement = document.getElementById('article-intro');

    if (!introElement) {
        return;
    }

    createBanner(article.banner_image);
    introElement.appendChild(createArticleHead(article));

    const sectionsElement = document.getElementById('article-sections');

    for (const sectionData of article.sections) {
        sectionsElement.appendChild(createArticleSection(sectionData));
    }

    createRecomendations();
}

const createBanner = (bannerImage) => {
    const banner = document.getElementById('article-banner');

    banner.style.backgroundImage = `url('images/articles/list-weave.webp'), url('${bannerImage}')`;
}

const createArticleHead = (article) => {
    const wrapper = document.createElement('div');

    wrapper.classList.add('W_ArticleHead');

    wrapper.append(
        createAuthor(article.author),
        createArticleInto(article)
    );

    return wrapper;
}

const createAuthor = (author) => {
    const authorNode = document.createElement('aside');

    authorNode.classList.add('M_ArticleAuthor');

    const authorName = document.createElement('div');

    authorName.classList.add('W_AuthorName');
    authorName.append(
        createTextNode(author.name),
        createCaption('автор статьи')
    );

    authorNode.append(
        createImage(author.photo),
        authorName
    );

    return authorNode;
}

const createArticleInto = (article) => {
    const introNode = document.createElement('div');

    introNode.classList.add('M_ArticleIntro');

    introNode.append(
        createH1(article.title),
        createTags(article.tags),
        createTextNode(article.description)
    );

    return introNode;
}

const createArticleSection = (sectionData) => {
    const articleSection = document.createElement('section');

    articleSection.classList.add('M_ArticleSection');

    const header = createSectionHeader(sectionData.title);
    createNavLink(sectionData);

    header.setAttribute('id', sectionData.id);

    articleSection.appendChild(header);

    articleSection.appendChild(createSectionTextNode(sectionData.parts));

    return articleSection;
}

const createSectionHeader = (title) => {
    const header = createH2(title);

    const observer = new IntersectionObserver(
        (entries) => {
            const entry = entries[0];
            const header = entry.target;

            if (!entry.isIntersecting) {
                return;
            }

            const navWrapper = document.getElementById('article-nav');

            if (!navWrapper) {
                return;
            }

            const activeNavButton = navWrapper.getElementsByClassName('A_ArticleNavButtonActive')[0];

            if (activeNavButton.innerHTML === header.innerHTML) {
                return;
            }

            activeNavButton.classList.remove('A_ArticleNavButtonActive');

            for (const navButton of navWrapper.getElementsByClassName('A_ArticleNavButton')) {
                if (navButton.innerHTML !== header.innerHTML) {
                    continue;
                }

                navButton.classList.add('A_ArticleNavButtonActive');
            }
        },
        { threshold: [0] },
    );

    observer.observe(header);

    return header;
}

const createNavLink = (sectionData) => {
    const navWrapper = document.getElementById('article-nav');

    const navButton = document.createElement('button');

    navButton.classList.add('A_ArticleNavButton');

    if (!navWrapper.innerHTML) {
        navButton.classList.add('A_ArticleNavButtonActive');
    }

    navButton.innerHTML = sectionData.title;
    navButton.onclick = (event) => {
        navWrapper
            .getElementsByClassName('A_ArticleNavButtonActive')[0]
            .classList
            .remove('A_ArticleNavButtonActive');

        document.getElementById(sectionData.id).scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        });

        event.target.classList.add('A_ArticleNavButtonActive');
    }


    navWrapper.append(navButton);
}

const createSectionTextNode = (sectionParts) => {
    const sectionText = document.createElement('div');

    sectionText.classList.add('M_ArticleSecionText');

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
        return createArticleList(part.value);
    }

    if (part.type === 'image') {
        return createArticleImages(part.value);
    }

    if (part.type === 'remark') {
        return createArticleRemark(part.value);
    }

    if (part.type === 'reference') {
        return createArticleReference(part.value);
    }

    return null;
}

const createArticleList = (articleList) => {
    const listNode = document.createElement('div');

    listNode.classList.add('M_ArticleList');

    for (const listItem of articleList) {
        const itemNode = createTextNode(listItem.value);
        itemNode.prepend(createBoldText(listItem.title), '. ')

        listNode.appendChild(itemNode);
    }

    return listNode;
}

const createBoldText = (text) => {
    const textNode = document.createElement('b');

    textNode.innerHTML = text;

    return textNode;
}

const createArticleImages = (articleImages) => {
    const imagesNode = document.createElement('div');

    imagesNode.classList.add('M_ArticleImages');

    for (const image of articleImages) {
        imagesNode.appendChild(createImage(image));
    }

    return imagesNode;
}

const createArticleRemark = (reminderText) => {
    const reminder = createTextNode(reminderText);

    reminder.classList.add('A_ArticleRemark');

    return reminder;
}


const createArticleReference = (reminderData) => {
    const reference = document.createElement('div');

    reference.classList.add('A_ArticleReference');

    reference.append(
        createTextNode(reminderData.text),
        createLink(reminderData.title, reminderData.href)
    );

    return reference;
}

const createRecomendations = () => {
    const url = new URL(window.location);
    const id = parseInt(url.searchParams.get('id'), 10);

    fetchArticles().then(
        (articles) => {
            articles = articles.filter((article) => article.id !== id);

            if (articles.length <= 2) {
                renderArticles(articles);

                return;
            }

            const limit = articles.length - 1;

            const randomNumber = getRandomNumber(limit);
            const randomArticles = articles.slice(randomNumber, randomNumber + 2);

            console.log(randomArticles);

            renderArticles(randomArticles);
        }
    )
}