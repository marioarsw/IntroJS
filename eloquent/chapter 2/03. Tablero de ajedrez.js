/*
Escribe un programa que cree un string que represente una cuadrícula de 8 × 8, usando caracteres de nueva línea para separar las líneas. En cada posición de la cuadrícula hay un espacio o un carácter "#". Los caracteres deberían de formar un tablero de ajedrez.
*/

let fila = 5;
let columna = 7;

let aux = "";

for(let i = 0; i < fila; i++){
    aux+="# ";
}

for(let j = 0; j < columna; j++){
    if(j%2!=0){
        console.log(" ", aux);
    }else{
        console.log(aux);   
    }
}