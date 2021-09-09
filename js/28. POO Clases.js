class Producto {// Aquí no se usan parametros para pasar los valores, se utiliza el constructor
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto() { //Esto es un método  que es un prototype
        return `El producto ${this.nombre} tiene un precio de:  $ ${this.precio}`;
    }

    precioProducto() {
        return `El precio del producto es: $ ${this.precio}`;
    }

    obtenerPrecio() {
        console.log(this.precio);
    }
}

const producto = new Producto('Monitor curvo  de 49"', 800);
const producto1 = new Producto('Laptop"', 300);

//Herencia, está clase tiene prácticamente los mismos atributos de la clase anterior
class Libro extends Producto {

    constructor(nombre, precio, isbn) { //isbn es un código para identificarlos
        super(nombre, precio); //SUPER PARA TOMAR LOS VALORES DEL CONTRUCTOR PADRE, solo se puede colocar lo que existe de la clase padre
        this.isbn = isbn;
    }

    formatearProducto() { //Esto es un método  que es un prototype
        return `${super.formatearProducto() } y su ISBN es ${this.isbn}`; //en la herencia
        //cuando se tiene un return se utilizan templates de strings
    }

    //herencia en métodos que no tienen return
    obtenerPrecio() {
        super.obtenerPrecio();
        console.log("Y si hay en existencia");
    }

}

const libro = new Libro("JavaScript la revolución", 120, "351654");

console.log( libro.formatearProducto() ); //Se hereda de la clase padre con el extends //SE DEBE ELIMINAR EL CONSTRUCTOR
//aquí utiliza el método que muestra el isbn ya que esta utilizando el método dentro de Libro

console.log( producto.formatearProducto() );
//Aquí solo imprime nombre y precio porque utiliza el método formatearPorducto() de la clase precio

console.log( libro.obtenerPrecio() );
