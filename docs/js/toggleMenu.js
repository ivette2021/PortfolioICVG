// Función para toggle del menú
function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
    const menuToggle = document.querySelector('.menu-toggle');
    menuToggle.classList.toggle('active');
}

// Función para activar enlace
function setActive(element) {
    const headerLinks = document.querySelectorAll('.header-link');
    headerLinks.forEach(link => {
        link.classList.remove('active');
    });
    element.classList.add('active');
}

// Verificar tamaño de pantalla y mostrar toggle en pantallas pequeñas
function checkToggleVisibility() {
    const menuToggle = document.querySelector('.menu-toggle');
    if (window.innerWidth <= 768) {
        menuToggle.style.display = 'block';
    } else {
        menuToggle.style.display = 'none';
    }
}

// Ejecutar la función al cargar y redimensionar la ventana
window.onload = checkToggleVisibility;
window.onresize = checkToggleVisibility;
