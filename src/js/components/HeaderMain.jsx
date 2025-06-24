import SocialLinks from "./common/SocialLinks";
import NavSideBar from "./NavSideBar";
import {useState} from "react";
import NavLinks from "./common/NavLinks";

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


                {!hideNavigation ? <NavLinks theme={theme} /> : <span className="Q_HideOnMobile"></span>}

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
