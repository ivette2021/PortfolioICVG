// Agrega este script para manejar el clic en las imágenes si es necesario
document.addEventListener('DOMContentLoaded', function () {
    const imageGrid = document.getElementById('imageGrid');

    imageGrid.addEventListener('click', function (event) {
        if (event.target.tagName === 'IMG') {
            // Aquí puedes manejar la acción al hacer clic en la imagen
            // Por ejemplo, abrir una ventana modal con la imagen en tamaño completo
            // O navegar a una página detallada, etc.
            console.log('Hiciste clic en la imagen:', event.target.alt);
        }
    });
});
