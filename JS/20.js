// Metodos de Propiedad

const reproductor = {
  reproducir : function(id = 0){
    console.log(`Reproduciendo cancion: ${id}`);
  },
  pausar : function(){
    console.log('Pausado.....');
  },
  crearPlaylist: function(nombre){
    console.log(`Creando la Playlist ${nombre}`);
  },
  reproducirPlaylist: function(nombre){
    console.log(`Reproduciendo Playlist ${nombre}`);
  }
}

reproductor.borrarCancion = function(id = 0){
  console.log(`Eliminando la cancion: ${id}`);
}

console.log(reproductor);

reproductor.reproducir(355);
reproductor.pausar();
reproductor.borrarCancion(233);
reproductor.crearPlaylist('AnarcoFolk');
reproductor.reproducirPlaylist('AnarcoFolk');