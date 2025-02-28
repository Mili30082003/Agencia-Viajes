document.addEventListener("DOMContentLoaded", function () {
    // Función para registrar un nuevo usuario
    function register(event) {
        event.preventDefault(); // Prevenir que el formulario se envíe de forma tradicional

        let email = document.getElementById("email").value; // Obtener el correo ingresado
        let password = document.getElementById("password").value; // Obtener la contraseña ingresada

        // Verificar si ambos campos no están vacíos
        if (email && password) {
            // Guardar los datos del nuevo usuario en localStorage
            let users = JSON.parse(localStorage.getItem("users")) || []; // Obtener usuarios existentes
            // Agregar el nuevo usuario
            users.push({ email, password });
            localStorage.setItem("users", JSON.stringify(users)); // Guardar la lista de usuarios

            alert("Registro exitoso. Ahora puedes iniciar sesión.");
            window.location.href = "login.html"; // Redirigir a la página de login
        } else {
            alert("Por favor, ingresa un correo y una contraseña."); // Mostrar un mensaje si algún campo está vacío
        }
    }

    // Asociar el evento 'submit' del formulario de registro a la función de registro
    document.getElementById("registerForm").addEventListener("submit", register);
});
