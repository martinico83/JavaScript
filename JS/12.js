// "use strict" // Correr JavaScript en modo estricto

const producto = {
  nombreProducto : "Monitor 20 Pulgadas", 
  precio : 300,
  disponible : true
}

/* 
// FREEZE no puede ser modificado, ni eliminar ni agregar atributos
//
Object.freeze(producto);

producto.imagen = 'imagen.jpg';

console.log(Object.isFrozen(producto));

console.log(producto); 
*/

// SEAL me deja modificar pero no eliminar o agregar 

Object.seal(producto);

producto.precio = 'NUEVO PRECIO';

delete producto.precio;

console.log(producto);