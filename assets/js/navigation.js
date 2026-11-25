
/* ==================================================
   BYIKI.EXE — NAVIGATION
   ================================================== */

const navToggle = document.querySelector('.nav-toggle');
const mainNavigation = document.querySelector('#main-navigation');

if (navToggle && mainNavigation) {

    function setMenuState(isOpen) {
        navToggle.setAttribute('aria-expanded', String(isOpen));

        navToggle.setAttribute(
            'aria-label',
            isOpen ? 'Cerrar menú' : 'Abrir menú'
        );

        mainNavigation.classList.toggle('is-open', isOpen);
    }

    navToggle.addEventListener('click', () => {
        const isOpen =
            navToggle.getAttribute('aria-expanded') === 'true';

        setMenuState(!isOpen);
    });

    mainNavigation.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            setMenuState(false);
        });
    });

    document.addEventListener('keydown', event => {
        if (
            event.key === 'Escape' &&
            navToggle.getAttribute('aria-expanded') === 'true'
        ) {
            setMenuState(false);
            navToggle.focus();
        }
    });

    const desktopMedia = window.matchMedia('(min-width: 769px)');

    desktopMedia.addEventListener('change', event => {
        if (event.matches) {
            setMenuState(false);
        }
    });
}
