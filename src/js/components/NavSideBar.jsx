export default function NavSideBar({
    onClose,
}) {
    return (
        <div className="Q_ShowOnMobile O_OpenMenu">
            <div className="W_OpenMenuMobile">
                <a className="A_Logo" href="index.html">
                    <img src="images/icons/logo-dark.svg" alt="" />
                </a>
                <button className="A_CloseButton" onClick={onClose}>
                    <img src="images/icons/cross.svg" alt=""/>
                </button>
            </div>
            <div className="M_PointMenuHeaderMobile">
                <a href="articles.html" className="A_PointMenu Q_TextBlack">статьи</a>
                <a href="lifehacks.html" className="A_PointMenu Q_TextBlack">лайфхаки</a>
                <a href="routes.html" className="A_PointMenu Q_TextBlack">маршруты</a>
                <a href="about-us.html" className="A_PointMenu Q_TextBlack">о нас</a>
            </div>
        </div>
    );
}