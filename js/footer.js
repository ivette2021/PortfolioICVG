document.addEventListener("DOMContentLoaded", function () {

    var path = window.location.pathname;
    var page = path.split("/").pop();
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

         
          
          if (page.includes("index")){
              linkElement.href = './css/header.css'; // Reemplaza con la ruta correcta de tu archivo CSS    
              document.head.appendChild(linkElement);
          }
  
          else{
              linkElement.href = '../css/header.css'; // Reemplaza con la ruta correcta de tu archivo CSS
              document.head.appendChild(linkElement);
          }
          // Obtenemos la URL del script actual
          
  
          // Añadir el enlace al head del documento
          
    };
    if (page.includes("index")){
    xhr.open("GET", "./html/footer.html", true);
    }
    else{
        xhr.open("GET", "../html/footer.html", true);
    }
    xhr.send();
});
