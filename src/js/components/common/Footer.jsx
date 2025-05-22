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

                    <section className="M_FooterNav">
                        <a href="articles.html" className="A_FooterNavButton">статьи</a>
                        <a href="lifehacks.html" className="A_FooterNavButton">лайфхаки</a>
                        <a href="routes.html" className="A_FooterNavButton">маршруты</a>
                        <a href="about-us.html" className="A_FooterNavButton">о нас</a>
                    </section>
                </section>

                <section className="W_FooterRow">
                    <div className="M_Social">
                        <div className="A_SocialLink">
                            <a href="https://t.me/+iCtcV4CG7UphMWYy">
                                <img src="images/icons/telegram.svg" alt="Telegram" />
                            </a>
                        </div>
                        <div className="A_SocialLink">
                            <a href="https://vk.com/vellmsk">
                                <img src="images/icons/vk.svg" alt="VK" />
                            </a>
                        </div>
                        <div className="A_SocialLink">
                            <a href="https://dzen.ru/vell_msc">
                                <img src="images/icons/dzen.svg" alt="Яндекс Дзен" />
                            </a>
                        </div>
                    </div>

                    <div className="A_HseLogo">
                        <img src="images/icons/hse.svg" alt="HSE" />
                    </div>
                </section>

                <section className="W_FooterRow">
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