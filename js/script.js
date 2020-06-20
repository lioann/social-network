const menuBth = document.querySelector('.m-menu');
const menu = document.querySelector('.menu-sidebar');

menuBth.addEventListener('click', function ( ){
    menu.classList.toggle('active');
});