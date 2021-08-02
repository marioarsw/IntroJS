//Agrupar elementos del mismo tipo o relacionados

const numeros = [10,20,30,40,50];

// console.log(numeros);
//console.table(numeros);

//tamibien se puede crear con el constructor
// const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

// console.table(meses);

/* Un solo arreglo puede contener diferentes tipos de variables*/
// const arreglo = ["Hola", 5, true, "bye", null, {nombre: "Juan", trabajo: "Programador"}, [1,2,3]];

// console.log(arreglo);
// console.table(arreglo);

//Como acceder a un arreglo, indice

// console.log(arreglo[4]);

//Conocer tamano arreglo
// console.log(arreglo.length);

//RECORRER ARREGLOS

// numeros.forEach( function(numeros) {
//     console.log(numeros);
// });

//agregar números

numeros[5] = 60;
numeros[6] = 70;

numeros[2] = 80; //tambien se puede cambiar los valores

/*
Este metodo no es recomendable, lo normal es usar push
*/

numeros.push(100); //al final del arreglo
numeros.push(150);

numeros.unshift(-15); //al inicio del arreglo
numeros.unshift(-30); //este iria primero

console.table(numeros);

//para eliminar elementos

// meses.pop();/**elimina el ultimo elemento del arreglo*/
// meses.shift(); //elimina el primer elemento

// console.table(meses);

//Como eliminar un elemento intermedio
meses.splice(2, 1);//*(desde que posicion, cuantos elementos a partir de esa posicion)

/*
NOTA:
Lo recomendable es NO hacer esto, es decir, modificar (mutar) los datos
originales, haces pop, shift, push etc se debe aplicar a otros arreglos
Mantener los datos originales y crear uno nuevo para hacer operaciones
*/

//Rest Operator o Spread Operator

const nuevoArreglo = [...meses, 'Junio'];
//Los 3 puntos (REST OPERATOR) es copia ese arreglo y agrega junio

/*
tambien se puede agregar al inicio
const nuevoArreglo = ['Junio', ...meses];
*/

console.log(nuevoArreglo);

