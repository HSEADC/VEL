import { fetchArticles, renderArticles } from "../articles/articles-list";

export const SEARCH_PATH = 'search.html';

export const createSearchPage = () => {
    searchArticles().then(
        (articles) => {
            if (!articles.length) {
                return;
            }
            
            renderArticles(articles)
        },
    );
}

const searchArticles = async () => {
    const url = new URL(window.location.href);

    const searchText = url.searchParams.get('query');

    const articles = await fetchArticles();

    return articles.filter(
        (article) => article.title?.includes(searchText) || article.tags?.includes(searchText),
    )
}