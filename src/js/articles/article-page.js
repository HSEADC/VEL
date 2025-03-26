import { createTextNode, createImage, createCaption, getRandomNumber } from "../common/general";
import { createStoryBanner, createStoryIntro, createStorySection } from "../common/story-components";
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

    const introElement = document.getElementById('story-intro');

    if (!introElement) {
        return;
    }

    createStoryBanner('images/articles/list-weave.webp', article.banner_image);
    introElement.appendChild(createArticleHead(article));

    const sectionsElement = document.getElementById('story-sections');

    for (const sectionData of article.sections) {
        sectionsElement.appendChild(createStorySection(sectionData));
    }

    createRecomendations();
}

const createArticleHead = (article) => {
    const wrapper = document.createElement('div');

    wrapper.classList.add('W_StoryHead');

    wrapper.append(
        createAuthor(article.author),
        createStoryIntro(article)
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
