export default function SearchBox() {
    const onSearch = (event) => {
        const currentUrl = window.location.href;
        const searchText = event.target.value;

        const urlParts = currentUrl.split('/');
        urlParts[urlParts.length - 1] = 'search.html';
        const searchUrl = new URL(urlParts.join('/'));

        searchUrl.searchParams.set('query', searchText);

        window.location.href = searchUrl;
    }

    return (
        <div className="W_SearchMainPage">
            <input
                id="search-box"
                type="text"
                placeholder="Виды велосипедов"
                onKeyDown={
                    (event) => {
                        if (event.key !== 'Enter') {
                            return;
                        }

                        onSearch(event);
                    }
                }
                className="M_SearchMainPage"
            />
            <button
                type="submit"
                onClick={onSearch}
                className="A_Button"
            >
                найти
            </button>
        </div>
    );
}