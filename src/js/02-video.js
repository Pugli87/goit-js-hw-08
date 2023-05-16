import Vimeo from '@vimeo/player'; // importacion de la biblioteca de vimeo
import _ from 'lodash'; // importatcion de la funcion throttle de lodash

const player = new Vimeo(document.querySelector('#vimeo-player')); // Hacemos referencia al id del iframe
/*
const Async = async () => {
	// funcion asincromatica
	try {
		const seconds = await player.getCurrentTime();
		localStorage.setItem('videoplayer-current-time', seconds); //Guardamos el tiempo dentro del almacenamiento local
	} catch (error) {
		console.error(
			'Error al obtener el tiempo actual de reproducción del video',
			error
		);
	}
};
*/
const Async = () => {
	// función asíncrona
	try {
		player.getCurrentTime().then(seconds => {
			localStorage.setItem('videoplayer-current-time', seconds); // Guardamos el tiempo dentro del almacenamiento local
		});
	} catch (error) {
		console.error(
			'Error al obtener el tiempo actual de reproducción del video',
			error
		);
	}
};

player.on('timeupdate', _.throttle(Async, 1000));

const currentTime = localStorage.getItem('videoplayer-current-time');
currentTime ? player.setCurrentTime(currentTime) : null;
