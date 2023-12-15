document.addEventListener('DOMContentLoaded', function () {
    const projects = document.querySelectorAll('.project');

    projects.forEach(project => {
        project.addEventListener('click', function () {
            // Aquí puedes redirigir a la página de detalles del proyecto
            // por ejemplo, window.location.href = 'detalles_proyecto.html';
        });
    });
});