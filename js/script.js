import { burgerButton } from "./burger.js";
import { windowScroll } from "./windowScroll.js";
import { fileReader } from "./fileReader.js";
import { toggleWindow, saveProperty } from "./sellWindow.js";
import { displayProperties } from "./displayProperties.js";

burgerButton();
windowScroll();
fileReader();
toggleWindow();
displayProperties();

document.getElementById('saveButton').addEventListener('click', saveProperty);
