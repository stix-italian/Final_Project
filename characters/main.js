import { people } from '../data/people.js'
import { getLastNumber, removeChildren } from '../utils/index.js'

const mainElement = document.querySelector('#main')

const mainHeader = document.createElement('header')

document.body.insertBefore(mainHeader, mainElement)

const allButton = document.createElement('button')
allButton.textContent='All Characters'
mainHeader.appendChild(allButton)
allButton.addEventListener('click', ()=> populateDOM(allCharacters))

const maleButton = document.createElement('button')
maleButton.textContent = 'Male Characters'
mainHeader.appendChild(maleButton)
maleButton.addEventListener('click', () => populateDOM(maleCharacters))

const femaleButton = document.createElement('button')
femaleButton.textContent = 'Female Characters'
mainHeader.appendChild(femaleButton)
femaleButton.addEventListener('click', () => populateDOM(femaleCharacters))

const othersButton = document.createElement('button')
othersButton.textContent = 'Other Characters'
mainHeader.appendChild(othersButton)
othersButton.addEventListener('click', () => populateDOM(otherCharacters))

const planetSelect = document.createElement('select')
console.log('what the hell')
planetSelect.id = "planSelect"
planetSelect.textContent = 'Characters From'
mainHeader.appendChild(planetSelect)
planetSelect.addEventListener("change",planetFilter())


const discButton = document.createElement('option')
discButton.textContent = 'Characters From..'
discButton.value = ''
planetSelect.appendChild(discButton)

const tatButton = document.createElement('option')
tatButton.textContent = 'Characters From Tatooine'
tatButton.value = 'tat'
planetSelect.appendChild(tatButton)
// tatButton.addEventListener('click', () => populateDOM(TatCharacters))



const maleCharacters = people.filter(person => person.gender === 'male')
const femaleCharacters = people.filter(person => person.gender === 'female')
const allCharacters = people.filter(person => person.gender !== '')
const TatCharacters = people.filter(person => person.homeworld === 'https://swapi.co/api/planets/1/')
const otherCharacters = people.filter(person => {
    if (person.gender === 'n/a' ||
        person.gender === 'hermaphrodite') {
        return person
    }
const allCharacters = people.filter(person => person.gender === 'n/a')
})

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
    console.log('It calls to me')
    var val = document.getElementById('planSelect').value
    console.log('val = '+val)
    if(val === 'tat'){
        console.log("It's Working!!")
        const TatCharacters = people.filter(person => person.homeworld === 'https://swapi.co/api/planets/1/')
        populateDOM(TatCharacters)
    }
}

populateDOM(allCharacters)