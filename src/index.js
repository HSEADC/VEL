import './stylesheets/reset.scss';
import './stylesheets/vars.scss';
import './stylesheets/fonts.scss';
import './stylesheets/general.scss';
import './stylesheets/main.scss'

const initHeader = () => {
    const currentPath = window.location.pathname.toLowerCase().replace('/', '').replace('vell');

    document.querySelectorAll('.nav-button a').forEach(
        (element) => {
            const navPath = element.getAttribute('href').replace('/', '').replace('.html', '').toLowerCase();

            if ((currentPath && navPath === 'index.html') || currentPath.startsWith(navPath)) {
                element.parentNode.classList.add('active');
            }
        }
    )
}

document.addEventListener('DOMContentLoaded', initHeader)

document.getElementById('back-button')?.addEventListener('click', () => {
    window.history.back();
})