// POO

/** Object Literal **/

const producto = {
    nombre : 'Tablet',
    precio : 500
}

// Object Constructor

function Cliente(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

Cliente.prototype.formatearCliente = function(){
    return `El Cliente ${this.nombre}, ${this.apellido}.`;
}

function Producto(nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}

// Crear funciones que solo se utilizan en un objeto en especifico.

Producto.prototype.formatearProducto = function(){
    return `El Producto ${this.nombre} tiene un precio de $ ${this.precio}`;
}


const produto2 = new Producto('Monitor curvo 49"', 800, true);
const produto3 = new Producto('Monitor flexible 29"', 1000, false);
const produto4 = new Producto('Monitor plegable 27"', 3000, true);


const cliente = new Cliente('Martin', 'Orona');

console.log(produto3.formatearProducto());

console.log(produto4.formatearProducto());

console.log(cliente.formatearCliente());
