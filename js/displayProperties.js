export function displayProperties() {
    const propertiesBox = document.querySelector('.propertiesBox');

    // Iterate through each key in local storage
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const propertyData = JSON.parse(localStorage.getItem(key));

        // Create a propertyBox element
        const propertyBox = document.createElement('div');
        propertyBox.classList.add('propertyBox', 'outerShadow');
        propertyBox.id = key;

        // Set the inner HTML of the propertyBox with property data
        propertyBox.innerHTML = `
            <img class="propertyImg" src="${propertyData.mainImage}" alt="Property Image">
            <div class="propertyInfos">
                <div class="titlePrice">
                    <h3>${propertyData.title}</h3>
                    <h3>${propertyData.price}€</h3>
                </div>
                <div class="details">
                    <h4 class="letterUpper">${propertyData.type}</h4>
                    <h4>${propertyData.surface} m²</h4>
                </div>
                <h4 class="locationText">${propertyData.location}</h4>
                <div class="descriptionBox">
                    <h3>Description</h3>
                    <p class="descTextBox scroller">${propertyData.description}</p>
                </div>
            </div>
        `;

        // Append the propertyBox to the propertiesBox
        propertiesBox.appendChild(propertyBox);
    }
}
