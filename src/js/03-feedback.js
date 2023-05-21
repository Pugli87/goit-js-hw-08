import _ from 'lodash'; // importatcion de la funccion throttle de lodash

// Función para guardar el estado del formulario en el almacenamiento local <--setItem-->
const saveFormState = () => {
	const formState = {
		email: document.querySelector('input[name="email"]').value,
		message: document.querySelector('textarea[name="message"]').value,
	};

	localStorage.setItem('feedback-form-state', JSON.stringify(formState));
};

// Función para cargar el estado del formulario desde el almacenamiento local <--getItem-->
const loadFormState = () => {
	const savedState = localStorage.getItem('feedback-form-state');

	if (savedState) {
		const formState = JSON.parse(savedState);
		formState.email = document.querySelector('input[name="email"]').value;
		formState.message = document.querySelector('textarea[name="message"]').value;
	}
};

// Función para borrar el estado del formulario y los campos del almacenamiento local <--remoteItem-->
const clearFormState = () => {
	localStorage.removeItem('feedback-form-state');
	document.querySelector('input[name="email"]').value = '';
	document.querySelector('textarea[name="message"]').value = '';
};

// Función para manejar el envío del formulario
const handleSubmit = event => {
	event.preventDefault();

	const email = document.querySelector('input[name="email"]').value;
	const message = document.querySelector('textarea[name="message"]').value;

	// asignamos el local store dentro una varible para luego imprimirla en consola
	const storedFormState = JSON.parse(
		localStorage.getItem('feedback-form-state')
	);
	console.log(storedFormState);

	// limpiamos el estado del formulario
	clearFormState();
};

// Añadir evento input al formulario para guardar el estado del formulario en el almacenamiento local
const form = document.querySelector('.feedback-form');
form.addEventListener('input', _.throttle(saveFormState, 500));

// Cargar el estado del formulario al cargar la página
window.addEventListener('DOMContentLoaded', loadFormState);

// Añadir evento submit al formulario para manejar el envío
form.addEventListener('submit', handleSubmit);

