import { createFilters, filterEntities } from "../common/filters";
import { createH2, createH3, createImage, createLink, createTags, createTextNode } from "../common/general";
import { createLoadMoreButton, paginateEntities, removeLoadMoreButton } from "../common/pagination";
import { ARTICLE_PATH } from "./article-page";

export const ARTICLES_PATH = 'articles.html';
const API_URL = 'api/articles-list.json';
const PER_PAGE = 8;

export const createArticles = () => {
    fetchArticles()
        .then(prepareArticles)
        .then(renderArticles);
}

export const fetchArticles = async () => {
    return fetch(API_URL).then((response) => response.json());
}

const prepareArticles = (articles) => {
    const edittorChoiceArticle = articles.find((article) => article.is_editor_choice);
    createEditorChoiceArticle(edittorChoiceArticle);

    createFilters(articles);

    const filteredArticles = filterEntities(articles);
    const paginatedEntities = paginateEntities(filteredArticles, PER_PAGE);

    if (paginatedEntities.length < filteredArticles.length) {
        createLoadMoreButton(createArticles);
    } else {
        removeLoadMoreButton();
    }

    return paginatedEntities;
}

export const renderArticles = (articles) => {
    const articlesNode = document.getElementById('articles_list');

    if (!articlesNode) {
        return;
    }

    articlesNode.innerHTML = '';

    for (const article of articles) {
        articlesNode.appendChild(createArticle(article));
    }
};

const createArticle = (article) => {
    const articleNode = document.createElement('a');
    articleNode.classList.add('M_ArticleCard');
    articleNode.setAttribute('href', `${ARTICLE_PATH}?id=${article.id}`);

    const infoWrapper = document.createElement('div');
    infoWrapper.classList.add('W_ArticleCardInfo')

    const textWrapper = document.createElement('div');
    textWrapper.classList.add('W_ArticleCardText');

    textWrapper.append(
        createH3(article.title),
        createTextNode(article.short_description),
    );

    infoWrapper.append(
        createTags(article.tags),
        textWrapper,
    );

    articleNode.append(
        createImage(article.image),
        infoWrapper,
    );

    return articleNode;
}

export const createEditorChoiceArticle = (article) => {
    const editorChoiceNode = document.getElementById('article_editor_choice');

    if (!editorChoiceNode) {
        return;
    }

    editorChoiceNode.innerHTML = '';

    const url = `${ARTICLE_PATH}?id=${article.id}`;

    const articleNode = document.createElement('a');
    articleNode.classList.add('M_EditorChoiseArticleCard');
    articleNode.setAttribute('href', url);

    const infoWrapper = document.createElement('div');
    infoWrapper.classList.add('W_EditorChoiseArticleCardInfo')

    const textWrapper = document.createElement('div');
    textWrapper.classList.add('W_EditorChoiseArticleCardText');

    const title = createH2(article.title);
    const description = createTextNode(article.short_description);

    title.classList.add('Q_TextWhite');
    description.classList.add('Q_TextWhite');

    textWrapper.append(title, description);

    infoWrapper.append(
        createTags(article.tags),
        textWrapper,
        createLink('читать', url),
    );

    articleNode.append(
        createImage(article.image),
        infoWrapper,
    );

    editorChoiceNode.appendChild(articleNode);
}