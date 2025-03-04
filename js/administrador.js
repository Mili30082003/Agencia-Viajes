let viajes = JSON.parse(localStorage.getItem("viajes")) || [];
let editando = false;

function renderizarGrilla() {
    const grilla = document.getElementById("grilla-viajes");
    grilla.innerHTML = "";
    grilla.classList.add("row", "row-cols-1", "row-cols-md-3", "g-4");         
    viajes.forEach((viaje, index) => {
        grilla.innerHTML += `
            <section class="col">
                <div class="card border-0 shadow-sm">
                    <img src="${viaje.imagen}" class="card-img-top" alt="Paquete Florianópolis">
                    <div class="card-body">
                        <span class="badge bg-success mb-2">PAQUETE</span>
                        <h5 class="card-title text-dark">${viaje.destino}</h5>
                        <p class="card-text text-muted d-flex align-items-center">
                            <i class="bi bi-geo-alt-fill me-1"></i> ${viaje.descripcion}
                        </p>
                        <h6 class="text-dark">Precio por pasajero</h6>
                        <p class="text-success fw-bold mb-1">${viaje.precio}</p>
                    </div>
                </div>
            </section>
        `;
    });
}

function renderizarTabla() {
    const tabla = document.querySelector("#tabla-viajes tbody");
    tabla.innerHTML = "";
    viajes.forEach((viaje, index) => {
        tabla.innerHTML += `
            <tr>
                <td>${viaje.destino}</td>
                <td>${viaje.descripcion}</td>
                <td>${viaje.precio}</td>
                <td><img src="${viaje.imagen}" width="100"></td>
                <td>
                    <button class="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#modalViaje" onclick="editarViaje(${index})">Editar</button>
                    <button class="btn btn-danger btn-sm" onclick="eliminarViaje(${index})">Eliminar</button>
                </td>
            </tr>
        `;
    });
    localStorage.setItem("viajes", JSON.stringify(viajes));
}

function abrirModal() {
    document.getElementById("indiceEdicion").value = "";
    document.getElementById("destino").value = "";
    document.getElementById("descripcion").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("imagen").value = "";
    editando = false;
}

function guardarViaje() {
    const destino = document.getElementById("destino").value;
    const descripcion = document.getElementById("descripcion").value;
    const precio = document.getElementById("precio").value;
    const imagen = document.getElementById("imagen").value;
    const indice = document.getElementById("indiceEdicion").value;
    
    if (destino && descripcion && precio && imagen) {
        if (editando) {
            viajes[indice] = { destino, descripcion, precio, imagen };
        } else {
            viajes.push({ destino, descripcion, precio, imagen });
        }
        renderizarGrilla();
        renderizarTabla();
        document.querySelector("#modalViaje .btn-close").click();
    }
}

function editarViaje(index) {
    document.getElementById("indiceEdicion").value = index;
    document.getElementById("destino").value = viajes[index].destino;
    document.getElementById("descripcion").value = viajes[index].descripcion;
    document.getElementById("precio").value = viajes[index].precio;
    document.getElementById("imagen").value = viajes[index].imagen;
    editando = true;
}

function eliminarViaje(index) {
    if (confirm("¿Seguro que deseas eliminar este viaje?")) {
        viajes.splice(index, 1);
        renderizarGrilla();
        renderizarTabla();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname === "/index.html" || window.location.pathname === "/") {
        renderizarGrilla(); // Solo se ejecuta si estamos en index.html
    }
    renderizarTabla();
});
