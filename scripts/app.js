const container = document.querySelector('.container');
const movieTitle = document.querySelector('.userInputTitle');
const moviePosterUrl = document.querySelector('.userInputPosterUrl');
const btn = document.querySelector('.button');
const movieTitleToDisplay = document.querySelector('.favoriteMovieTitle');

let titleInStorage = localStorage.getItem('title'); // kontrollib kas ls-s on andmed/väärtused salvestatud, kasutab võtit (title) andmete tuvastamiseks
let imageUrlInStorage = localStorage.getItem('imageUrl');

if(titleInStorage && imageUrlInStorage) { // mõlemad peavad olema õiged, et kood toimiks edasi
    movieTitleToDisplay.textContent = titleInStorage;
    container.style.backgroundImage = `linear-gradient(rgba(75, 75, 100, 0.651), rgba(53, 50, 50, 0.541)), 
    url('${imageUrlInStorage}')`; // süstib imageUrlInStorage muutuja väärtuse
}



btn.addEventListener('click', () => { // ootab klikki, läheb edasi
    let movieTitleInput = movieTitle.value; //näitab konsoolis kasutaja sisestatud andmeid, ajutiselt, mitte local storages
    let posterUrlInput = moviePosterUrl.value;
    localStorage.setItem('title', movieTitleInput); //kutsub välja localstorage, annab võtme (title) ja annab väärtuse
    localStorage.setItem('imageUrl', posterUrlInput);
    movieTitleToDisplay.textContent = movieTitleInput; // kutsub välja omaduse textContent, kuhu salvestatakse teksti
    container.style.backgroundImage = `linear-gradient(rgba(75, 75, 100, 0.651), rgba(53, 50, 50, 0.541)),
    url('${posterUrlInput}')`;
    //css-i omadused on kättesaadavad js-ile. backtick ` tekstiline muutuja (string), võtab muutujasse salvestatud andmed
    movieTitle.value = ''; // teeb lahtri tühjaks
    moviePosterUrl = '';

});