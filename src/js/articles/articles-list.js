import { createFilters, filterEntities } from "../common/filters";
import { createH3, createImage, createTags, createTextNode } from "../common/general";
import { ARTICLE_PATH } from "./article-page";

export const ARTICLES_PATH = 'articles.html';
const API_URL = 'api/articles-data.json';

export const createArticles = () => {
    const url = new URL(window.location);

    if (!url.pathname.includes(ARTICLES_PATH)) {
        return;
    }

    fetch(API_URL)
        .then((response) => response.json())
        .then((articles) => {
            createFilters(articles);
            renderArticles(filterEntities(articles));
        });
}

const renderArticles = (articles) => {
    const articlesNode = document.getElementById('articles_list');

    if (!articlesNode) {
        return;
    }

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