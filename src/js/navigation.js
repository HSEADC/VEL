const initHeader = () => {
    const currentPath = window.location.pathname
        .toLowerCase()
        .replace('/', '')
        .replace('.html', '');

    document.querySelectorAll('a.A_PointMenu').forEach(
        (element) => {
            const navPath = element.getAttribute('href').replace('/', '').replace('.html', '').toLowerCase();

            if ((!currentPath && navPath === 'index')
                || currentPath.includes(navPath)
                || currentPath.includes(navPath.substring(0, navPath.length - 1))
            ) {
                element.classList.add('A_ActiveNav');
            }
        }
    )
}

document.addEventListener('DOMContentLoaded', initHeader)

document.getElementById('back-button')?.addEventListener('click', () => {
    window.location = 'index.html';
})