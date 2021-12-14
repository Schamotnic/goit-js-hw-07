import { galleryItems } from './gallery-items.js'
// import * as basicLightbox from 'basiclightbox'


const galleryItemEl = galleryItems.map(galleryItem =>{
   
   return  `
   <a class="gallery__item" href="${galleryItem.original}">
   <img
   class="gallery__image"
   src="${galleryItem.preview}" 
   alt="${galleryItem.description}"
   />
    </a>
    ` }).join("");
    document.querySelector('.gallery').innerHTML = galleryItemEl;
    
  
    
    const gallery = new SimpleLightbox('.gallery a',  {
       captionsData: 'alt',
       captionDelay: 250,
       captionPosition: 'bottom',
      });
     
      

   
      

            
           