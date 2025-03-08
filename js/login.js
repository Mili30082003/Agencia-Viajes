document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const mail = document.getElementById("mail").value.trim();
        const password = document.getElementById("password").value.trim();

        // Comprobación simple de admin
        if (mail === "admin@admin.com" && password === "1234") {
            localStorage.setItem("usuario", "admin");  
            alert("Bienvenido, administrador.");
            window.location.href = "Administrador.html";  
            return;
        }

        // Obtener usuarios registrados desde localStorage
        let users = JSON.parse(localStorage.getItem("users")) || [];

        // Verificar si el usuario existe
        let userExists = users.find(user => user.email === mail && user.password === password);

        if (userExists) {
            localStorage.setItem("usuario", userExists.email);  
            alert(`Bienvenido, ${userExists.email}!`);
            window.location.href = "producto.html";  
        } else {
            alert("Usuario no registrado. Por favor, crea una cuenta.");
        }
    });
});
