import _ from 'lodash'; // importatcion de la funccion throttle de lodash

// Función para guardar el estado del formulario en el almacenamiento local
function saveFormState() {
	const formState = {
		email: document.querySelector('input[name="email"]').value,
		message: document.querySelector('textarea[name="message"]').value,
	};

	localStorage.setItem('feedback-form-state', JSON.stringify(formState));
}

// Función para cargar el estado del formulario desde el almacenamiento local
function loadFormState() {
	const savedState = localStorage.getItem('feedback-form-state');

	if (savedState) {
		const formState = JSON.parse(savedState);
		document.querySelector('input[name="email"]').value = formState.email;
		document.querySelector('textarea[name="message"]').value =
			formState.message;
	}
}

// Función para borrar el estado del formulario y los campos del almacenamiento local
function clearFormState() {
	localStorage.removeItem('feedback-form-state');
	document.querySelector('input[name="email"]').value = '';
	document.querySelector('textarea[name="message"]').value = '';
}

// Función para manejar el envío del formulario
function handleSubmit(event) {
	event.preventDefault();

	const email = document.querySelector('input[name="email"]').value;
	const message = document.querySelector('textarea[name="message"]').value;

	console.log('Form submitted:');
	console.log('Email:', email);
	console.log('Message:', message);

	clearFormState();
}

// Añadir evento input al formulario para guardar el estado del formulario en el almacenamiento local
const form = document.querySelector('.feedback-form');
form.addEventListener('input', _.throttle(saveFormState, 500));

// Cargar el estado del formulario al cargar la página
window.addEventListener('DOMContentLoaded', loadFormState);

// Añadir evento submit al formulario para manejar el envío
form.addEventListener('submit', handleSubmit);
