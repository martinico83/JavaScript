const usuarioAutenticado = new Promise( (resolve, reject) =>{
    const auth = false;

    if(auth){
        resolve('Usuario AUTENTICADO'); // El PROMISE se cumple
    }else{
        reject('NO se puede iniciar seion'); // El PROMISE no se cumple
    }
} );

usuarioAutenticado
// .then(function(resultado){
//     console.log(resultado)
// })

// .catch(function(error){
//     console.log(error)
// })

.then( resultado => console.log(resultado))

.catch( error => console.log(error))


// En los Promises existen 3 valores
//Pending : No se ha cumplido pero tampoco se ha rechazado
//Fulfilled : Ya se cumplio
//Rejected : Se ha rechazado o no se pudo cumplir

