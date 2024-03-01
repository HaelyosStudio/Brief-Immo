export function removeFilter() {
    document.getElementById("location").value = "";
    document.getElementById("minPrice").value = "";
    document.getElementById("maxPrice").value = "";
    document.getElementById("type").value = "";
    document.getElementById("minSurface").value = "";
    document.getElementById("maxSurface").value = "";

    applyFilter();
}
