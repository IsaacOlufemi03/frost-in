const menu = document.querySelector('#menu');

menu.addEventListener('click', menuClick);

function menuClick (e) {
    e.preventDefault();

    const menuList = document.getElementById('menu-content');
    if (menuList.className == 'channel-content-off') {
        menuList.className = 'channel-content-on';
    } else {
        menuList.className = 'channel-content-off';
    };
};    