import { people } from '../data/people.js'
import { getLastNumber, removeChildren } from '../utils/index.js'

const mainElement = document.querySelector('#main')

const mainHeader = document.createElement('header')

document.body.insertBefore(mainHeader, mainElement)

// Create Select button
const planetSelect = document.createElement('select')
planetSelect.id = "planSelect"
planetSelect.textContent = 'Characters From'
mainHeader.appendChild(planetSelect)
planetSelect.addEventListener("change",planetFilter)


// Select dropdown options
const allButton = document.createElement('option')
allButton.textContent='All Characters'
allButton.value = 'all'
planetSelect.appendChild(allButton)

const malButton = document.createElement('option')
malButton.textContent = 'Male Characters'
malButton.value = 'male'
planetSelect.appendChild(malButton)

const femaleButton = document.createElement('option')
femaleButton.textContent = 'Female Characters'
femaleButton.value = 'female'
planetSelect.appendChild(femaleButton)

const othersButton = document.createElement('option')
othersButton.textContent = 'Other Characters'
othersButton.value = 'other'
planetSelect.appendChild(othersButton)

const ep1Button = document.createElement('option')
ep1Button.textContent = 'Episode 1 Characters'
ep1Button.value = 'ep1'
planetSelect.appendChild(ep1Button)

const ep2Button = document.createElement('option')
ep2Button.textContent = 'Episode 2 Characters'
ep2Button.value = 'ep2'
planetSelect.appendChild(ep2Button)

const ep3Button = document.createElement('option')
ep3Button.textContent = 'Episode 3 Characters'
ep3Button.value = 'ep3'
planetSelect.appendChild(ep3Button)

const ep4Button = document.createElement('option')
ep4Button.textContent = 'Episode 4 Characters'
ep4Button.value = 'ep4'
planetSelect.appendChild(ep4Button)

const ep5Button = document.createElement('option')
ep5Button.textContent = 'Episode 5 Characters'
ep5Button.value = 'ep5'
planetSelect.appendChild(ep5Button)

const ep6Button = document.createElement('option')
ep6Button.textContent = 'Episode 6 Characters'
ep6Button.value = 'ep6'
planetSelect.appendChild(ep6Button)

const ep7Button = document.createElement('option')
ep7Button.textContent = 'Episode 7 Characters'
ep7Button.value = 'ep7'
planetSelect.appendChild(ep7Button)



const allCharacters = people.filter(person => person.gender !== '')




// functions
function populateDOM(characters) {
    removeChildren(mainElement)
    characters.forEach((person) => {
        const charFigure = document.createElement('figure')
        const charImg = document.createElement('img')
        let charNum = getLastNumber(person.url)
        charImg.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`
        const charCaption = document.createElement('figcaption')
        charCaption.textContent = person.name
        charFigure.appendChild(charImg)
        charFigure.appendChild(charCaption)

        mainElement.appendChild(charFigure)
    })
}

function planetFilter(){
    var val = document.getElementById('planSelect').value
    console.log('val = '+val)
    if(val === 'all'){
        const allCharacters = people.filter(person => person.gender !== '')
        populateDOM(allCharacters)
    }
    if(val === 'male'){
        const maleCharacters = people.filter(person => person.gender === 'male')
        populateDOM(maleCharacters)
    }
    if(val === 'female'){
        const femaleCharacters = people.filter(person => person.gender === 'female')
        populateDOM(femaleCharacters)
    }
    if(val === 'other'){
        const otherCharacters = people.filter(person => {
            if (person.gender === 'n/a' ||
                person.gender === 'hermaphrodite') {
                return person
            }
        const allCharacters = people.filter(person => person.gender === 'n/a')
        })
        populateDOM(otherCharacters)
    }


    // Episode Options
    if(val === 'ep1'){
        console.log("whaaaaa")
        const ep1Characters = people.filter(person => {
            if (person.films.includes (`https://swapi.co/api/films/4/`)){
                return person
            }
        })
        populateDOM(ep1Characters)
    }

    if(val === 'ep2'){
        console.log("whaaaaa")
        const ep2Characters = people.filter(person => {
            if (person.films.includes (`https://swapi.co/api/films/5/`)){
                return person
            }
        })
        populateDOM(ep2Characters)
    }

    if(val === 'ep3'){
        const ep3Characters = people.filter(person => {
            if (person.films.includes (`https://swapi.co/api/films/6/`)){
                return person
            }
        })
        populateDOM(ep3Characters)
    }

    if(val === 'ep4'){
        const ep4Characters = people.filter(person => {
            if (person.films.includes (`https://swapi.co/api/films/1/`)){
                return person
            }
        })
        populateDOM(ep4Characters)
    }

    if(val === 'ep5'){
        const ep5Characters = people.filter(person => {
            if (person.films.includes (`https://swapi.co/api/films/2/`)){
                return person
            }
        })
        populateDOM(ep5Characters)
    }

    if(val === 'ep6'){
        const ep6Characters = people.filter(person => {
            if (person.films.includes (`https://swapi.co/api/films/3/`)){
                return person
            }
        })
        populateDOM(ep6Characters)
    }

    if(val === 'ep7'){
        const ep7Characters = people.filter(person => {
            if (person.films.includes (`https://swapi.co/api/films/7/`)){
                return person
            }
        })
        populateDOM(ep7Characters)
    }
}

populateDOM(allCharacters)