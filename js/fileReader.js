export function fileReader() {
    const fileInput = document.getElementById('mainImage');

    fileInput.addEventListener('change', function(event) {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function () {
                const imagePreviewBox = document.querySelector('.imagePreviewBox');

                imagePreviewBox.style.backgroundImage = `url('${reader.result}')`;
                imagePreviewBox.style.backgroundSize = 'cover';
                imagePreviewBox.style.backgroundPosition = 'center';
            };

            reader.readAsDataURL(file);
        }
    });
}
