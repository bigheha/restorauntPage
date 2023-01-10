const contacts = document.createElement('div');
contacts.classList.add('flex', 'contacts');

const email = document.createElement('p');
email.innerHTML = '<span>Email adress:</span> @podolia.restoraunt@gmail.com';
contacts.appendChild(email);
const number = document.createElement('p');
number.innerHTML = '<span>Phone number:</span> +380690000000';
contacts.appendChild(number);
const adress = document.createElement('p');
adress.innerHTML = '<span>Adress:</span> 15th central st., Kamyanets Podilskiy, Chmelnytska obl., Ukraine.'
contacts.appendChild(adress);
export default contacts;