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

          var path = window.location.pathname;
          var page = path.split("/").pop();
          
          if (page.includes("index")){
              linkElement.href = './css/header.css'; // Reemplaza con la ruta correcta de tu archivo CSS    
              document.head.appendChild(linkElement);
              xhr.open("GET", "./html/footer.html", true);
          }
  
          else{
              linkElement.href = '../css/header.css'; // Reemplaza con la ruta correcta de tu archivo CSS
              document.head.appendChild(linkElement);
              xhr.open("GET", "../html/footer.html", true);
          }
          // Obtenemos la URL del script actual
          
  
          // Añadir el enlace al head del documento
          
    };
    xhr.send();
});
