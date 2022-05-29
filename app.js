const btnMobile = documentById('btn-mobile');

function toggleMenu() {
    const nav = documentById('nav');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
