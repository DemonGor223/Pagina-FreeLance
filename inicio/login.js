document.addEventListener("DOMContentLoaded", function() {
    // Obtener los botones
    const btnRegister = document.getElementById("btnRegister");
    const btnLogin = document.getElementById("btnLogin");
    const wrapperLogin = document.querySelector(".wraperlogin");
    const wrapperRegister = document.querySelector(".wraperregister");

    // Evento para mostrar el formulario de registro
    btnRegister.addEventListener("click", function() {
        wrapperLogin.style.display = "none"; // Oculta el formulario de inicio de sesión
        wrapperRegister.style.display = "block"; // Muestra el formulario de registro
    });

    // Evento para mostrar el formulario de inicio de sesión
    btnLogin.addEventListener("click", function() {
        wrapperRegister.style.display = "none"; // Oculta el formulario de registro
        wrapperLogin.style.display = "block"; // Muestra el formulario de inicio de sesión
    });
});