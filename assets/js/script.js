//clase producto 
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

//clase carrito, agregamos arreglo producto (para almacenar)

class Carrito {
    constructor() {
        this.productos = [];
    }
    //agregar producto al carrito
    agregarProductos(producto, cantidad) {
        this.productos.push({ producto, cantidad });//agregamos el producto y la cantidad al arreglo
    }
    //calcular total de la compra
    calcularTotalCompra() {
        return this.productos.reduce((acc, item) => acc + item.producto.precio * item.cantidad, 0);
    }
}

//Producctos disponibles
const productosDisponibles = [
    new Producto("Leche", 1000),
    new Producto("Pan de Molde", 2000),
    new Producto("Queso", 1200),
    new Producto("Mermelada", 890),
    new Producto("Azucar", 1300),
];

//Mostrar los productos disponibles del array 
//console.log(productosDisponibles);

//Funcion para mostrar los productos disponibles en el popup
function mostrarProductos() {
    let disponible = "Productos disponibles:\n";
    productosDisponibles.forEach((producto, index) => {
        disponible += `${index + 1}. ${producto.nombre} - $${producto.precio}\n`;
        });
        return disponible;
}
    //console.log(mostrarProductos());

//Funcion para agregar productos al carrito
function agregarProductoAlCarrito(carrito) {
    alert(mostrarProductos());
    let ingresar = prompt("Ingresa el numero del producto que deseas agregar al carrito: ");
    let productoAgregado = productoDisponible[ingresar - 1]

    if(productoAgregado){
        let cantidad = parseInt(prompt("Ingresa la cantidad que deseas agregar al carrito: "));
        carrito.agregarProductos(productoAgregado, cantidad);
        alert(`${cantidad} ${productoAgregado.nombre} agregado al carrito.`);
    }else{
        alert("Producto no disponible");
    }
}