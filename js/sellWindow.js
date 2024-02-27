import { ConstManager } from "./mainManager.js";
import { Property } from "./class/property.js";
import { displayProperties } from "./displayProperties.js";

export function toggleWindow() {
    ConstManager.sellButton.addEventListener('click', () => {
        if (ConstManager.sellWindow.classList.contains('hidden')) {
            ConstManager.sellWindow.classList.remove('hidden');
        } else {
            ConstManager.sellWindow.classList.add('hidden');
        }
    });
}

function generateKey() {
    return Math.floor(Math.random() * 9999) + 1;
}

export function saveProperty() {
    const title = ConstManager.title.value;
    const location = ConstManager.location.value;
    const type = ConstManager.type.value;
    const rooms = ConstManager.rooms.value;
    const price = parseInt(ConstManager.price.value);
    const surface = parseInt(ConstManager.surface.value);
    const description = ConstManager.description.value;

    // Get the main image file
    const mainImageFile = ConstManager.mainImage.files[0];

    // Check if any field is empty including the mainImageFile
    if (!title || !location || !type || !rooms || !price || !surface || !description || !mainImageFile) {
        alert('Please fill in all fields before saving the property.');
        return;
    } else {
        alert('Property saved successfully !')
    }

    // Read the main image file as a data URL
    const reader = new FileReader();
    reader.onload = function(event) {
        const mainImageBase64 = event.target.result;

        // Create a new Property object with the main image as Base64
        const property = new Property(title, location, type, rooms, price, surface, description, mainImageBase64);

        // Generate a random key
        const key = generateKey();

        // Store the object in local storage
        localStorage.setItem(key, JSON.stringify(property));
        
        // Log the stored object
        console.log(`Property stored with key ${key}:`, property);

        clearInputFields();

        window.location.reload();
    };
    reader.readAsDataURL(mainImageFile);
}

function clearInputFields() {
    ConstManager.title.value = '';
    ConstManager.location.value = '';
    ConstManager.type.value = '';
    ConstManager.rooms.value = '';
    ConstManager.price.value = '';
    ConstManager.surface.value = '';
    ConstManager.description.value = '';
    ConstManager.mainImage.value = ''; // Clear file input value
}