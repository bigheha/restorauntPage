const menu = document.createElement('div');
menu.classList.add('flex', 'menu');

for (let i = 0; i < 3; i++) {
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
    dish.appendChild(document.createElement('hr'));
    menu.appendChild(dish);
};


export default menu;