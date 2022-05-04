"use strict";

/* Se muestra un evento al hacer clicks utilizando el método addEventListener */


let boton = document.getElementById("btnPrincipal");

boton.addEventListener("click", respuestaClick);
function respuestaClick() {
    console.log("Respuesta al CLICK");
}


/* Se muestra un evento al hacer clicks pero ahora utilizando una propiedad del nodo, identificando con el nombre del evento y el prefijo on */

boton.onclick = () => {
    console.log("Respuesta 2 al CLICK");
}

/* Se muestran ejemplos de eventos del mouse al hacer click */

let boton2 = document.getElementById("btnSecundario");

boton2.onclick = () => {
    console.log("Click")
}
boton2.onmousemove = () => {
    console.log("Move")
}

/* Se muestran ejemplos de eventos del teclado cuando se presiona una tecla y cuando se suelta*/

let input1 = document.getElementById("nombre");
let input2 = document.getElementById("edad");

input1.onkeyup = () => { console.log("keyUp") };
input2.onkeydown = () => { console.log("keyDown") };

/* Se muestra un evento input del teclado cada vez que se tipea sobre el campo */

let input3 = document.getElementById("nombre");

input3.addEventListener('input', () => {
    console.log(input3.value);
})

/* Se muestra un evento submit para validar el formulario con JS antes de ser enviado al server */

let miFormulario = document.getElementById("formulario2");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
    e.preventDefault();
    console.log("El Formulario ha sido enviado");
}
