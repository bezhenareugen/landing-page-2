(function() {
    const header = document.getElementById('header__scroll');

    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header__active');
        } else {
            header.classList.remove('header__active');
        }
    }
}());

//burger handler

(function() {
    const burgerItem = document.getElementById('burger');
    const menu = document.getElementById('header-navigation');
    const closeItem = document.querySelector('.header__nav-close');

    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__nav-active');

    });
    closeItem.addEventListener('click', () => {
        menu.classList.remove('header__nav-active');

    });
}());