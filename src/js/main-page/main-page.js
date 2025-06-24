import { createEditorChoiceArticle, fetchArticles, renderArticles } from "../articles/articles-list";
import { getRandomNumber } from "../common/general";
import { fetchLifehacks, renderLifehacks } from "../lifehacks/lifehacks-list";
import {createRoot} from "react-dom/client";
import SearchBox from "../components/common/SearchBox";

export const MAIN_PATH = 'index.html';

export const createMainPage = () => {
    createArticles();
    createLifehacks();

    const searchBox = document.getElementById('search-box');

    if (!searchBox) {
        return;
    }

    createRoot(searchBox).render(
        <SearchBox />
    )
}

const createArticles = () => {
    const url = new URL(window.location);

    fetchArticles().then(
        (articles) => {
            if (articles.length <= 2) {
                renderArticles(articles);

                return;
            }

            const limit = articles.length - 1;

            const randomNumber = getRandomNumber(limit);
            const randomArticles = articles.slice(randomNumber, randomNumber + 2);

            renderArticles(randomArticles);

            const editorChoice = articles.find(
                (article) => article.is_editor_choice,
            );

            if (!editorChoice) {
                return;
            }

            createEditorChoiceArticle(editorChoice);
        }
    )
}

const createLifehacks = () => {
    const url = new URL(window.location);

    fetchLifehacks().then(
        (lifehacks) => {
            if (lifehacks.length > 4) {
                const limit = lifehacks.length - 3;
                const randomNumber = getRandomNumber(limit);
                const randomLifehacks = lifehacks.slice(randomNumber, randomNumber + 4);
                renderLifehacks(randomLifehacks);

                return;
            }

            renderLifehacks(lifehacks);
        }
    )
}