//Declaracion de funcion
function sumar() {
    console.log(10+10);
}

sumar();


//Expresion de la funcion
const sumar2 = function() {
    console.log(3+3);
}

sumar2();

/**
 * La diferencia de 'Declaracion de la funcion y expresion de la funcion
 * es que la declaracion puede ser llamada antes que la funcion
 * mientras que la expresion tiene que ser llamada forzosamente debajo
 * de la funcion (sumar2())
 * 
 * JS Se ejecuta en dos vueltes eso se llama HOISTING
 * En la primera vuelta se registran todas las funciones
 * Con  la segunda expresion no funciona porque esta declarada con un const
 * es decir, es una variable
 */

//IIFE - No necesitan llamarse porque se llaman a ellas mismas
//Estas funciones sirven para proteger que las variables no se mezclen con otro archivo
(function() {
    console.log('Esto es una funcion');
    const cliente = 'Mario' //Esta variable no sera accesible por otro archivo
})();/**Se mandan llamar con el parantesis de aqui */

