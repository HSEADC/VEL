export default function NavLinks({
    theme = 'light',
}) {
    const tabsClass = theme === 'light'
        ? 'M_HeaderNavTabs'
        : 'M_HeaderNavTabsDark'

    const getTabClass = (url) => {
        const tabClass = theme === 'light'
            ? 'A_PointMenu'
            : 'A_PointMenu Q_TextBlack'

        const currentPath = window.location.pathname
            .toLowerCase()
            .replace('/', '')
            .replace('.html', '');

        const navPath = url.replace('/', '').replace('.html', '').toLowerCase();

        if ((!currentPath && navPath === 'index')
            || currentPath.includes(navPath)
            || currentPath.includes(navPath.substring(0, navPath.length - 1))
        ) {
            return `${tabClass} A_ActiveNav`;
        }

        return tabClass;
    }

    return (
        <div className={`${tabsClass} Q_HideOnMobile`}>
            <a href="articles.html" className={getTabClass('articles.html')}>статьи</a>
            <a href="lifehacks.html" className={getTabClass('lifehacks.html')}>лайфхаки</a>
            <a href="routes.html" className={getTabClass('routes.html')}>маршруты</a>
            <a href="about-us.html" className={getTabClass('about-us.html')}>о нас</a>
        </div>
    );
}