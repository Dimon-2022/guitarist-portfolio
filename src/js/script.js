window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav-menu'),
    menuItem = document.querySelectorAll('.nav-menu__list-item'),
    gamburger = document.querySelector('.gamburger');

    gamburger.addEventListener('click', () => {
        gamburger.classList.toggle('gamburger_active');
        menu.classList.toggle('nav-menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            gamburger.classList.toggle('gamburger_active');
            menu.classList.toggle('nav-menu_active');
        })
    })
})