'use strict';

var problem = document.querySelector('.contenido')

var personas = 9;

var pagoindividual = (128-2)/personas;

var pagoana = (pagoindividual + 2);

var parrafo = '<p>Nos vamos de cena de Navidad, ¡qué alegría! Somos en total 9 personas y la cuenta del restaurante japonés es de 128€. Ana tiene que pagar 2€ más que los demás porque ha pedido un chupito de sake. ¿Cuánto tenemos que pagar cada una? ¿Y Ana? Hagamos un pequeño programa en JavaScript para calcularlo. El resultado debe mostrarse en la consola del navegador.</p>'

var resultado1 = '<h3>El monto a pagar por cada persona es: </h3>' +pagoindividual

var resultado2 = '<h3>El monto a pagar Ana es: </h3>' +pagoana

console.log(problem.innerHTML = parrafo + resultado1 + resultado2)

console.log(pagoindividual)

console.log(pagoana)