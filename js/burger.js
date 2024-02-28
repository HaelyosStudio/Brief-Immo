import { ConstManager } from "./mainManager.js";

export function burgerButton() {
    console.log('burgerButton Script loaded!');

    ConstManager.burgerMenu.addEventListener('click', () => {
        ConstManager.navLinks.classList.toggle('enable');
        ConstManager.searchButton.classList.toggle('disable');
    });
}
