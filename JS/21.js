/* 
const sumar2 = function(n1 = 0 , n2 = 0){
  console.log(n1 + n2);
}
 */

// Arrow Function

/* 
const sumar2 = (n1 = 0 , n2 = 0) => {
  console.log(n1 + n2);
}
 */

// Cuando es una sola linea de codigo dentro de las llaves puedo omitir estas
const sumar2 = (n1 = 0 , n2 = 0) => console.log(n1 + n2);

// Cuando es un solo parametro que recibe la funcion se pueden omitir los parentesis
const aprendiendo = tecnologia => console.log(`Aprendiendo un lenguaje: ${tecnologia}`);

sumar2(5 + 10);
aprendiendo('Javascript');

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
 
meses.forEach( mes => { 
  if(mes == 'Marzo'){
     console.log('Marzo si existe'); 
  }
});

/*  Esto es sin aplicar Arrow Function

resultado = carrito.some(function(producto){
  return producto.Nombre == 'Tablet';
});
 */

// Elimino el return porque es una sola linea de codigo y se da por implicito
resultado = carrito.some( producto => producto.Nombre == 'Tablet' );

console.log(resultado);