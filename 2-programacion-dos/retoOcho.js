'use strict';

const perritos = document.querySelector('.perros')

const firstDogImage = 'https://images.dog.ceo/breeds/chihuahua/n02085620_1205.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://images.dog.ceo/breeds/malamute/n02110063_642.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://images.dog.ceo/breeds/chihuahua/n02085620_3409.jpg';
const thirdDogName = 'Lana';

perritos.innerHTML = `<ul>
<li><img src="${firstDogImage}" alt="${firstDogName}"></a> ${firstDogName}</li>
<li><img src="${secondDogImage}" alt="${secondDogName}"></a> ${secondDogName}</li>
<li><img src="${thirdDogImage}" alt="${thirdDogName}"></a> ${thirdDogName}</li>
</ul>`