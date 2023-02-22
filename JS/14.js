// ARREGLOS O ARRAYS

/* 
const numeros = [ 10, 20, 30, 40, 50];

 console.log(numeros);

console.table(numeros);
 */

/* 
const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre');
 */

/* 
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

console.table(meses); 
*/

const arreglo = ['Hola', 10, true, null, {Nombre: 'Martin', Trabajo: 'Programador'}, [1,2,3]];
/* 
console.table(arreglo);
console.log(arreglo);

// Acceder a los valores de un arreglo
console.log(arreglo[4]);
console.log(arreglo[0]);

// Conocer la extension de un arreglo

console.log(arreglo.length);
 */
arreglo.forEach( function(dato) {
  console.log(dato);
})


