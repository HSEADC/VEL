import {useState} from "react";
import NavSideBar from "./NavSideBar";

export default function Header({
    theme = 'light',
}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const url = new URL(window.location.href);

    const logoUrl = theme === 'light'
        ? 'images/icons/logo.svg'
        : 'images/icons/logo-dark.svg';

    const tabsClass = theme === 'light'
        ? 'M_HeaderNavTabs'
        : 'M_HeaderNavTabsDark'

    const tabClass = theme === 'light'
        ? 'A_PointMenu'
        : 'A_PointMenu Q_TextBlack'

    const onSearch = (event) => {
        if (event.key !== 'Enter') {
            return;
        }

        const currentUrl = window.location.href;
        const searchText = event.target.value;

        const urlParts = currentUrl.split('/');
        urlParts[urlParts.length - 1] = 'search.html';
        const searchUrl = new URL(urlParts.join('/'));

        searchUrl.searchParams.set('query', searchText);

        window.location.href = searchUrl;
    }

    return (
        <header className="O_Header">
            <nav className="W_HeaderNav">
                <a className="A_Logo Q_HideOnMobile" href="index.html">
                    <img src={logoUrl} alt="" />
                </a>

                <button className="A_Logo Q_ShowOnMobile" onClick={() => setIsMenuOpen(true)}>
                    <img src={logoUrl} alt="" />
                </button>

                <div className={`${tabsClass} Q_HideOnMobile`}>
                    <a href="articles.html" className={tabClass}>статьи</a>
                    <a href="lifehacks.html" className={tabClass}>лайфхаки</a>
                    <a href="routes.html" className={tabClass}>маршруты</a>
                    <a href="about-us.html" className={tabClass}>о нас</a>
                </div>
                <div className="M_Search Q_HideOnMobile">
                    <input
                        id="search"
                        className="A_Form"
                        type="search"
                        placeholder="Я ищу..."
                        defaultValue={url.searchParams.get('query') ?? ''}
                        size="20"
                        onKeyDown={onSearch}
                    />
                </div>

                { isMenuOpen && (
                    <NavSideBar
                        onClose={() => setIsMenuOpen(false)}
                    />
                )}
            </nav>
        </header>
    )
}
