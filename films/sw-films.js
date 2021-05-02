import { films } from '../data/films.js'
import { getLastNumber } from '../utils/index.js'


let filmList = document.querySelector('#filmList')


for (let i = 0; i < films.length; i++) {

    const foundFilm = films.find(film => getLastNumber(film.url) === (i + 1).toString())
    let imgLink = document.createElement('a')
    imgLink.target = "_blank"
    switch (foundFilm.episode_id){
        case 1:
            imgLink.href = "https://www.imdb.com/title/tt0120915/"
            break;
        case 2:
            imgLink.href = "https://www.imdb.com/title/tt0121765/"
            break;
        case 3:
            imgLink.href = "https://www.imdb.com/title/tt0121766/"
            break;
        case 4:
            imgLink.href = "https://www.imdb.com/title/tt0076759/"
            break;
        case 5:
            imgLink.href = "https://www.imdb.com/title/tt0080684/"
            break;
        case 6:
            imgLink.href = "https://www.imdb.com/title/tt0086190/"
            break;
        case 7:
            imgLink.href = "https://www.imdb.com/title/tt2488496/"
            break;
    }

    let posterFig = document.createElement('figure')
    let figImg = document.createElement('img')
    figImg.src = `https://starwars-visualguide.com/assets/img/films/${i + 1}.jpg`
    let figCaption = document.createElement('figcaption')
    let figCaption2 = document.createElement('figcaption')
    let figCaption3 = document.createElement('figcaption')
    let release = foundFilm.release_date
    
    

    figCaption.textContent = foundFilm.title
    figCaption2.textContent = "Director: "+foundFilm.director
    figCaption3.textContent = "Release: "+release.slice(5,8)+release.slice(8,11)+release[4]+release.slice(0,4)

    posterFig.appendChild(figImg)
    posterFig.appendChild(figCaption)
    posterFig.appendChild(figCaption2)
    posterFig.appendChild(figCaption3)
    imgLink.appendChild(posterFig)

    


    filmList.appendChild(imgLink)
}
