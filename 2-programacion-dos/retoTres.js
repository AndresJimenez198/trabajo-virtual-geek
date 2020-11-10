'use strict';

const costofruteria = document.querySelector('.fruteria');
var kiwis = 5;
var cant_kiwis = 2;
var costo_kiwis = kiwis * cant_kiwis

var peras = 2;
var cant_peras = 3;
var costo_peras = peras * cant_peras

var uvas = 4;
var cant_uvas = 0.5;
var costo_uvas = uvas * cant_uvas

var totales = costo_kiwis + costo_peras + costo_uvas

var total1 = '<h1>El costo total de los kiwis es: </h1>' +costo_kiwis
var total2 = '<h1>El costo total de las peras es: </h1>' +costo_peras
var total3 = '<h1>El costo total de las uvas es: </h1>' +costo_uvas
var total4 = '<h1>El costo total de los productos es: </h1>' +totales

console.log(costofruteria.innerHTML = total1 + total2 + total3 + total4);

console.log(totales);