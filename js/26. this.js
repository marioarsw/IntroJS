//this

//esta es una declaracion de objetos (recordar por las llaves{}) y se le conoce como object literal
const reservacion = {
    nombre: 'Mario',
    apellido: 'Amador',
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${reservacion.nombre} tiene que pagar ${reservacion.total}`);
    }
};

const reservacion2 = {
    nombre: 'Omar',
    apellido: 'Vrg',
    total: 3000,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${this.nombre} tiene que pagar ${this.total}`);
    }
};
reservacion2.informacion();

/**
 * EXPLICACIÓN;
 * This hace referencia al objeto inmediato, en los ejemplos pasados,
 * se podía hacer reservacion.nombre, pero que pasa si tuviera más declaraciones de objetos
 * a cada uno de ellos tendría que estar cambiando la variable estilo reservacion2.nombre
 * para poder hacer referencia a los objetos, en vez de eso se utiliza this
 */

/** Pregunta de examen **/

window.nombre = 'Nombre random';

const objeto1 = {
    nombre: 'Mario',
    informacion: () => {
        console.log(`Nombre: ${this.nombre}`);
    }
};

objeto1.informacion();

/**
 * EXPLICACIÓN:
 * Cuando se utiliza ARROW FUNCTION dentro de un objeto el THIS manda llamar a las variables GLOBALES
 * Las ARROW F siempre buscan las variables globales
 * En cambio si se especifica Nombre: ${objeto1.nombre} si mandara el nombre Mario
 * 
 * Si en la funcion informacion se utiliza la palabra reservada function() llamra a Mario
 */