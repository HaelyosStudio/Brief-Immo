export function initAutocomplete() {
    const locationInput = document.getElementById('locationInput');
    const autocompleteContainer = document.getElementById('autocompleteContainer');
    
    locationInput.addEventListener('input', function() {
        const query = this.value.trim();
        if (!query) {
            autocompleteContainer.innerHTML = '';
            return;
        }
    
        fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${query}`)
            .then(response => response.json())
            .then(data => {
                autocompleteContainer.innerHTML = '';
                data.forEach(item => {
                    if (item.address) {
                        const postalCode = item.address.postcode || '';
                        const city = item.address.city || '';
                        const autocompleteItem = document.createElement('div');
                        autocompleteItem.textContent = `${postalCode} ${city}`;
                        autocompleteItem.addEventListener('click', function() {
                            locationInput.value = `${postalCode} ${city}`;
                            autocompleteContainer.innerHTML = '';
                        });
                        autocompleteContainer.appendChild(autocompleteItem);
                    }
                });
            })
            .catch(error => {
                console.error('Error fetching autocomplete data:', error);
            });
    });
    
    // Close autocomplete when clicking outside
    document.addEventListener('click', function(e) {
        if (!autocompleteContainer.contains(e.target)) {
            autocompleteContainer.innerHTML = '';
        }
    });
    
}
