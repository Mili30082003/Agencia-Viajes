document.addEventListener("DOMContentLoaded", function () {
    let btnReservar = document.getElementById("btnReservar");
    let reservaForm = document.getElementById("reservaForm");

    // Al hacer clic en el botón "Reservar"
    btnReservar.addEventListener("click", function (event) {
        event.preventDefault();
        // Mostrar el modal de reserva
        new bootstrap.Modal(document.getElementById("reservaModal")).show();
    });

    // Al enviar el formulario de reserva
    reservaForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Obtener los datos del formulario
        let reserva = {
            nombre: document.getElementById("nombre").value,
            email: document.getElementById("email").value,
            checkin: document.getElementById("checkin").value,
            checkout: document.getElementById("checkout").value,
            personas: document.getElementById("personas").value,
            comentarios: document.getElementById("comentarios").value
        };

        // Obtener las reservas guardadas en el LocalStorage
        let reservas = JSON.parse(localStorage.getItem("reservas")) || [];

        // Agregar la nueva reserva a las reservas existentes
        reservas.push(reserva);

        // Guardar las reservas en el LocalStorage
        localStorage.setItem("reservas", JSON.stringify(reservas));

        // Redirigir a la página de reservas
        window.location.href = "reservas.html"; 
    });
});

// Evento para el ícono de corazón (favoritos)
document.getElementById("icono-favorito").addEventListener("click", function() {
    this.classList.toggle("text-danger");  
    alert("¡Este departamento ha sido agregado a tus favoritos!");
});

// Evento para el ícono de compartir
document.getElementById("icono-compartir").addEventListener("click", function() {
    
    let url = encodeURIComponent(window.location.href); 
    let mensaje = encodeURIComponent("Mira este increíble departamento: ");
    

    let facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${mensaje}`;
    window.open(facebookUrl, "_blank");

    alert("¡Compartido en redes sociales!");
});
