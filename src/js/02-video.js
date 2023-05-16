import Vimeo from '@vimeo/player'; // importacion de la biblioteca de vimeo
import { throttle } from 'lodash'; // importatcion de la funccion throttle de lodash

const player = new Vimeo(document.querySelector('#vimeo-player')); // Hacemos referencia al id del iframe

const Async = async () => {
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

player.on('timeupdate', throttle(Async, 1000));

const currentTime = localStorage.getItem('videoplayer-current-time');
currentTime ? player.setCurrentTime(currentTime) : null;

/*                                  utilizando promesas
player.on(
	'timeupdate',
	throttle(() => {
		player.getCurrentTime().then(seconds => {
			localStorage.setItem('videoplayer-current-time', seconds);
			console.log('videoplayer-current-time', seconds);
		});
	}, 1000)
);
*/

/* 
if (currentTime !== '') {
player.setCurrentTime(currentTime);
}*/
