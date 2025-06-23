import SocialLinks from "./common/SocialLinks";

export default function Footer() {
    return (
        <footer className="S_Footer">
            <div className="S_FooterWrapper">
                <section className="W_FooterRow">
                    <section className="W_EmailWrapper">
                        <form action="#" className="W_EmailSection">
                            <h3 className="A_H3 Q_TextWhite">Будь в курсе новостей</h3>

                            <div className="M_Form">
                                <input type="email" placeholder="Введи свой e-mail" className="A_Form" />
                                <button type="submit" className="A_Button">
                                    подписаться
                                </button>
                            </div>
                        </form>
                    </section>

                    <section className="M_FooterNav Q_HideOnMobile">
                        <a href="articles.html" className="A_FooterNavButton">статьи</a>
                        <a href="lifehacks.html" className="A_FooterNavButton">лайфхаки</a>
                        <a href="routes.html" className="A_FooterNavButton">маршруты</a>
                        <a href="about-us.html" className="A_FooterNavButton">о нас</a>
                    </section>

                    <div className="A_Logo Q_HideOnMobile">
                        <img src="images/icons/logo.svg" alt="" />
                    </div>
                </section>

                <section className="W_FooterRow">
                    <SocialLinks />
                    <div className="A_HseLogo">
                        <img src="images/icons/hse.svg" alt="HSE" />
                    </div>
                </section>

                <section className="W_FooterRow">
                    <div className="A_Logo Q_ShowOnMobile">
                        <img src="images/icons/logo.svg" alt="" />
                    </div>
                    <div className="W_FooterNames">
                        <span className="A_Caption Q_TextWhite">Алена Ветошкина</span>
                        <span className="A_Caption Q_TextWhite">Катя Бобровникова</span>
                        <span className="A_Caption Q_TextWhite">Вика Янина</span>
                    </div>
                    <div className="W_FooterNames">
                        <span className="A_Caption Q_TextWhite">Анна Комкова</span>
                        <span className="A_Caption Q_TextWhite">Софья Каем</span>
                        <span className="A_Caption Q_TextWhite">Ксения Швецова</span>
                    </div>
                </section>
            </div>
        </footer>
    );
}