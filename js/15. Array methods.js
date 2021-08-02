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


/*
Arreglos planos usar include
Arreglo de objetos utilizar some y una funcion que recorra
*/

//REDUCE Para tomar todos los valores y poder sumarlos, sintaxis:
resultado3 = carrito.reduce(function(total, producto) {
    return total + producto.precio;
}, 0) //Valor inicial de total

//CON ARROW FUNCTION
resultado4 = carrito.reduce((total, producto) => total + producto.precio, 0);

console.log(resultado4);

//Filter, de las funciones mas utiles, sirve para obtener un elemento
resultado5 = carrito.filter(function(producto) {
    return producto.precio >= 400;
})

console.log(resultado5);

resultado5 = carrito.filter(function(producto) {
    return producto.nombre != 'Celular';
})

console.log(resultado5);