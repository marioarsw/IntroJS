//Arrow function

const sumar = (n1, n2) => console.log(n1 + n2); //Funciona en una linea para instrucciones cortas
sumar(15,15);

const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`);

/**
 * NOTA
 * Los signos ````` son templates de string y ayuda a usar ${}
 */

aprendiendo('JavaScript');

//Donde brillan los arrow functions es en los array methods
//Array methods

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

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

//forEach - ver si algo existe en un arreglo
meses.forEach(function(mes) {
    // console.log(mes);
    if(mes=='Marzo'){
        console.log('Marzo si existe');
    }  
});

//En vez de usar lo de arriba se puede utilizar includes
const resultado = meses.includes('Diciembre');

// const resultado2 = carrito.includes('Tablet'); para arreglos no se puede utilizar includes, se utiliza some

console.log(resultado);

//Some ideal para arreglo de objetos
let resultado2;

//Manera normal
// resultado2 = carrito.some(function(producto) {
//     return producto.nombre == 'Celular';
// })

//Utilizando arrow functions para simplificar
resultado2 = carrito.some(producto => producto.nombre == 'Celular');

console.log(resultado2);

//REDUCE Para tomar todos los valores y poder sumarlos, sintaxis:
resultado3 = carrito.reduce(function(total, producto) {
    return total + producto.precio;
}, 0) //Valor inicial de total

resultado4 = carrito.reduce((total, producto) => total + producto.precio, 0);

console.log(resultado4);

resultado5 = carrito.filter(function(producto) {
    return producto.precio >= 400;
})

console.log(resultado5);

resultado5 = carrito.filter(function(producto) {
    return producto.nombre != 'Celular';
})

console.log(resultado5);