// const producto = "Monitor de 20\" pulgadas"; //String o cadena de texto - Esta es la sitaxis que se usa
// const producto1 = String('Monitor de 30" pulgadas'); //Con constructor, esto es de manera explícita y casi no se usa
// const producto2 = new String("Monitor de 50\" pulgadas"); //esto es un objeto


// console.log(producto);
// console.log(producto1);
// console.log(producto2);

// //Para saber el tipo de dato se escribe typeof

// console.log(typeof producto1);
// console.log(typeof producto2);

//Operaciones con strings

const tweet = 'Aprendiendo strings en JavaScript';
const producto1 = 'Monitor de 30"';

console.log(tweet.length);
console.log(tweet);
console.log(producto1);

//IndexOf Ver si una palabra existe dentro de una cadena de texto - Retorna una posición
console.log("La palabra JavaScript se encuentra en la posición: ", tweet.indexOf('JavaScript'));
console.log("La palabra Monitor se encuentra en la posición: ", producto1.indexOf('Monitor'));
console.log("La palabra Tablet se encuentra en la posición: ", producto1.indexOf('Tablet')); //Con - significa que no lo encontró

//Includes retorna true o false, esto es más nuevo que IndexOf
console.log("¿Existe la palabra JavaScript? ", tweet.includes('JavaScript'));
console.log("¿Existe la palabra Monitor?: ", producto1.includes('Monitor'));


