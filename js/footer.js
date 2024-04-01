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
          // Crear un elemento link para el archivo CSS
          var linkElement = document.createElement('link');
          linkElement.rel = 'stylesheet';
          linkElement.href = './css/footer.css'; // Reemplaza con la ruta correcta de tu archivo CSS
  
          // Añadir el enlace al head del documento
          document.head.appendChild(linkElement);
    };
    xhr.open("GET", "./html/footer.html", true);
    xhr.send();
});
