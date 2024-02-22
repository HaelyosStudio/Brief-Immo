export function burgerButton() {
    console.log('burgerButton Script loaded!');
    const burgerMenu = document.querySelector('.burgerMenu');
    const navLinks = document.querySelector('.navLinks');
    const searchButton = document.querySelector('.searchButton');
    
    burgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('enable');
        searchButton.classList.toggle('disable');
    });
}
