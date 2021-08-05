//Arreglo de objetos
const carrito = [
    {nombre: 'Monitor 20 pulgadas', precio: 500},
    {nombre: 'Televisión 50 pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audífonos', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Celular', precio: 500},
    {nombre: 'Bocinas', precio: 300},
    {nombre: 'Celular', precio: 800}
];

//forEach se utliza unicamente en ARREGLOS
// carrito.forEach( function(producto) { //en function se le pone por lo que quiere iterar
//     console.log(producto.nombre);
// });

carrito.forEach( producto => console.log(producto.nombre) );


/**
 * DIFERENCIA ENTRE FOREACH Y MAP
 * FOREACH: Cuando quiera iterar y solamente MOSTRAR (IMPRIMIR) los elementos de un arreglo usar FOREACH
 * MAP: Para CREAR un nuevo arreglo y guardar algunas propiedades, (producto.NOMBRE), es decir, mutar un arreglo
 */

//map
const arreglo2 = carrito.map( producto => producto.nombre ); //recordar cuando no se tiene un console log o algo antes queda IMPLICITO EL RETURN
console.log(arreglo2);


const arreglo3 = carrito.map( producto => `${producto.nombre} - ${producto.precio}`);
console.log(arreglo3);

