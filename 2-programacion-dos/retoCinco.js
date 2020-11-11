'use strict';

const parrafo = document.querySelector('.contenido')

console.log(parrafo.innerHTML = parrafo.innerHTML)

const operaci = document.querySelector('.calculo')

var edad = 36

var año = 365

var dia = 24

var total = (dia*año*edad)

var resultado = '<h3>El total de horas vividas es: </h3>' +total

console.log(operaci.innerHTML = resultado)
