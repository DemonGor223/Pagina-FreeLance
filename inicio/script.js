// Esperar a que todo el contenido del DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    // Función para manejar el evento click en el botón "explorar"
    document.querySelector('.explorar').addEventListener('click', function() {
        // Simular la exploración usando una alerta
        alert("¡Bienvenido a la sección de exploración!");
        // Aquí se podría redirigir a otra página o cargar contenido dinámicamente.
        // window.location.href = 'explorar.html'; // Descomentar para redirigir
    });

    // Abrir el modal al hacer clic en "Registrarse"
    const modal = document.getElementById('modal');
    const registrarseBtn = document.getElementById('registrarseBtn');
    const closeModal = document.querySelector('.close');

    registrarseBtn.addEventListener('click', function() {
        modal.classList.remove('hidden');
    });

    // Cerrar el modal
    closeModal.addEventListener('click', function() {
        modal.classList.add('hidden');
    });

    // Manejar el envío del formulario
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Aquí se puede agregar lógica para autenticar al usuario
        if (username === "admin" && password === "1234") {
            alert("¡Inicio de sesión exitoso!");
            modal.classList.add('hidden');
            // Redirigir a la página principal o dashboard
            // window.location.href = 'dashboard.html'; // Descomentar para redirigir
        } else {
            alert("Usuario o contraseña incorrectos.");
        }
    });
});