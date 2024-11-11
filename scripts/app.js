const container = document.querySelector('.container');
const movieTitle = document.querySelector('.userInputTitle');
const moviePosterUrl = document.querySelector('.userInputPosterUrl');
const movieReleaseYear = document.querySelector('.userInputReleaseYear'); // Ilmumisaasta
const btn = document.querySelector('.button');
const movieTitleToDisplay = document.querySelector('.favoriteMovieTitle');
const movieReleaseYearToDisplay = document.querySelector('.favoriteMovieYear'); // Ilmumisaasta

let titleInStorage = localStorage.getItem('title'); // kontrollib kas ls-s on andmed/väärtused salvestatud, kasutab võtit (title) andmete tuvastamiseks
let imageUrlInStorage = localStorage.getItem('imageUrl');
let yearInStorage = localStorage.getItem('year'); // Ilmumisaasta

if(titleInStorage && imageUrlInStorage && yearInStorage) { // mõlemad peavad olema õiged, et kood toimiks edasi. Ilmumisaasta- yearInStorage
    movieTitleToDisplay.textContent = titleInStorage;
    movieReleaseYearToDisplay.textContent = yearInStorage; // Ilmumisaasta
    container.style.backgroundImage = `linear-gradient(rgba(75, 75, 100, 0.651), rgba(53, 50, 50, 0.541)), 
    url('${imageUrlInStorage}')`; // süstib imageUrlInStorage muutuja väärtuse
}



btn.addEventListener('click', () => { // ootab klikki, läheb edasi
    let movieTitleInput = movieTitle.value; //näitab konsoolis kasutaja sisestatud andmeid, ajutiselt, mitte local storages
    let posterUrlInput = moviePosterUrl.value;
    let releaseYearInput = movieReleaseYear.value; // Ilmumisaasta
    localStorage.setItem('title', movieTitleInput); //kutsub välja localstorage, annab võtme (title) ja annab väärtuse
    localStorage.setItem('imageUrl', posterUrlInput);
    localStorage.setItem('year', releaseYearInput); // Ilmumisaasta
    movieTitleToDisplay.textContent = movieTitleInput; // kutsub välja omaduse textContent, kuhu salvestatakse teksti
    movieReleaseYearToDisplay.textContent = releaseYearInput; // Ilmumisaasta
    container.style.backgroundImage = `linear-gradient(rgba(75, 75, 100, 0.651), rgba(53, 50, 50, 0.541)),
    url('${posterUrlInput}')`;
    //css-i omadused on kättesaadavad js-ile. backtick ` tekstiline muutuja (string), võtab muutujasse salvestatud andmed
    movieTitle.value = ''; // teeb lahtri tühjaks
    moviePosterUrl = '';
    movieReleaseYear = ''; // Ilmumisaasta

});