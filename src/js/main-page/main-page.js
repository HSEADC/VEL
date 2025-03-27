import { createEditorChoiceArticle, fetchArticles, renderArticles } from "../articles/articles-list";
import { getRandomNumber } from "../common/general";
import { fetchLifehacks, renderLifehacks } from "../lifehacks/lifehacks-list";

export const MAIN_PATH = 'index.html';

export const createMainPage = () => {
    createArticles();
    createLifehacks();
}

const createArticles = () => {
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
    const id = parseInt(url.searchParams.get('id'), 10);

    fetchLifehacks().then(
        (lifehacks) => {
            const uniqueLifehacks = lifehacks.filter((lifehack) => lifehack.id !== id);
            
            if (uniqueLifehacks.length > 4) {
                const limit = uniqueLifehacks.length - 3;
                const randomNumber = getRandomNumber(limit);
                const randomLifehacks = lifehacks.slice(randomNumber, randomNumber + 4);
                renderLifehacks(randomLifehacks);

                return;
            }

            renderLifehacks(uniqueLifehacks);
        }
    )
}