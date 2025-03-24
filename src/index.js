import './index.css';

import './js/navigation';
import { ARTICLES_PATH, createArticles } from './js/articles/articles-list';
import { ARTICLE_PATH, createArticle } from './js/articles/article-page';
import { createLifehacks, LIFEHACKS_PATH } from './js/lifehacks/lifehacks';

const url = new URL(window.location).pathname;

if (url.includes(ARTICLES_PATH)) {
    createArticles();
}

if (url.includes(ARTICLE_PATH)) {
    createArticle();
}

if (url.includes(LIFEHACKS_PATH)) {
    createLifehacks();
}
