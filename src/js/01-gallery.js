import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

const action = (imageAction) => {
    imageAction.preventDefault();
}

const  createGallery = (items) =>{
    return items.map((item) =>
     `<li class='gallery__item'>
        <a class='gallery__link' href='${item.original}'>
            <img
                class='gallery__image'
                src= '${item.preview}'
                alt= '${item.description}'
            />
        </a>  
    </li>`).join('');
}

const addGallery = createGallery(galleryItems);
gallery.innerHTML = addGallery;

let lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});
console.log(lightbox);
