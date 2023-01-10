const landing = document.createElement('div');

const heading = document.createElement('h1');
heading.innerHTML = 'Podolia restoraunt';
landing.appendChild(heading);

const image = document.createElement('img');
image.setAttribute('src', 'hoverla.jpg');
landing.appendChild(image);

const text = document.createElement('p');
text.innerHTML = 'Podolia is a restoraunt dedicated to the cuisine of Ukrainian region of Podolia, that enjoyed influences not only from Ukraine but from Poland, Hungary and even Turkey.';
landing.appendChild(text);

export default landing;