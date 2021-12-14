import { galleryItems } from './gallery-items.js'
// import * as basicLightbox from 'basiclightbox'


const galleryItemEl = galleryItems.map(galleryItem =>{
   
   return  `<div class="gallery__item">
   <a class="gallery__link" href="large-image.jpg">
   <img
   class="gallery__image"
   src="${galleryItem.preview}" 
   data-source="${galleryItem.original}"
   alt="${galleryItem.description}"
   />
    </a>
    </div>` }).join("");
    document.querySelector('.gallery').innerHTML = galleryItemEl;
    
   //  const  urlEl = document.querySelector('.gallery__image')  
    
    const galleryBox = document.querySelector(".gallery")
    
    
    galleryBox.addEventListener('click', galleryBoxClick)
    
    function galleryBoxClick(event){
       event.preventDefault()
       instance.element().querySelector('img').src = event.target.dataset.source;
       instance.show();
      };
      
      const instance = basicLightbox.create(`
      <img src=""/>`,{
         onShow: () =>{
            window.addEventListener('keydown', KeydownEscape);
         },
         onClose:() =>{
            window.removeEventListener('keydown', KeydownEscape);
            // console.log(instance)
      }, 
    });

    function KeydownEscape(event){
       if(event.key === "Escape"){
           instance.onClose();
       }
      
       return;
    }

