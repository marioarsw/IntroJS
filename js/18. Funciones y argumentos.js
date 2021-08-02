//Declaracion de funcion
function sumar(numero1 = 0, numero2 = 0) { //numero1, numero2 son PARAMETROS, van dentro del cuerpo de la funcion
    console.log(numero1 + numero2);
}
sumar(15); //Son los ARGUMENTOS o valores reales
sumar(100, 150); 

//Es importante tener parametros por default para poder omitir argumentos

//Expresion de la funcion
const sumar2 = function(n1, n2) {
    console.log(n1+n2);
}
sumar2(100, 150);



