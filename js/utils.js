function formatNumber(number) {
    return number.toLocaleString('de-DE', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}


if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

window.addEventListener('load', function () {
    window.scrollTo(0, 0);

    if (window.location.hash) {
        history.replaceState(null, null, window.location.pathname);
    }
});


function observeScrollPosition() {
    const sections = getSectionsWithLinks();

    window.addEventListener('scroll', () => updateActiveLink(sections));
    updateActiveLink(sections);
}

function getSectionsWithLinks() {
    const navButtons = document.getElementById('nav-buttons');
    return Array.from(navButtons.querySelectorAll('a')).map(link => ({
        link,
        target: document.querySelector(link.getAttribute('href'))
    }));
}

function updateActiveLink(sections) {
    const activeLink = sections.find(({ target }) => isSectionInViewport(target))?.link;

    if (activeLink) {
        setActiveLink(activeLink);
    }
}

function isSectionInViewport(target) {
    const scrollPosition = window.scrollY + 6 * 16;
    const { top, bottom } = target.getBoundingClientRect();
    const targetTop = top + window.scrollY;
    const targetBottom = bottom + window.scrollY;

    return scrollPosition >= targetTop && scrollPosition < targetBottom;
}

function setActiveLink(activeLink) {
    document.querySelectorAll('#nav-buttons a').forEach(link => {
        link.classList.toggle('active', link === activeLink);
    });
}


