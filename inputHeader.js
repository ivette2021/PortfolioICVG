
    // Cargar el contenido del archivo y agregarlo al elemento con id "navigation-placeholder"
    var navigationPlaceholder = document.getElementById('navigation-placeholder');
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            navigationPlaceholder.innerHTML = xhr.responseText;
            var div = document.createElement('div');
            div.innerHTML = xhr.responseText;
                // Insertar el contenido debajo del encabezado
                var header = document.querySelector('header');
                header.parentNode.insertBefore(div, header.nextSibling);
                var newTitle = div.querySelector('title');
                if (newTitle) {
                    document.title = newTitle.textContent;
                }
        }
    };

    xhr.open('GET', navigationPlaceholder.getAttribute('data-source'), true);
    xhr.send();
