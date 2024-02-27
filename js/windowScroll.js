export function windowScroll() {
    console.log('windowScroll Script loaded!');
    window.addEventListener('scroll', function() {
        let scrollPosition = window.scrollY;
        let parallax = document.querySelector('.landingPageImg');
        let parallaxFilter = document.querySelector('.landingPageFilter');
        parallax.style.backgroundPosition = 'center ' + (-scrollPosition * 0.75) + 'px';
        parallaxFilter.style.backgroundPosition = 'center ' + (-scrollPosition * 0.75) + 'px';
    });
    
    function handleScroll() {
        const navBar = document.querySelector('.siteHeader');
        const navLinks = document.querySelectorAll('.navButton');
        const burgerLines = document.querySelectorAll('.burgerLine');
        const sellSection = document.querySelector('.sellSectionBox');
    
        if (window.scrollY > 100) {
            navBar.classList.add("scrolled");
            navBar.classList.add("outerShadow");
            sellSection.style.borderRadius = '0px 0px 15px 15px';
            navLinks.forEach(function(navLink) {
                navLink.classList.add('textScrolled');
            });
            burgerLines.forEach(function(burgerLine) {
                burgerLine.classList.add('burgerLineScrolled');
            });
        } else {
            navBar.classList.remove("scrolled");
            navBar.classList.remove("outerShadow");
            sellSection.style.borderRadius = '15px';
            navLinks.forEach(function(navLink) {
                navLink.classList.remove('textScrolled');
            });
            burgerLines.forEach(function(burgerLine) {
                burgerLine.classList.remove('burgerLineScrolled');
            });
        }
    }
    
    document.addEventListener('DOMContentLoaded', function() {
        handleScroll();
    });
    
    window.addEventListener('scroll', function() {
        handleScroll();
    });
}