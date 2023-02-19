document.querySelectorAll('.header__link').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();

        const href = item.getAttribute('href');

        const scrollTarget = document.querySelector(href);

        const elementPosition = scrollTarget.getBoundingClientRect().top;

        window.scrollBy({
            top: elementPosition,
            behavior: 'smooth'
        });
    });
});