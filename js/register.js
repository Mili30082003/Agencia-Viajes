document.addEventListener("DOMContentLoaded", function () {
    // Función para registrar un nuevo usuario
    function register(event) {
        event.preventDefault(); 

        let email = document.getElementById("email").value; // 1 - Obtengo el correo ingresado
        let password = document.getElementById("password").value; // 2 -Obtengo la contraseña ingresada

        // 3 - Verifico si ambos campos no están vacíos
        if (email && password) {
            // 4 - Guardo los datos del nuevo usuario en localStorage
            let users = JSON.parse(localStorage.getItem("users")) || []; 
            // 5 -  Agrego el nuevo usuario
            users.push({ email, password });
            localStorage.setItem("users", JSON.stringify(users)); 
            alert("Registro exitoso. Ahora puedes iniciar sesión.");
            window.location.href = "login.html"; 
        } else {
            alert("Por favor, ingresa un correo y una contraseña."); 
        }
    }

    document.getElementById("registerForm").addEventListener("submit", register);
});
