//Arrow function
//Los arrow functions tienen que comenzar con una declaración de una variable o constante

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
meses.forEach( mes => {
    if(mes=='Marzo'){
        console.log('Marzo si existe');
    }  
});


//Código de 15 en arrow func
let resultado;
resultado = carrito.some( producto => producto.nombre == 'Celular'); //El return también se elimina





//REDUCE Para tomar todos los valores y poder sumarlos, sintaxis:
let resultado1;
resultado1 = carrito.reduce( (total, producto) => total + producto.precio, 0); //Valor inicial de total





resultado2 = carrito.filter(producto => producto.precio >= 400 );



resultado3 = carrito.filter( producto => producto.nombre != 'Celular' );

console.log(resultado3);
