'use strict';

const mensaje = document.querySelector('.hola')

var nombre = 'Lola '

var saludo = 'Hola '

var finalsaludo = 'encantada de conocerte.'

console.log(mensaje.innerHTML = (`${saludo + nombre + finalsaludo}`))