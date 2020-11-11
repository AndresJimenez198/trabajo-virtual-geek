'use strict';

const nombrecompleto = document.querySelector('.nombre')

var nombre1 = 'Leticia'
var apellido1 = 'Fernandez'
var apellido2 = 'Sanchez'

console.log(nombrecompleto.innerHTML = `<h1>El nombre de mi compañera es ${nombre1} ${apellido1} ${apellido2}, y esta compuesto por ${nombre1.length + apellido1.length + apellido2.length} caracteres</h1>`)