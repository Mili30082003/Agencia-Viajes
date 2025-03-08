

document.addEventListener("DOMContentLoaded", function () {
    let reservasContainer = document.getElementById("reservasContainer");
    let reservas = JSON.parse(localStorage.getItem("reservas")) || [];

    if (reservas.length === 0) {
      reservasContainer.innerHTML = "<p class='text-center'>No tienes reservas aún.</p>";
    } else {
      reservas.forEach((reserva, index) => {
        let card = `
          <div class="col-md-4">
            <div class="card mb-3 shadow-sm">
              <div class="card-body">
                <h5 class="card-title">${reserva.nombre}</h5>
                <p class="card-text"><strong>Email:</strong> ${reserva.email}</p>
                <p class="card-text"><strong>Check-in:</strong> ${reserva.checkin}</p>
                <p class="card-text"><strong>Check-out:</strong> ${reserva.checkout}</p>
                <p class="card-text"><strong>Personas:</strong> ${reserva.personas}</p>
                <button class="btn btn-danger btn-sm" onclick="eliminarReserva(${index})">Cancelar</button>
              </div>
            </div>
          </div>`;
        reservasContainer.innerHTML += card;
      });
    }
  });

  function eliminarReserva(index) {
    let reservas = JSON.parse(localStorage.getItem("reservas")) || [];
    reservas.splice(index, 1);
    localStorage.setItem("reservas", JSON.stringify(reservas));
    location.reload(); // Recarga la página para actualizar la lista de reservas
  }