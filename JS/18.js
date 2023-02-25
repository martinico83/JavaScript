function sumar(numero1 = 0, numero2 = 0){  // numero1 y numero2 son parametros
  console.log(numero1 + numero2);
}

sumar(10, 20);  // los valores reales ej: (20, 30) son los argumentos
sumar(40, 30);

const sumar2 = function(n1 = 0, n2 = 0){
  console.log(n1 + n2);
}

sumar2(5,2);
sumar2(2);
sumar2();
