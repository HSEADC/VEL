import './index.css';

import './js/navigation';
import { ARTICLES_PATH, createArticles } from './js/articles/articles-list';
import { ARTICLE_PATH, createArticle } from './js/articles/article-page';
import { createLifehacks, LIFEHACKS_PATH } from './js/lifehacks/lifehacks-list';
import { createLifehack, LIFEHACK_PATH } from './js/lifehacks/lifehack-page';
import { createRoute, ROUTE_PATH } from './js/routes/route-page';

const url = new URL(window.location).pathname;

const loadPages = () => {
    if (url.includes(ARTICLES_PATH)) {
        createArticles();
    }
    
    if (url.includes(ARTICLE_PATH)) {
        createArticle();
    }
    
    if (url.includes(LIFEHACKS_PATH)) {
        createLifehacks();
    }

    if (url.includes(LIFEHACK_PATH)) {
        createLifehack();
    }

    if (url.includes(ROUTE_PATH)) {
        createRoute();
    }
}

loadPages();