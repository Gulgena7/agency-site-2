'use strict';
const menuWrapper = document.querySelector('.popap-menu');
const menyButton = document.querySelector('.popap-menu-button');
const menuList = document.querySelector('.popap-menu-list');

function showMenu () {
    menuList.classList.toggle ('hide');
}

menyButton.addEventListener('click',showMenu);

function closeMenu(evt) {
    let insideMenu = menuWrapper.contains (evt.target);

    if (!insideMenu) {menuList.classList.add('hide');
    }
}

document.addEventListener('click',closeMenu);

