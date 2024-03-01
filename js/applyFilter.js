export function applyFilter() {
    const location = document.getElementById("location").value.trim().toLowerCase();
    const minPrice = parseFloat(document.getElementById("minPrice").value);
    const maxPrice = parseFloat(document.getElementById("maxPrice").value);
    const type = document.getElementById("type").value.trim().toLowerCase();
    const minSurface = parseFloat(document.getElementById("minSurface").value);
    const maxSurface = parseFloat(document.getElementById("maxSurface").value);

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const propertyData = JSON.parse(localStorage.getItem(key));

        const locationMatches = !location || propertyData.location.toLowerCase().includes(location);
        const priceMatches = (!minPrice || propertyData.price >= minPrice) && (!maxPrice || propertyData.price <= maxPrice);
        const typeMatches = !type || propertyData.type.toLowerCase() === type;
        const minSurfaceMatches = !minSurface || propertyData.surface >= minSurface;
        const maxSurfaceMatches = !maxSurface || propertyData.surface <= maxSurface;

        const displayProperty = locationMatches && priceMatches && typeMatches && minSurfaceMatches && maxSurfaceMatches;

        const propertyElement = document.getElementById(key);

        if (propertyElement) {
            propertyElement.style.display = displayProperty ? "block" : "none";
        }
    }

    if (location || minPrice || maxPrice || type || minSurface || maxSurface) {
        removeFilterButton.style.display = "inline-block";
    } else {
        removeFilterButton.style.display = "none";
    }
}
