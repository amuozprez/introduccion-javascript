let precio = 400000;

let precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

document.getElementById("aumentar").onclick = function () {
  aumentarCantidad();
};

document.getElementById("disminuir").onclick = function () {
  disminuirCantidad();
};

function aumentarCantidad() {
  let elementoCantidad = document.querySelector(".cantidad");
  let cantidad = parseInt(elementoCantidad.textContent);
  elementoCantidad.textContent = cantidad + 1;
  actualizarTotal();
}

function disminuirCantidad() {
  let elementoCantidad = document.querySelector(".cantidad");
  let cantidad = parseInt(elementoCantidad.textContent);
  if (cantidad > 0) {
    elementoCantidad.textContent = cantidad - 1;
    actualizarTotal();
  }
}

function actualizarTotal() {
  let cantidad = parseInt(document.querySelector(".cantidad").textContent);
  let total = precio * cantidad;
  document.querySelector(".valor-total").textContent = total;
}

//parseInt: Esta función de JavaScript se utiliza para convertir una cadena de texto en un número entero.

//.textContent: Esta propiedad se utiliza para obtener el texto contenido dentro de un elemento HTML.

//document.querySelector(selector): Es un método que se utiliza para seleccionar el primer elemento que coincida con un selector CSS especificado.

//document.getElementById(id): Es un método que se utiliza para seleccionar un elemento HTML por su ID.

//innerHTML: Es una propiedad que se utiliza para obtener o establecer el contenido HTML de un elemento.
