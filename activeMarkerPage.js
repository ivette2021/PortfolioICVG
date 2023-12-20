document.addEventListener("DOMContentLoaded", function () {
    // Obtén la página actual y busca el enlace correspondiente
    var currentPage = window.location.pathname.split("/").pop();
    var navLinks = document.querySelectorAll('nav a');

    // Recorre los enlaces y activa el marcador en la página actual
    navLinks.forEach(function (link) {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
            updateMarker(link);
        }
    });
});

function setActive(link) {
    // Elimina la clase 'active' de todos los enlaces
    document.querySelectorAll('nav a').forEach(function (a) {
        a.classList.remove('active');
    });

    // Añade la clase 'active' al enlace clicado
    link.classList.add('active');

    // Actualiza la posición del marcador
    updateMarker(link);
}

function updateMarker(link) {
    // Mueve el marcador al enlace indicado
    var marker = link.parentElement.querySelector('#marker');
    marker.style.left = link.offsetLeft + 'px';
    marker.style.width = link.offsetWidth + 'px';
}
