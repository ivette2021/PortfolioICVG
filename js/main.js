document.addEventListener('DOMContentLoaded', function() {
    var options = {
        strings: ["Android Developer", "Automation and Robotics Engineer", "UX Designer"],
        typeSpeed: 50,  // Velocidad de escritura
        backSpeed: 30,  // Velocidad de retroceso
        backDelay: 1000,  // Retraso antes de retroceso
        startDelay: 2000,  // Retraso antes de comenzar
        loop: true,  // Repetir
        showCursor: true,  // Mostrar cursor
        cursorChar: '|',  // Carácter del cursor
    };

    var typed = new Typed('#typed-output', options);//typed-output es el id que se llama en el header
});
