//POO

/**Object literal */
const producto = {
    table: 'samsung',
    precio: 500
}

//Object constructor (dinamico - es como una clase)
function Producto(nombre, precio, disponibilidad) {//parametros - parametros formales
    this.nombre = nombre,
    this.precio = precio,
    this.disponibilidad = disponibilidad
}

//Crear una instancia de Producto
const producto0 = new Producto('Monitor curvo de 50 pulgadas', 14000, true); //argumentos - parametros reales
const producto1 = new Producto('Laptop', 15000, false);
const producto2 = new Producto('Switch', 6000, true);

console.log(producto0);
console.log(producto1);
console.log(producto2);
