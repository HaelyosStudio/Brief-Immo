import { burgerButton } from "./burger.js";
import { windowScroll } from "./windowScroll.js";
import { fileReader } from "./fileReader.js";
import { toggleWindow, saveProperty, hideRooms } from "./sellWindow.js";
import { displayProperties } from "./displayProperties.js";
import { applyFilter } from "./applyFilter.js";
import { removeFilter } from "./removeFilter.js";
import { scrollToSection } from "./anchorScroll.js";
import { ConstManager } from "./mainManager.js";

burgerButton();
windowScroll();
fileReader();
toggleWindow();
displayProperties();
hideRooms();

ConstManager.applyFilterButton.addEventListener('click', applyFilter);

ConstManager.removeFilterButton.addEventListener('click', removeFilter);

ConstManager.saveButton.addEventListener('click', saveProperty);

ConstManager.homeButton.addEventListener('click', function() {
    window.location.reload();
})

ConstManager.rentButton.addEventListener('click', function() {
    alert('WORK IN PROGRESS');
})

ConstManager.searchButton.addEventListener('click', function() {
    scrollToSection('propertiesAnchor');
});