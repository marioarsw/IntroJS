"use strict"; //modo estricto, marcará error al intentar añadir una imagen
// Objetos
const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true
}
/*
Nota: Un objeto a pesar de estar como CONST
se puede agregar y modificar sus propiedades

Para evitar eso (la modificacion)
se tiene que crear una variable llamada "Object.freeze"
*/

//Freeze para no a;adir
// Object.freeze(producto); //Con esto no se pueden agregar o eliminar propiedades
// console.log(Object.isFrozen(producto));

//Seal
Object.seal(producto);
console.log(Object.isSealed(producto));

/*
NOTA.
freeze: No permite agregar, eliminar ni modificar.
seal: Permite modificar unicamente.
*/


//crear imagen
// producto.imagen = "imagen.jpg";
//producto.precio = 550; //tampoco permite cambiar los valores

// delete producto.imagen;

// console.log(producto);