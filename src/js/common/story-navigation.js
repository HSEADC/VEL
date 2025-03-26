import { createH2 } from "./general";

export const createSectionHeader = (title) => {
    const header = createH2(title);

    const observer = new IntersectionObserver(
        (entries) => {
            const entry = entries[0];
            const header = entry.target;

            if (!entry.isIntersecting) {
                return;
            }

            const navWrapper = document.getElementById('story-nav');

            if (!navWrapper) {
                return;
            }

            const activeNavButton = navWrapper.getElementsByClassName('A_ArticleNavButtonActive')[0];

            if (activeNavButton.innerHTML === header.innerHTML) {
                return;
            }

            activeNavButton.classList.remove('A_ArticleNavButtonActive');

            for (const navButton of navWrapper.getElementsByClassName('A_ArticleNavButton')) {
                if (navButton.innerHTML !== header.innerHTML) {
                    continue;
                }

                navButton.classList.add('A_ArticleNavButtonActive');
            }
        },
        { threshold: [0] },
    );

    observer.observe(header);

    return header;
}

export const createNavLink = (sectionData) => {
    const navWrapper = document.getElementById('story-nav');

    const navButton = document.createElement('button');

    navButton.classList.add('A_ArticleNavButton');

    if (!navWrapper.innerHTML) {
        navButton.classList.add('A_ArticleNavButtonActive');
    }

    navButton.innerHTML = sectionData.title;
    navButton.onclick = (event) => {
        navWrapper
            .getElementsByClassName('A_ArticleNavButtonActive')[0]
            .classList
            .remove('A_ArticleNavButtonActive');

        document.getElementById(sectionData.id).scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        });

        event.target.classList.add('A_ArticleNavButtonActive');
    }


    navWrapper.append(navButton);
}