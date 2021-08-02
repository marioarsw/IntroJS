// function sumar(n1, n2) {
//     return n1 + n2;
// }

// const resultado = sumar(2,3);

// console.log(resultado);

// console.log(sumar(5,10));

let total = 0;

function agregarCarrito(precio) {
    return total += precio;
}

function calcularImpuesto(total) {
    return 1.15 * total; //Un impuesto del 15 por ciento
}

total = agregarCarrito(200);
total = agregarCarrito(400);
total = agregarCarrito(600);

console.log(total);

const totalAPagar = calcularImpuesto(total);

console.log(`El total a pagar con impuesto es: ${totalAPagar}`); //recordar usar `` en vez de ''


