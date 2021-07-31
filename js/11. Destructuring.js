// Objetos
const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true
}

//Forma anterior de traer un objeto a una variable
// const precioProducto = producto.precio;
// const nombreProducto = producto.nombreProducto;

// console.log(precioProducto);

//Forma nueva - Destructuring de objetos
//Significa sacar de una estructura
// const {precio} = producto; //crea la variable y la asigna
// const {nombreProducto} = producto;

const {precio, nombreProducto} = producto;

console.log(precio);
console.log(nombreProducto);