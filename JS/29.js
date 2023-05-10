const numero1 = 10;
const numero3 = 110;

// De esta forma da error al mostrar numero 2 y numero 3 ni se muestra
// console.log(numero1);
// console.log(numero2);
// console.log(numero3);

// Para solucionarlo se usa try catch

console.log(numero1);

try {
    console.log(numero2);
} catch (error) {
    console.log(error);
}

console.log(numero3);