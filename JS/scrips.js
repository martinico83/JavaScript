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

// Eventos

/* console.log(1);

window.addEventListener('load', function(){  // Load espera a que el JS y los archivos que dependen del HTML esten listos
    console.log(2);
});

//window.addEventListener('load', imprimir);
//window.addEventListener('load', imprimir());

window.onload = function(){
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function(){  // Solo espera por el HTML, pero no espera CSS o imagenes 
    console.log(4)
})



console.log(5); */

/*function imprimir(){
    console.log(2);
}*/

/* window.onscroll = function(evento){
    console.log(evento);
} */


// Seleccionar elementos y asociarles un evento

const btnEnviar = document.querySelector('.boton--primario');

/* btnEnviar.addEventListener('click', function (evento) {
    console.log(evento);
    evento.preventDefault();

    // Validar un formulario
    console.log('Enviando formulario');
}); */


// Eventos de los Inputs y Textarea

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');


/* nombre.addEventListener('input',function(e){
    console.log(e.target.value);
});

email.addEventListener('input',function(e){
    console.log(e.target.value);
});

mensaje.addEventListener('input',function(e){
    console.log(e.target.value);
}); */

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);
// El evento de submit

formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    // Validar formulario

    const { nombre, email, mensaje } = datos;

    if (nombre == '' || email == '' || mensaje == '') {
        mostrarError('Todos los campos son obligatorios');

        return; // Corta la ejecucion del codigo
    }

    // Muestra mensaje de Formulario enviado

    mostrarEnviadoOk('Formulario Enviado');


    // Enviar formulario

    console.log('Enviando Formulario....');

})


/* function leerTexto(){
    console.log('Escribiendo');
} */

function leerTexto(e) {
    //console.log(e.target.value);

    datos[e.target.id] = e.target.value;

    //onsole.log(datos);
}

// Muestra un ERROR en pantalla

function mostrarError(mensaje) {
    const error = document.createElement('p');
    error.textContent = mensaje;

    error.classList.add('error');

    formulario.appendChild(error);

    // Desaparezca despues de 5 segundos

    setTimeout(() => {
        error.remove();
    }, 5000);

}

// Muestra mensaje de formulario enviado

function mostrarEnviadoOk(mensaje) {
    const enviadoOk = document.createElement('p');
    enviadoOk.textContent = mensaje;

    enviadoOk.classList.add('correcto');

    formulario.appendChild(enviadoOk);

    // Desaparezca despues de 5 segundos

    setTimeout(() => {
        enviadoOk.remove();
    }, 5000);

}