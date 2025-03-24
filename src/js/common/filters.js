
export const createFilters = (entities) => {
    const filtersNode = document.getElementById('filters')

    if (!filtersNode) {
        return;
    }

    filtersNode.innerHTML = '';
    const selectedTag = getSelectedTag();
    const createdFilters = [];

    filtersNode.appendChild(createFilter('все', selectedTag === 'все' || !selectedTag));

    for (const entity of entities) {
        const tags = entity.hasOwnProperty('tag')
            ? [entity.tag]
            : (entity.tags ?? [])

        for (const tag of tags) {
            if (!tag || createdFilters.includes(tag)) {
                continue;
            }

            createdFilters.push(tag);
            filtersNode.appendChild(createFilter(tag, selectedTag === tag));
        }
    }
}

const createFilter = (name, isActive) => {
    const filterButton = document.createElement('button');

    if (isActive) {
        filterButton.classList.add('A_FilterActive');
    }

    filterButton.classList.add('A_Filter');
    filterButton.innerText = name;

    filterButton.addEventListener('click', (event) => {
        const urlParams = new URLSearchParams(window.location.search);

        urlParams.set('filter', event.target.innerText);
        
        window.location.search = urlParams;
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
    };

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