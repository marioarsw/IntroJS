
function descargarNuevosClientes() {
    return new Promise( resolve => {
        console.log("Descargando clientes... Espere");

        setTimeout( () => {
            resolve("Los clientes fueron descargados");
        }, 5000 );
    });
}

function descargarUltimosPedidos() {
    return new Promise( resolve => {
        console.log("Descargando pedidos... Espere");

        setTimeout( () => {
            resolve("Los pedidos fueron descargados");
        }, 3000 );
    });
}

async function app() {
    try {
        // const clientes = await descargarNuevosClientes();
        // const pedidos = await descargarUltimosPedidos();
        // console.log(clientes);

        //¿Cómo optimizar dos llamados con async await? con un array
        const resultado = await Promise.all([ descargarNuevosClientes(), descargarUltimosPedidos() ]); //Las dos al mismo tiempo
        console.log(resultado[0]);
        console.log(resultado[1]);


        /**
         * RECORDATORIO:
         * Todo lo que esté después de await se ejecutara hasta que se ejecute la línea de await
         */
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}

app();

console.log("Este código no se bloquea");

/**
 * Supongamos que un cliente pide un vaso de agua y otro carne
 * Se entrega el vaso de agua en lo que se prepara la carne
 * Si hay información pesada para cargar primero se obtendrá lo más ligero
 * 
 * En un pago se puede bloquear hasta que el banco verifiqué si los datos están bien
 */