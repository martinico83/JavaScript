/* 
function sumar(n1 = 0, n2 = 0){
  return n1 + n2;
}

const resultado = sumar(4,3);
console.log(resultado);
 */

let total = 0;

function agregarCarrito(precio){
  return total += precio;
}

function calcularImpuesto(total){
  return 1.21 * total;     // monto total a pagar incluidos el 21%
}

total = agregarCarrito(200);
total = agregarCarrito(400);
total = agregarCarrito(600);

console.log(total);

const totalAPagar = calcularImpuesto(total);

console.log(`El total a pagar es de: ${totalAPagar}`);
console.log(`El total a pagar es de: $${totalAPagar}`);
console.log(`El total a pagar es de: $ ${totalAPagar}`);
