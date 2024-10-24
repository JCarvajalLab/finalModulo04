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
    let productoAgregado = productosDisponibles[ingresar - 1]

    if(productoAgregado){
        while (true) {
            let cantidad = parseInt(prompt("Ingresa la cantidad que deseas agregar al carrito: "));
            if (isNaN(cantidad) || cantidad <= 0) {
                alert("Error: Debes ingresar un número válido y mayor a 0.");
            } else {
                carrito.agregarProductos(productoAgregado, cantidad);
                alert(`${cantidad} ${productoAgregado.nombre} agregado al carrito.`);
                break;
            }
        }
    }else{
        alert("Producto no disponible");
    }
}
//Funcion para agregar otro producto
function agregarOtroProducto(carrito) {
    while (true) {
        let consulta = prompt("Desea agregar otro producto? (s/n)");
        if (consulta === null || consulta.trim() === "") {
            alert("Error: Por favor, ingresa 's' para sí o 'n' para no.");
            agregarOtroProducto(carrito);
            break; // Salimos del bucle si el campo está vacío
        }

        if (consulta.toLowerCase() === "s") {
            agregarProductoAlCarrito(carrito); // Llamamos a la función para agregar otro producto
        } else if (consulta.toLowerCase() === "n") {
            mostrarTotalCompra(carrito);
            break; // Salimos del bucle
        } else {
            alert("Error: Por favor, ingresa 's' para sí o 'n' para no."); // Mensaje de error
        }
    }
}

//funcion para mostrar el total de la compra + el detalle
function mostrarTotalCompra(carrito) {
    let totalCompra = carrito.calcularTotalCompra();
    let detallesCompra = "Detalles de la compra:\n";
    carrito.productos.forEach((producto, index) => {
        detallesCompra += `${index + 1}. ${producto.producto.nombre} x ${producto.cantidad} - $${producto.producto.precio * producto.cantidad}\n`;
    });
    detallesCompra += `Total: $${totalCompra}`;
    alert(detallesCompra);
}

let carrito = new Carrito();
agregarProductoAlCarrito(carrito);
agregarOtroProducto(carrito);