// Mostrar productos en el carrito
const mostrarProductosCarrito = () => {
	const listaCarrito = document.getElementById("carrito-productos");
	listaCarrito.innerHTML = ""; // Limpiamos la lista antes de agregar los productos nuevamente

	const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

	carrito.forEach((producto) => {
		const li = document.createElement("li");
		li.textContent = `${producto.nombre} - Precio: $${producto.precio} - Cantidad: ${producto.cantidad}`;
		listaCarrito.appendChild(li);
	});

	const nroTotal = document.getElementById("nro-total");
	nroTotal.textContent = `$${getTotalCarrito()}`;
};

// Calcular el total
const getTotalCarrito = () => {
	const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
	return carrito.reduce(
		(total, producto) => total + producto.precio * producto.cantidad,
		0
	);
};

const vaciarCarrito = () => {
	localStorage.removeItem("carrito");
	mostrarProductosCarrito();
};

const btnVaciarCarrito = document.getElementById("btn-cart-vaciar");

btnVaciarCarrito.addEventListener("click", vaciarCarrito);

// Llamar a la función mostrarProductosCarrito después de cargar la página
mostrarProductosCarrito();
