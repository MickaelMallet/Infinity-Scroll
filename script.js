const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');


let photosArray = [];
//Unsplash API 
const count = 10;
const apiKey= 'l2Y2fs3FpIagmV3FA8HMMjGjaAano5xsBPt6_Iaslpw';
const apiUrl=`https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Creation des elements pour les photos et ajouts dans le DOM
function displayPhotos() {
    // On parcours le tableau des photos
    photosArray.forEach((photo) => {
        // On cree un element <a> pour lier vers Unsplash
        const item = document.createElement('a');
        item.setAttribute('href', photo.links.html);
        item.setAttribute('target', '_blank');
        // On cree un element <img> pour les photos
        const img = document.createElement('img');
        img.setAttribute('src', photo.urls.regular);
        img.setAttribute('alt', photo.alt_description);
        img.setAttribute('title', photo.alt_description);
        // On ajoute l'element <img> dans l'element <a>
        item.appendChild(img);
        // On ajoute l'element <a> dans l'element <imageContainer>
        imageContainer.appendChild(item);
    });

}

// Recuperation des photos via l'api Unsplash
async function getPhotos(){
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
    }catch (error){
        // on recupere l'erreur
    }
}

// On charge les photos
getPhotos();