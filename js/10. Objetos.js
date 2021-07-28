const nombreProducto = "Monitor 20 pulgadas";
const precio = 300;
const disponible = true;

/*
Gracias a un objeto pasas de 3 variables
a un solo objeto que contenga estas 
3 caracteristicas
*/

const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true
}

console.log(producto);
/*
//Como acceder
console.log(producto.nombreProducto);
console.log(producto.precio);
console.log(producto.disponible);

console.log(producto["precio"]); //también se puede acceder así
*/

//Como modificar objetos