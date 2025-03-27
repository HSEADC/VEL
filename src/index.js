import './index.css';

import './js/navigation';
import { ARTICLES_PATH, createArticles } from './js/articles/articles-list';
import { ARTICLE_PATH, createArticle } from './js/articles/article-page';
import { createLifehacks, LIFEHACKS_PATH } from './js/lifehacks/lifehacks-list';
import { createLifehack, LIFEHACK_PATH } from './js/lifehacks/lifehack-page';
import { createRoute, ROUTE_PATH } from './js/routes/route-page';
import { createMainPage, MAIN_PATH } from './js/main-page/main-page';

const url = new URL(window.location).pathname;

const loadPages = () => {
    if (url.includes(ARTICLES_PATH)) {
        createArticles();

        return;
    }
    
    if (url.includes(ARTICLE_PATH)) {
        createArticle();

        return;
    }
    
    if (url.includes(LIFEHACKS_PATH)) {
        createLifehacks();

        return;
    }

    if (url.includes(LIFEHACK_PATH)) {
        createLifehack();

        return;
    }

    if (url.includes(ROUTE_PATH)) {
        createRoute();

        return;
    }

    if (url.includes(MAIN_PATH) || url.endsWith('/')) {
        createMainPage();
    }
}

loadPages();