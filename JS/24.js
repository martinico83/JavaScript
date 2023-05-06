// For loop

// for(let i=0; i<10; i++){
//     console.log(i);
// }

// for(let i=1; i<10; i++){
//     if(i % 2 == 0){
//         console.log(`El numero ${i} es PAR`);
//     }else{
//         console.log(`El numero ${i} es IMPAR`);
//     }
// }

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

  for(let i = 0; i < carrito.length; i++){
    console.log(carrito[i].Nombre);
  }