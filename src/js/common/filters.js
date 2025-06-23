
export const createFilters = (entities, onClick) => {
    const filtersNode = document.getElementById('filters')

    if (!filtersNode) {
        return;
    }

    filtersNode.innerHTML = '';
    const selectedTag = getSelectedTag();
    const createdFilters = [];

    filtersNode.appendChild(createFilter('все', selectedTag === 'все' || !selectedTag, onClick));

    for (const entity of entities) {
        const tags = entity.hasOwnProperty('tag')
            ? [entity.tag]
            : (entity.tags ?? [])

        for (const tag of tags) {
            if (!tag || createdFilters.includes(tag)) {
                continue;
            }

            createdFilters.push(tag);
            filtersNode.appendChild(createFilter(tag, selectedTag === tag, onClick));
        }
    }
}

const createFilter = (name, isActive, onClick) => {
    const filterButton = document.createElement('button');

    if (isActive) {
        filterButton.classList.add('A_FilterActive');
    }

    filterButton.classList.add('A_Filter');
    filterButton.innerText = name;

    filterButton.addEventListener('click', (event) => {
        const url = new URL(window.location.href);

        url.searchParams.delete('page');
        url.searchParams.set('filter', event.target.innerText);

        window.history.pushState({}, '', url);

        onClick();
    })

    return filterButton;
}

const getSelectedTag = () => {
    return new URLSearchParams(window.location.search).get('filter');
}

export const filterEntities = (entities) => {
    const selectedTag = getSelectedTag();

    if (!selectedTag || selectedTag === 'все') {
        return entities;
    }

    const result = [];

    for (const entity of entities) {
        const tags = entity.hasOwnProperty('tag')
            ? [entity.tag]
            : (entity.tags ?? [])

        if (!tags.includes(selectedTag)) {
            continue;
        }

        result.push(entity);
    }

    return result;
}