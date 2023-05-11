const boton = document.querySelector('#boton');

boton.addEventListener('click', function(){
    console.log('DISTE CLICK');
    Notification.requestPermission()
    // .then(resultado => console.log('EL resultado es: ', resultado))
    .then(resultado => console.log(`El resultado es: ${resultado}`))
});


if(Notification.permission == 'granted'){
    new Notification('Esta es una notificacion', {
        icon: 'img/descarga.png',
        body: 'Codigo con Juan, los mejores tutoriales'
    })
}