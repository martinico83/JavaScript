// Arrays Methods

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

const carrito = [
  {Nombre: 'Monitor 20 pulgadas', precio: 500},
  {Nombre: 'Television 50 pulgadas', precio: 700},
  {Nombre: 'Tablet', precio: 300},
  {Nombre: 'Audifonos', precio: 200},
  {Nombre: 'Teclado', precio: 50},
  {Nombre: 'Celular', precio: 500},
  {Nombre: 'Bocinas', precio: 300},
  {Nombre: 'Laptop', precio: 800}
]

// ForEach

/* 
meses.forEach(function(mes){ 
  console.log(mes) 
});
*/

/* 
meses.forEach(function(mes){ 
  if(mes == 'Marzo'){
     console.log('Marzo si existe'); 
  }
});
 */

// Includes

/* 
let resultado = meses.includes('Fiesta');
console.log(resultado);
 */

// Some - ideal para arreglo de objetos

resultado = carrito.some(function(producto){
  return producto.Nombre == 'Tablet';
});

// Reduce

resultado = carrito.reduce(function(total, producto){
  return total + producto.precio
}, 0);


// Filter

resultado = carrito.filter(function(producto){
  return producto.precio > 400
});

resultado = carrito.filter(function(producto){
  return producto.Nombre === 'Celular'
});

resultado = carrito.filter(function(producto){
  return producto.Nombre !== 'Celular'
});

console.log(resultado);

