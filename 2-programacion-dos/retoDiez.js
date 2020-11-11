'use strict';

const parrafo = document.querySelector('.contenido')

console.log(parrafo.innerHTML = parrafo.innerHTML)

const operaci = document.querySelector('.calculo')

const edad = parseInt(36) 

const año = parseInt(365)

const dia = parseInt(24)

var total = parseInt(dia*año*edad)

console.log(operaci.innerHTML = `<h3>El total de horas vividas es: ${total}</h3>`)