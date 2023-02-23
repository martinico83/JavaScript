// ARREGLOS O ARRAYS 

/*
 console.log(numeros);
 */
//arreglo = ['Hola', 10, true, null, {Nombre: 'Martin', Trabajo: 'Programador'}, [1,2,3]];
/* 
console.table(arreglo);
console.log(arreglo);

// Acceder a los valores de un arreglo
console.log(arreglo[4]);
console.log(arreglo[0]);

// Conocer la extension de un arreglo

console.log(arreglo.length);
 */


/* 
const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre');
 */

/*
console.table(meses); 
*/

//const 
/* console.log(meses.length);

meses.forEach( function(dato) {
  console.log(dato);
}) */


const numeros = [ 10, 20, 30, 40, 50];

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

//numeros[7] = 60;
/* 
numeros.push(60);
numeros.push(70);
numeros.push(80, 90, 100);
numeros.unshift(-10, -20);

meses.pop(); // Elimina el ultimo elemento del arreglo
meses.shift(); // Elimina el primer elemento del arreglo

meses.splice(2, 1); // Le paso dos parametros el indice del elemento a eliminar y cuantos a partir de ahi quiero 
                     // eliminar

console.table(numeros);
console.table(meses);
 */
const nuevoArreglo = ['FIESTAS', ...meses];
const nuevoArreglo2 = [...meses, 'DICIEMBRE'];


console.table(nuevoArreglo);
console.table(nuevoArreglo2);
