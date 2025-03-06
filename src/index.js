import './stylesheets/reset.scss';
import './stylesheets/vars.scss';
import './stylesheets/fonts.scss';
import './stylesheets/general.scss';
import './stylesheets/main.scss'

import './stylesheets/components/01_Quarks.scss';
import './stylesheets/components/02_Atoms.scss';
import './stylesheets/components/03_Molecules.scss';
import './stylesheets/components/04_Wrappers.scss';
import './stylesheets/components/05_Collections.scss';
import './stylesheets/components/06_Organisms.scss';
import './stylesheets/components/07_SuperOrganisms.scss';

const initHeader = () => {
    const currentPath = window.location.pathname
        .toLowerCase()
        .replace('/', '')
        .replace('.html', '');

    document.querySelectorAll('.nav-button a').forEach(
        (element) => {
            const navPath = element.getAttribute('href').replace('/', '').replace('.html', '').toLowerCase();

            if ((!currentPath && navPath === 'index') || currentPath.includes(navPath)) {
                element.parentNode.classList.add('active');
            }
        }
    )
}

document.addEventListener('DOMContentLoaded', initHeader)

document.getElementById('back-button')?.addEventListener('click', () => {
    window.location = 'index.html';
})