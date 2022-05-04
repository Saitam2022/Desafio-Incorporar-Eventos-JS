"use strict";

/* Se muestra un mensaje de bienvenida */

function saludar() {
    console.log("Sean Bienvenidos a nuestra Web!");
}
saludar();

/* Usando el método get element by id para así obtener un único elemento */

let div = document.getElementById("app");
let parrafo = document.getElementById("parrafo1");

console.log(div.children[0].innerHTML);
console.log(parrafo.innerHTML);

/* Usando el método get element by class name para así obtener un conjunto de elementos. Es decir un array de elementos. En este caso distintas marcas y modelos de Baterias */

let Baterias = document.getElementsByClassName("Baterias");
console.log(Baterias);
console.log(Baterias[0].innerHTML);
console.log(Baterias[1].innerHTML);
console.log(Baterias[2].innerHTML); 
console.log(Baterias[3].innerHTML);
console.log(Baterias[4].innerHTML);

/* Usando el método get element by Tag name para así obtener un conjunto de elementos, utilizando el nombre de una etiqueta. En este caso con Divs */

let contenedores = document.getElementsByTagName("div");
console.log(contenedores);
console.log(contenedores[0].innerHTML);
console.log(contenedores[1].innerHTML);
console.log(contenedores[2].innerHTML);

/* Utilizo el método inner text para modificar el contenido de texto del título que originalmente decía: Desafío Complementario Interactuar con HTML - Javascript por Desafío Complementario Número 2 - JS */

let titulo = document.getElementById("titulo");
console.log( titulo.innerText );

titulo.innerText = "Desafío Complementario Número 2 - JS";
console.log( titulo.innerText );

/* Utilizo el método inner Html para modificar/alterar el código Html. En este caso agrego un h2 y párrafo */

let container = document.getElementById("contenedor");
container.innerHTML = "<h2>Baterias Nuevas y Usadas</h2><p>Los mejores precios del mercado. Atendido por músicos para músicos. Armamos tú presupuesto sin cargo y brindamos los mejores planes de financiación para poder acceder al instrumento de tus sueños.</p>"


