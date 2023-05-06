// This

//window.nombre = 'Un nombre';

const reservacion = {
    nombre: 'Martin',
    apellido: 'Orona',
    total: 5000,
    pagado: false,
    informacion: function(){  // informacion: () => {} // no se pued usar arrow function porque hace referencia a la ventana global Windows
        //console.log(`El cliente ${reservacion.nombre} reservo y su cantidad a pagar es de ${reservacion.total}`);
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`);
    }
}

const reservacion2 = {
    nombre: 'Nicolas',
    apellido: 'Sacido',
    total: 5000,
    pagado: false,
    informacion: function(){
        //console.log(`El cliente ${reservacion.nombre} reservo y su cantidad a pagar es de ${reservacion.total}`);
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`);
    }
}

//console.log(reservacion.informacion());
reservacion.informacion();
reservacion2.informacion();