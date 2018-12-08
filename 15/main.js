(function () {
    document.querySelector('.sandwich').onclick = function() {
        this.classList.toggle('sandwich--active');
        document.querySelector('.header-nav__list').classList.toggle('header-nav__list--active');
    }
})();
