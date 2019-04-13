let icon = document.querySelectorAll('.search-icon')[0];
icon.addEventListener('click', toggleNavmenu);

function toggleNavmenu() {
    console.log('clicked');
    let elNavmenu = document.querySelectorAll('.search-list')[0];
    elNavmenu.classList.toggle('search-list-visible');
}