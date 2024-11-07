let productos = [];

// Función para cargar productos desde JSON
async function cargarProductos() {
    try {
        const response = await fetch('../data/figuras.json');
        productos = await response.json();
        mostrarProductos(productos);
    } catch (error) {
        console.error('Error cargando los productos:', error);
    }
}

// Función para mostrar productos en el HTML
function mostrarProductos(listaProductos) {
    const container = document.getElementById('product-cards');
    container.innerHTML = ''; // Limpiar el contenedor actual

    listaProductos.forEach(product => {
        const cardHTML = `
            <div class="card">
                <img src="${product.imageUrl}" alt="Producto">
                <div class="card-body">
                    <p class="card-text">${product.price}</p>
                    <button class="buy-button">Comprar</button>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

// Función para filtrar productos por precio
function filtrarProductos() {
    const maxPrice = parseFloat(document.getElementById('priceFilter').value);

    // Convertir el precio de cada producto a número y filtrar
    const productosFiltrados = productos.filter(product => {
        const priceNumber = parseFloat(product.price.replace('$', '').replace(',', ''));
        return isNaN(maxPrice) || priceNumber <= maxPrice;
    });

    // Mostrar los productos filtrados
    mostrarProductos(productosFiltrados);
}

// Cargar los productos cuando se carga la página
document.addEventListener('DOMContentLoaded', cargarProductos);