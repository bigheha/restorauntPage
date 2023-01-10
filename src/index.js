import landing from "./landing";
import menu from "./menu";
import contacts from "./contacts";
import './reset.css';
import './styles.css';

const content = document.querySelector('.content');
content.appendChild(landing);

const header = document.createElement("div");
header.classList.add('header');

const mainButton = document.createElement('button');
mainButton.innerHTML = 'main';
mainButton.addEventListener('click', () => {
    content.removeChild(content.firstElementChild);
    content.appendChild(landing);
});
header.appendChild(mainButton);

const menuButton = document.createElement('button');
menuButton.innerHTML = 'menu';
menuButton.addEventListener('click', () => {
    content.removeChild(content.firstElementChild);
    content.appendChild(menu);
})
header.appendChild(menuButton);

const contactsButton = document.createElement('button');
contactsButton.innerHTML = 'contacts';
contactsButton.addEventListener('click', () => {
    content.removeChild(content.firstElementChild);
    content.appendChild(contacts);
})
header.appendChild(contactsButton);

const body = document.querySelector('body');
body.insertBefore(header, content);

