document.addEventListener('DOMContentLoaded', function () {
    function scrollDown() {
        // Desplazar hacia abajo
        window.scrollBy(0, window.innerHeight);
    }

    function scrollUp() {
        // Desplazar hacia arriba
        window.scrollBy(0, -window.innerHeight);
    }

    // Manejar el desplazamiento cuando se llega al final de la página
    window.onscroll = function () {
        var scrollHeight = Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.offsetHeight,
            document.body.clientHeight,
            document.documentElement.clientHeight
        );

        var currentScroll = window.scrollY + window.innerHeight;

        // Obtener el elemento de desplazamiento
        var scrollElement = document.getElementById('scroll');

        // Mostrar o ocultar el elemento de desplazamiento
        if (currentScroll >= scrollHeight) {
            // Si se llega al final de la página
            scrollElement.style.display = 'none';
            // Cambiar el cursor a un círculo
            document.body.style.cursor = 'url("path/to/your/circle-cursor.png"), auto';
        } else {
            // Si no se ha llegado al final
            scrollElement.style.display = 'block';
            document.body.style.cursor = 'default';
        }
    };

    // Volver al principio cuando se hace clic en el elemento de desplazamiento
    document.getElementById('scroll').onclick = scrollDown;

    // Desplazar hacia arriba cuando el mouse se encuentra sobre el elemento de desplazamiento
    document.getElementById('scroll').onmouseover = scrollUp;
});
