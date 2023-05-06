const carrito = [
    { Nombre: 'Monitor 20 pulgadas', precio: 500 },
    { Nombre: 'Television 50 pulgadas', precio: 700 },
    { Nombre: 'Tablet', precio: 300 },
    { Nombre: 'Audifonos', precio: 200 },
    { Nombre: 'Teclado', precio: 50 },
    { Nombre: 'Celular', precio: 500 },
    { Nombre: 'Bocinas', precio: 300 },
    { Nombre: 'Laptop', precio: 800 }
]

// ForEach  (solo se pueden ejecutar en arreglos) si solo quieres iterar y mostrar en la consola usa ForEach

// carrito.forEach(function(producto){
//     console.log(producto)
// });

// carrito.forEach( producto => console.log(producto) );

//const arreglo1 = carrito.forEach( producto => producto.Nombre ); // Esto da error

carrito.forEach( producto => console.log( producto.Nombre) );


// Map  (solo se pueden ejecutar en arreglos) si quieres crear un nuevo arreglo usa Map

//carrito.map( producto => console.log(producto) );

//const arreglo2 = carrito.map( producto => producto.Nombre );

const arreglo2 = carrito.map( producto => ` ${producto.Nombre} - ${producto.precio}` );

console.log(arreglo2);

