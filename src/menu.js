const menu = document.createElement('div');

const dish = document.createElement('div');

const image = document.createElement('img');
image.setAttribute('src', 'hoverla.jpg');
dish.appendChild(image);
const title = document.createElement('h4');
title.innerHTML = 'BORSHCH';
dish.appendChild(title);
const text = document.createElement('p');
text.innerHTML = 'Borshch is the only meal there is';
dish.appendChild(text);

menu.appendChild(dish);
menu.appendChild(dish);
menu.appendChild(dish);

export default menu;