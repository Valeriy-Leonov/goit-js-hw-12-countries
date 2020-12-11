const debounce = require('lodash.debounce');

function fetchCountries(searchQuery) {
  fetch(`/restcountries.eu/rest/v2/name/${searchQuery}`)
  .then(response => response.json())
    .then(data => {
     console.log('data', data)
  // renderItems(data);
  });
};

  
const input = document.querySelector('#country-input');
const container = document.querySelector('block-country__list');

input.addEventListener('input', function (event) {
  debounce(function () { 
     console.log('api start')
    fetchCountries(event.target.value);
    console.log('api end')
  }, 500)
 })



// function renderItems(items) {
//   const result = [];
//   for (let item of items) {
//     const liEl = document.createElement('li');
//     liEl.classList.add('menu__item');
  
//     const articleEl = document.createElement('article');
//     articleEl.classList.add('card');
//     liEl.append(articleEl);

//     const imgEl = document.createElement('img');
//     imgEl.classList.add('card__image');
//     imgEl.src = item.image;
//     imgEl.dataset.source = item.id;
//     imgEl.alt = item.name;

//     const divEl = document.createElement('div');
//     divEl.classList.add('card__content');
    
//     const h2El = document.createElement('h2');
//     h2El.classList.add('card__name');
    
//     const h2ElText = document.createTextNode(item.name);
//     h2El.append(h2ElText);

//     const p1El = document.createElement('p');
//     p1El.classList.add('card__price');
      
//     const iEl = document.createElement('i');
//     iEl.classList.add('material-icons');

//     const iElText = document.createTextNode('monetization_on');
//     const p1ElText = document.createTextNode(`${item.price} кредитов`);
//     iEl.append(iElText);
//     p1El.append(iEl, p1ElText);
     
//     const p2El = document.createElement('p');
//     p2El.classList.add('card__descr');
//     const p2ElText = document.createTextNode(item.description);
//     p2El.append(p2ElText);
    
//     const ulEl = document.createElement('ul');
//     ulEl.classList.add('tag-list');

//     divEl.append(h2El, p1El, p2El, ulEl);

//     const subItems = [];

//     for (let subItem of item.ingredients) { 
//       const subLiEl = document.createElement('li');
//       subLiEl.classList.add('tag-list__item');

//       const subLiElText = document.createTextNode(subItem);
//       subLiEl.append(subLiElText);
//       subItems.push(subLiEl);
//     }

//     ulEl.append(...subItems);

//     const buttonEl = document.createElement('button');
//     buttonEl.className += 'card__button button';

//     const i2El = document.createElement('i');
//     i2El.className += 'material-icons button__icon';

//     const i2ElText = document.createTextNode('shopping_cart');
//     const buttonElText = document.createTextNode('В корзину');
//     i2El.append(i2ElText);
//     buttonEl.append(i2El, buttonElText);
    
//     articleEl.append(imgEl, divEl, buttonEl);

//     result.push(liEl);
//   }
//   mainUl.append(...result);
// }


