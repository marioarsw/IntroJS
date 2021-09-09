/**
 * Todas las apis modernas utilizan promises
 * Reflejan un valor que podra estar disponible ahora en un futuro o nunca
 */

// const usuarioAutenticado = new Promise( function() {
    
// }); Manera normal

//Arrow function
const usuarioAutenticado = new Promise( (resolve, reject) => {
    const auth = false; //usuario autenticado

    if(auth) {
        resolve("Usuario autenticado"); //El promise se cumple
    } else {
        reject("No se pudo iniciar sesión"); //El promise no se cumple
    }
});

//Se accede a los valores de promise con .then
usuarioAutenticado
    .then( function(resultado) {
        console.log(resultado);
    })
    //.then( resultado => console.log(resultado)

    .catch( function(resultado) {
        console.log(resultado);
    })
    //.catch( error => console.log(resultado)

//En los promises existen 3 valores
//Pending: No se ha cumplido pero tampoco se ha rechazado (borrar el código del if)
//Fulfilled: Ya se cumplió
//Rejected: Se ha rechazado

