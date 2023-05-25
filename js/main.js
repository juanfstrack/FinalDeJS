window.addEventListener('DOMContentLoaded', () => {
    const procesadores = [
        {
            "id": 1,
            "nombre": "PROCESADOR 1",
            "precio": 60.000,
            "imagen": "./IMG/1.webp"
        },
    
        {
            "id": 2,
            "nombre": "PROCESADOR 2",
            "precio": 60.000,
            "imagen": "./IMG/2.webp"
        },
        {
            "id": 3,
            "nombre": "PROCESADOR 3",
            "precio": 60.000,
            "imagen": "./IMG/3.webp"
        },
    
        {
            "id": 4,
            "nombre": "PROCESADOR 4",
            "precio": 60.000,
            "imagen": "./IMG/4.webp"
        },
        {
            "id": 5,
            "nombre": "PROCESADOR 5",
            "precio": 60.000,
            "imagen": "./IMG/5.webp"
        },
        {
            "id": 6,
            "nombre": "PROCESADOR 6",
            "precio": 60.000,
            "imagen": "./IMG/6.webp"
        },
        {
            "id": 7,
            "nombre": "PROCESADOR 7",
            "precio": 60.000,
            "imagen": "./IMG/7.webp"
        },
        {
            "id": 8,
            "nombre": "PROCESADOR 8",
            "precio": 60.000,
            "imagen": "./IMG/8.webp"
        }
    ]
    
    const container = document.getElementById('Cart-container');

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
        button.textContent = 'AGREGAR';

        div.appendChild(img);
        div.appendChild(price);
        div.appendChild(title);
        div.appendChild(button);
        container.appendChild(div);
    });
});
