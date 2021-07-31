const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true
}

const medidas = {
    peso: "1kg",
    medida: "1m"
}

/**
 *  Para unir dos objetos se recomienda no modificar (MUTAR) los datos originales 
 *  REST OPERATOR
*/

const nuevoProducto = { ...producto, ...medidas}; //Esta es la sintaxis para unir - Rest Operator

console.log(producto);
console.log(nuevoProducto);