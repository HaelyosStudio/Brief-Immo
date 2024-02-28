import { burgerButton } from "./burger.js";
import { windowScroll } from "./windowScroll.js";
import { fileReader } from "./fileReader.js";
import { toggleWindow, saveProperty, hideRooms } from "./sellWindow.js";
import { displayProperties } from "./displayProperties.js";

burgerButton();
windowScroll();
fileReader();
toggleWindow();
displayProperties();
hideRooms();

document.getElementById('saveButton').addEventListener('click', saveProperty);
