//For
// for(let i = 1; i <= 10; i++) {
//     console.log(i);
// }

//Saber si un numero es par
// for(let i = 1; i <= 20; i++) {
//     if(i%2===0) {
//         console.log(`El numero ${i} es par`);
//     } else {
//         console.log(`El numero ${i} es impar`);
//     }
// }


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
]

//Para recorrer un arreglo de objetos
// for(let i = 0; i < carrito.length; i++) {
//     console.log(carrito[i].nombre);
// }

//While loop
/*
NOTA:
SIEMPRE EVALUA PRIMERO LA CONDICION
Y si es verdadero lo ejecuta
*/

let i = 1; //indice

// while(i <= 20) { //condicion
//     if(i%2===0) {
//         console.log(`El numero ${i} es par`);
//     }
//     i++; //incremento
// }

// while( i < carrito.length ) {
//     console.log(carrito[i].nombre);
//     i++;
// }

//Do while loop


i = 100;

do {

    console.log(i);
    i++

} while(i < 10);