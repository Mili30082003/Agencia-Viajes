document.addEventListener("DOMContentLoaded", function () {
    function login(event) {
        event.preventDefault(); // Prevenir el envío del formulario

        let mail = document.getElementById("mail").value.trim(); // Obtener el correo ingresado
        let password = document.getElementById("password").value.trim(); // Obtener la contraseña ingresada

        // Comprobar si el usuario es un administrador
        if (mail === "admin@admin.com" && password === "1234") {
            localStorage.setItem("loggedIn", "true"); // Guardar estado de sesión como administrador
            window.location.href = "Administrador.html"; // Redirigir a la página de administrador
            return;
        }

        // Obtener usuarios registrados en localStorage (si existen)
        let users = JSON.parse(localStorage.getItem("users")) || [];

        // Buscar si el usuario ingresado está registrado
        let userExists = users.find(user => user.email === mail && user.password === password);

        if (userExists) {
            localStorage.setItem("loggedIn", "true"); // Guardar estado de sesión
            window.location.href = "producto.html"; // Redirigir a la página del usuario
        } else {
            alert("Usuario no registrado. Por favor, crea una cuenta.");
        }
    }

    document.getElementById("loginForm").addEventListener("submit", login);
});
