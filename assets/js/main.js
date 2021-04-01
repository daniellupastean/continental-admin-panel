const menuBtn = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
const dashboard = document.querySelector('.content');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        sidebar.classList.add('shown');
        dashboard.style.filter = "brightness(40%)";
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        sidebar.classList.remove('shown');
        dashboard.style.filter = "brightness(100%)";
        menuOpen = false;
    }
});