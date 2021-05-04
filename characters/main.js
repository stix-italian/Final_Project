import { people } from '../data/people.js'
import { getLastNumber, removeChildren } from '../utils/index.js'

const mainElement = document.querySelector('#main')

const mainHeader = document.createElement('header')

document.body.insertBefore(mainHeader, mainElement)

// const allButton = document.createElement('button')
// allButton.textContent='All Characters'
// mainHeader.appendChild(allButton)
// allButton.addEventListener('click', ()=> populateDOM(allCharacters))

// const maleButton = document.createElement('button')
// maleButton.textContent = 'Male Characters'
// mainHeader.appendChild(maleButton)
// maleButton.addEventListener('click', () => populateDOM(maleCharacters))


// const head = document.createElement('p')
// head.textContent = "Display"
// mainHeader.appendChild(head)

const planetSelect = document.createElement('select')
planetSelect.id = "planSelect"
planetSelect.textContent = 'Characters From'
mainHeader.appendChild(planetSelect)
planetSelect.addEventListener("change",planetFilter)


// const discButton = document.createElement('option')
// discButton.textContent = 'Characters From..'
// discButton.value = ''
// planetSelect.appendChild(discButton)

const allButton = document.createElement('option')
allButton.textContent='All Characters'
allButton.value = 'all'
planetSelect.appendChild(allButton)
// allButton.addEventListener('click', ()=> populateDOM(allCharacters))


const malButton = document.createElement('option')
malButton.textContent = 'Male Characters'
malButton.value = 'male'
planetSelect.appendChild(malButton)

const femaleButton = document.createElement('option')
femaleButton.textContent = 'Female Characters'
femaleButton.value = 'female'
planetSelect.appendChild(femaleButton)
// femaleButton.addEventListener('click', () => populateDOM(femaleCharacters))

const othersButton = document.createElement('option')
othersButton.textContent = 'Other Characters'
othersButton.value = 'other'
planetSelect.appendChild(othersButton)
// othersButton.addEventListener('click', () => populateDOM(otherCharacters))


const tatButton = document.createElement('option')
tatButton.textContent = 'Characters From Tatooine'
tatButton.value = 'tat'
planetSelect.appendChild(tatButton)
// tatButton.addEventListener('click', () => populateDOM(TatCharacters))







const allCharacters = people.filter(person => person.gender !== '')


// const TatCharacters = people.filter(person => {//person.homeworld === "https://swapi.co/api/planets/1/")
//     for(i = 0; i < person.films.length; i++){
//         if (person.films[i] === 1) return person
//     }
//     const allCharacters = people.filter(person => person.gender === 'n/a')
// })

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

    if(val === 'tat'){
        const TatCharacters = people.filter(person => person.homeworld === 'https://swapi.co/api/planets/1/')
        populateDOM(TatCharacters)
    }
}

populateDOM(allCharacters)