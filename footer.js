document.addEventListener("DOMContentLoaded", function () {
    // Obtener el contenedor del footer en la página
    const footerContainer = document.getElementById("footer-placeholder");

    // Crear una nueva solicitud para cargar el footer.html
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            // Insertar el contenido del footer.html en el contenedor
            footerContainer.innerHTML = this.responseText;
        }
    };
    xhr.open("GET", "footer.html", true);
    xhr.send();
});
