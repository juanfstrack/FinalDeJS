let carrito = [];
let procesadores = [];

const addProductoCarrito = (e) => {
    // Filtramos el producto seleccionado y lo agregamos al carrito
    const selected = procesadores.filter(procesador=>procesador.id == e.target.id);
    const exist = carrito.find(producto=>producto.id == selected[0].id);
    if(!exist){
        const nuevoProducto = {
            ...selected[0],
            cantidad: 1,
        }
        carrito.push(nuevoProducto);
    }else{
        const index = carrito.findIndex(producto=>producto.id == selected[0].id);
        carrito[index].cantidad++;
    }

    // Actializamos en el DOM
    const cant = document.getElementById("cantidad");
    cant.innerText = carrito.length;
    Toastify({
        text: "Se ha agregado el producto al carrito correctamente!",
        duration: 3000,
        destination: "http://127.0.0.1:5500/pages/carrito.html",
        newWindow: false,
        close: false,
        gravity: "top",
        position: "left",
        stopOnFocus: true,
        style: {
          background: "green",
        },
        onClick: function(){} // Callback after click
      }).showToast();
}

window.addEventListener('DOMContentLoaded', async () => {
    const getData = async () => {
        const data = await fetch("../productos.json");
        const productos = await data.json();
        procesadores = productos;
    }
    await getData();

    const container = document.getElementById('cart-container');

    procesadores.forEach((procesador) => {
        const div = document.createElement('div');
        div.className = 'grid-item';
        div.id = procesador.id;

        const img = document.createElement('img');
        img.src = procesador.imagen;
        img.alt = procesador.nombre;

        const price = document.createElement('p');
        price.innerHTML = `$ <span>${procesador.precio}</span>`;

        const title = document.createElement('p');
        title.className = 'title';
        title.textContent = procesador.nombre;

        const button = document.createElement('button');
        button.id = procesador.id;
        button.textContent = 'AGREGAR';
        button.onclick = addProductoCarrito;

        div.appendChild(img);
        div.appendChild(price);
        div.appendChild(title);
        div.appendChild(button);
        container.appendChild(div);
    });
});