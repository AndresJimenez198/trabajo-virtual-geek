'use strict';

const parrafo = document.querySelector('.contenido')

console.log(parrafo.innerHTML = parrafo.innerHTML)

const operaci = document.querySelector('.calculo')

const edad = 36 - parseInt(operaci,10);

const año = 365 - parseInt(operaci,10);

const dia = 24 - parseInt(operaci,10);

var total = (dia*año*edad);

console.log(operaci.innerHTML = `<h3>El total de horas vividas es: </h3> `)
