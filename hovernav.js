function setActive(element) {
    // Eliminar la clase 'active' de todos los elementos del menú
    const menuItems = document.querySelectorAll('nav  a');
    menuItems.forEach(item => item.classList.remove('active'));

    // Agregar la clase 'active' al elemento clicado
    element.classList.add('active');
}
