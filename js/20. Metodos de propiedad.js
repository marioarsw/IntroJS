//Esto se llama métodos de propiedad.

const reproductor = {
    //Agregando métodos dentro
    reproducir: function(id) {
        console.log(`Reproduciendo cancion con el  ID: ${id}`);
    },

    pausar: function() {
        console.log('Pausando...');
    },

    crearPlaylist: function(nombre) {
        console.log(`Creando la playlist: ${nombre}`);
    },

    reproducirPlaylist: function(nombre) {
        console.log(`Reproduciendo la playlist: ${nombre}`);
    }

}

/**
 * Recordatorio
 * reproducir es una propiedad de reproductor
 * 
 * Lo de arriba es una constante que tiene un objeto
 * que tiene una función que se llama reproducir
 */

//Agregando métodos fuera
reproductor.borrarCancion = function(id) {
    console.log(`Eliminando la cancion: ${id}`);
}

reproductor.reproducir(15);
reproductor.pausar(20);

reproductor.borrarCancion(50);

reproductor.crearPlaylist("Bad Bunny Baby");

reproductor.reproducirPlaylist("Bad Bunny Baby");