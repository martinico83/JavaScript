//  querySelector

const heading = document.querySelector('.header__texto h2'); // Esto retorna a la consola 1 o 0 elementos
heading.textContent = 'Nuevo Heading Martin';
//heading.classList.add('nueva-clase');
console.log(heading);


// querySelectorAll

const enlaces = document.querySelectorAll('.navegacion a');
//document.querySelectorAll('.navegacion a')[2].textContent = 'Nuevo texto para enlace';

//console.log(enlaces);
//console.log(enlaces[2]);

enlaces[2].textContent = 'Nuevo texto para enlace';
//enlaces[2].href = 'http://google.com';
enlaces[2].classList.add('nueva-clase');
//enlaces[2].classList.remove('navegacion__enlace');



// getElementById

const heading2 = document.getElementById('heading');
console.log(heading2);

// Generar un nuevo enlace

const nuevoEnlace = document.createElement('A')

// Agregar el href

nuevoEnlace.href = 'nuevoEnlace.html';    

// Agregar el texto

nuevoEnlace.textContent = 'Tienda virtual';

// Agregar la clase

nuevoEnlace.classList.add('navegacion__enlace');

// Agregarlo al documento

const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);



console.log(nuevoEnlace);

