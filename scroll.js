// scroll.js

document.addEventListener("DOMContentLoaded", function () {
    // Selecciona todos los enlaces del menú
    const links = document.querySelectorAll('nav ul a');

    // Añade un evento de clic a cada enlace
    links.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    // Función para desplazamiento suave
    function smoothScroll(e) {
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Verifica si el enlace apunta a una sección interna o a otra página
        if (targetElement && window.location.pathname === this.pathname) {
            e.preventDefault();
            
            // Utiliza scrollIntoView para el desplazamiento suave
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }
});
