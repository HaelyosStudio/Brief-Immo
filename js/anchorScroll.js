export function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    var scrollPosition = section.offsetTop - 150;
    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
    });
}
