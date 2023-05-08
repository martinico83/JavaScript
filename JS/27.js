// POO

/** Object Literal **/

const producto = {
    nombre : 'Tablet',
    precio : 500
}

// Object Constructor

function Producto(nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}

const produto2 = new Producto('Monitor curvo 49"', 800, true);
const produto3 = new Producto('Monitor flexible 29"', 1000, false);
const produto4 = new Producto('Monitor plegable 27"', 3000, true);

console.log(produto2);
console.log(produto3);
console.log(produto4);