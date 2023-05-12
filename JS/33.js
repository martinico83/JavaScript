async function obtenerEmpleados() {

    const archivo = 'JS/empleados.json';

    // fetch(archivo)
    //     // .then(resultado =>{

    //     //     return resultado.json();

    //     // })

    //     .then(resultado => resultado.json() )
        
    //     .then( datos => {

    //         // console.log(datos);

    //         // console.log(datos.empleados);

    //         const { empleados } = datos;

    //      console.log(empleados);

    //         // empleados.forEach( empleado => {

    //         //     // console.log(empleado);

    //         //     console.log(empleado.nombre);

    //         //     // document.querySelector('.contenido').textContent = empleado.nombre;

    //         //     //document.querySelector('.contenido').textContent += empleado.nombre;


    //         // } )

    //     } )

    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    console.log(datos);
}

obtenerEmpleados();