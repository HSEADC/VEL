import React from 'react';
import Header from './js/components/common/Header.jsx';
import Footer from './js/components/common/Footer.jsx';

import './index.css';

import './js/navigation';

import { ARTICLES_PATH, createArticles } from './js/articles/articles-list';
import { ARTICLE_PATH, createArticle } from './js/articles/article-page';
import { createLifehacks, LIFEHACKS_PATH } from './js/lifehacks/lifehacks-list';
import { createLifehack, LIFEHACK_PATH } from './js/lifehacks/lifehack-page';
import { createRoute, ROUTE_PATH } from './js/routes/route-page';
import { createMainPage, MAIN_PATH } from './js/main-page/main-page';
import { createRoot } from 'react-dom/client';
import { createSearchPage, initSearchField, SEARCH_PATH } from './js/common/search.js';

window.React = React;
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

    if (url.includes(SEARCH_PATH)) {
        createSearchPage();
    }
}

const header = createRoot(document.getElementById('navigation'));
header.render(
    <Header theme={
        url.includes(LIFEHACK_PATH) || url.includes(SEARCH_PATH)
          ? 'dark'
          : 'light'
        }
    />
)

const footer = createRoot(document.getElementById('footer'));
footer.render(
    <Footer />
)

loadPages();