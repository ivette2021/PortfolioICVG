// Cargar el contenido del archivo y agregarlo al elemento con id "navigation-placeholder"
var navigationPlaceholder = document.getElementById('navigation-placeholder');
var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        navigationPlaceholder.innerHTML = xhr.responseText;
        
        // Crear un elemento link para el archivo CSS
        var linkElement = document.createElement('link');
        linkElement.rel = 'stylesheet';
        linkElement.href = '../css/header.css'; // Reemplaza con la ruta correcta de tu archivo CSS

        // Añadir el enlace al head del documento
        document.head.appendChild(linkElement);

        // Insertar el contenido debajo del encabezado
        var div = document.createElement('div');
        div.innerHTML = xhr.responseText;
        // ... tu lógica para insertar el contenido
    }
};

xhr.open('GET', navigationPlaceholder.getAttribute('data-source'), true);
xhr.send();
