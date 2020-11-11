'use strict';

const mensaje = document.querySelector('.hola')

var nombre = 'Lola'

var saludo = '<h3>Hola </h3>'

var finalsaludo = '<h3> encantada de conocerte.</h3>'

var completo = saludo + nombre + finalsaludo

console.log(mensaje.innerHTML = completo)