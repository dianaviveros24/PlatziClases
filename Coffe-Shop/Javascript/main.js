const navbarMenuEmail = document.querySelector('.navbar-email');
const burguerMenuIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-car');

const mobileMenu = document.querySelector('.mobile-menu');
const desktopMenu = document.querySelector('.desktop-menu');
const aside = document.querySelector('.product-detail');


navbarMenuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenuIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);


function toggleDesktopMenu() {
    const isAsideOpen = !aside.classList.contains('inactive');
    
    if (isAsideOpen){
        aside.classList.add('inactive');
    } 
    
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideOpen = !aside.classList.contains('inactive');
    
    if (isAsideOpen){
        aside.classList.add('inactive');
    }
    
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const isMobilepMenuOpen = !mobileMenu.classList.contains('inactive');
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');

    if (isMobilepMenuOpen){
        // Si el mobileMenu esta abierto y selecciona el aside, se pone la clase inactive para que se cierre
        mobileMenu.classList.add('inactive');
    } else if (isDesktopMenuOpen){
        desktopMenu.classList.add('inactive');
    }
    
    aside.classList.toggle('inactive');
}
