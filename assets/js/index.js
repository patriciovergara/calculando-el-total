// Precio base del producto
let precio = 400000;

// Mostrar precio en pantalla
const precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

// Selección de elementos del DOM
const cantidadSpan = document.querySelector(".cantidad");
const totalSpan = document.querySelector(".valor-total");
const botones = document.querySelectorAll("button");

let cantidad = 0;

// Función para actualizar total
function actualizarTotal() {
    totalSpan.innerHTML = precio * cantidad;
}

// Evento para botón +
botones[0].onclick = function () {
    cantidad++;
    cantidadSpan.innerHTML = cantidad;
    actualizarTotal();
};

// Evento para botón -
botones[1].onclick = function () {
    if (cantidad > 0) {
        cantidad--;
        cantidadSpan.innerHTML = cantidad;
        actualizarTotal();
    }
};