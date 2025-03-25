import { createButton } from './general';

export const paginateEntities = (entities, perPage) => {
    return entities.slice(0, perPage * getCurrentPage());
}

const getCurrentPage = () => {
    return parseInt(new URLSearchParams(window.location.search).get('page') ?? 1, 10);
}

export const createLoadMoreButton = (onClick) => {
    removeLoadMoreButton();
    
    const paginationNode = document.getElementById('pagination');

    const createNextPage = () => {
        const url = new URL(window.location.href);

        const page = getCurrentPage() + 1;
        url.searchParams.set('page', getCurrentPage() + 1);
        
        window.history.pushState({}, '', url);

        onClick();
    }

    paginationNode.appendChild(createButton('загрузить еще', createNextPage));
}

export const removeLoadMoreButton = () => {
    const paginationNode = document.getElementById('pagination');
    paginationNode.innerHTML = '';
}