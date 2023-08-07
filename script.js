//Unsplash API 
const count = 10;
const apiKey= 'l2Y2fs3FpIagmV3FA8HMMjGjaAano5xsBPt6_Iaslpw';
const apiUrl=`https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Recuperation des photos via l'api Unsplash
async function getPhotos(){
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    }catch (error){
        // on recupere l'erreur
    }
}

// On charge les photos
getPhotos();