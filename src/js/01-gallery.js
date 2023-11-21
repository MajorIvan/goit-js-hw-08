import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const container = document.querySelector('.gallery');

container.insertAdjacentHTML('beforeend', createMarkup(galleryItems));
container.style.justifyItems = 'center';
container.style.listStyle = 'none';

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => 
        `<li class="gallery_item">
            <a class="gallery_link" href="${original}">
                <img 
                    class="gallery_image" 
                    src="${preview}" 
                    alt="${description}" 
                    style="width: 100%; height: 100%;"
                />
            </a>
        </li>
    `).join('');
};

const gallery = new SimpleLightbox('.gallery_item a', {
    captionsData: 'alt',
    captionDelay: 250,
    overlayOpacity: 0.5
});

gallery.next()