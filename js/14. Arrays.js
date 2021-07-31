//Agrupar elementos del mismo tipo o relacionados

const numeros = [10,20,30,40,50];

// console.log(numeros);
console.table(numeros);

//tamibien se puede crear con el constructor
// const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

console.table(meses);

/* Un solo arreglo puede contener diferentes tipos de variables*/
const arreglo = ["Hola", 5, true, "bye", null, {nombre: "Juan", trabajo: "Programador"}, [1,2,3]];

console.log(arreglo);
console.table(arreglo);

//Como acceder a un arreglo, indice

console.log(arreglo[4]);

//Conocer tamano arreglo
console.log(arreglo.length);

//RECORRER ARREGLOS

numeros.forEach( function(numeros) {
    console.log(numeros);
});