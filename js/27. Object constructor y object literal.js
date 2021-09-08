//POO

/**Object literal */
const producto = {
    table: 'samsung',
    precio: 500
}
/**Escrito todo a mano o código duro */




/** 
 * UNA CLASE
 * Es como la forma en la que vas a almacenar (los datos)
 * que va a tener un objeto en especifico
*/

//Object constructor (dinamico - es como una clase) conviene más para hacerle instancias / PERO YA NO SE USA / Solo clases
function Producto(nombre, precio, disponibilidad) {//parametros - parametros formales
    this.nombre = nombre,
    this.precio = precio,
    this.disponibilidad = disponibilidad
}


//PROTOTYPES: Son funciones que solo se utilizan en un objeto en específico

Producto.prototype.formatearProducto = function() {
    return `El producto ${this.nombre} tiene un precio de: $ ${this.precio}`; //This hace referencia a los valores del objeto
}

//Crear una instancia de Producto (de la clase de arriba)
 const producto0 = new Producto('Monitor curvo de 50 pulgadas', 14000, true); //argumentos - parametros reales
 const producto1 = new Producto('Laptop', 15000, false);
 const producto2 = new Producto('Switch', 6000, true); //ESTO VA ANTES DE LOS PROTOTYPES

/**
 * RECORDATORIO
 * Argumentos es lo que se le manda en la instancia
 * Parámetros son los que están definidos en la función
 */

console.log(producto0);
console.log(producto1);
console.log(producto2);

//¿Qué son los prototypes? Arriba viene declarado

function formatearProducto(producto) {
    return `El producto ${producto.nombre} tiene un precio de: $ ${producto.precio}`;
}

console.log( producto1.formatearProducto() ); //Mandando los prototypes
console.log( producto2.formatearProducto() ); //Mandando los prototypes
