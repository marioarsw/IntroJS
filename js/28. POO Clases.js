class Producto {// Aquí no se usan parametros para pasar los valores, se utiliza el constructor
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto() { //Esto es un método  que es un prototype
        return `El producto  ${this.nombre} tiene un precio de:  $ ${this.precio}`;
    }

    precioProducto() {
        return `El precio del producto es: $ ${this.precio}`;
    }
}

const producto = new Producto('Monitor curvo  de 49"', 800);
const producto1 = new Producto('Laptop"', 300);

console.log(producto);
console.log(producto1);

console.log(producto.precioProducto());