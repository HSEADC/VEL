import SocialLinks from "./common/SocialLinks";
import NavSideBar from "./NavSideBar";
import {useState} from "react";

export default function HeaderMain({
    theme = 'light',
    hideNavigation = false,
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
                <SocialLinks />
            </nav>

            { isMenuOpen && (
                <NavSideBar
                    onClose={() => setIsMenuOpen(false)}
                />
            )}
        </header>
    )
}
