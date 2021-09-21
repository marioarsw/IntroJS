//Es el reemplazo a AJAX
//Actualiza en tiempo real el sitio web

/**
 * Se necesita un lenguaje de backend para consultar una base de datos que se conecte a un servidor
 * para realizar la consulta estando en un formato JSON
 * 
 * ¿Qué es un JSON?
 * Js Object Notation
 * 
 * A través de un lenguaje de backend como Python C# PHP Node.js y Java se puede generar
 * un archivo JSON que puede ser consumida en JS con Fetch API
 */

function obtenerEmpleados() {

    const archivo = "empleados.json"; 

    fetch(archivo)
        .then( resultado =>  resultado.json() )

        .then( datos => {
            //console.log(datos);

            //destructuring para obtener los datos
            const { empleados } = datos;

            //console.log(empleados);

            empleados.forEach( empleado => {
                console.log(empleado);
                console.log(empleado.id);
                console.log(empleado.nombre);
                console.log(empleado.puesto);

                document.querySelector(".contenido").textContent += empleado.nombre;
            });
        })
}

obtenerEmpleados();