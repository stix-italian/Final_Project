const pokeGrid = document.querySelector('.pokeGrid')
const loadButton = document.querySelector('.loadPokemon')
const fetchButton = document.querySelector('#fetchSelectedPokemon')
const newButton = document.querySelector('#newPokemon')
let count = 0

class Pokemon {
    constructor(name, abilities, moves, types, stats) {
        this.id = 900
        this.name = name
        this.abilities = abilities
        this.moves = moves
        this.types = types
        this.stats = stats
    }
}

loadButton.addEventListener('click', () => loadPage())
  
newButton.addEventListener('click', () => {
    let pokeName = prompt('What is the name of your new Pokemon?')
    let pokeHP = prompt('What is the HP of your Pokemon?')
    let pokeType = prompt('What is the type of your Pokemon')
    let pokeAttack = prompt('Pokemon Attack Points')
    let pokeDef = prompt('Pokemon Defense Points')
    let newPokemon = new Pokemon(
        pokeName,
        ['run', 'ravish'],
        ['undefined'],
        [
            {type:{
                name: pokeType,
                }
            }
        ],
        [
            {
                base_stat: pokeHP,
            },
            {
                base_stat: pokeAttack
            },
            {
                base_stat: pokeDef
            }
        ]
    )
    populatePokeCard(newPokemon)
})

fetchButton.addEventListener('click', () => {
    let pokeNameOrId = prompt("Enter Pokemon ID or Name:").toLowerCase()
    console.log(pokeNameOrId)
    getAPIData(`https://pokeapi.co/api/v2/pokemon/${pokeNameOrId}`).then(
        (data) => populatePokeCard(data)
    )
})

async function getAPIData(url) {
    try {
        const response = await fetch(url) // try getting data from the API at the url
        const data = await response.json() // convert the response into JSON
        return data // return the data from the fuction to whoever called it
    } catch (error) {
        // must have been an error
        console.log(error)
    }
}

function loadPage() {
    getAPIData(`https://pokeapi.co/api/v2/pokemon?limit=25&offset=`+count).then(
        async (data) => {
            for (const singlePokemon of data.results) {
                await getAPIData(singlePokemon.url).then(
                    (pokeData) => populatePokeCard(pokeData)
                )
            }
        }
    )
    count += 25
}

function populatePokeCard(singlePokemon) {
    let pokeScene = document.createElement('div')
    pokeScene.className = 'scene'
    let pokeCard = document.createElement('div')
    pokeCard.className = 'card'
    pokeCard.addEventListener('click', () => {
        pokeCard.classList.toggle('is-flipped')
    })
    pokeCard.appendChild(populateCardFront(singlePokemon))
    pokeCard.appendChild(populateCardBack(singlePokemon))
    pokeScene.appendChild(pokeCard)
    pokeGrid.appendChild(pokeScene)
}

function populateCardFront(pokemon) {
    console.log(pokemon)
    let pokeFront = document.createElement('div')
    pokeFront.className = 'card__face card__face--front'
    let frontLabel = document.createElement('p')
    frontLabel.textContent = pokemon.name
    let frontImage = document.createElement('img')
    frontImage.src = getImageFileName(pokemon)
    
    pokeFront.appendChild(frontLabel)
    pokeFront.appendChild(frontImage)
    frontImage.addEventListener(
        'error',
        (err) => (frontImage.src = 'images/pokeball.png'),
      )
    return pokeFront
}

function populateCardBack(pokemon) {
    let pokeBack = document.createElement('div')
    pokeBack.className = 'card__face card__face--back'
    let backLabel = document.createElement('p')
    backLabel.innerText = 'ID: ' + pokemon.id + '\nType: ' + pokemon.types[0].type.name + '\n'+ `Moves: ${pokemon.moves.length}` + '\nHP: ' + pokemon.stats[0].base_stat + '\nAttack: ' + pokemon.stats[1].base_stat + '\nDefense: ' + pokemon.stats[2].base_stat
    pokeBack.appendChild(backLabel)
    backLabel.addEventListener(
        'error',
        (err) => (backLabel.innerText = "Undefined"),
    )
    return pokeBack
}

function getImageFileName(pokemon) {
    let pokeId
    if (pokemon.id < 10) pokeId = `00${pokemon.id}`
    if (pokemon.id > 9 && pokemon.id < 100) pokeId = `0${pokemon.id}`
    if (pokemon.id > 99 && pokemon.id < 810) pokeId = pokemon.id
    if (pokemon.id === 900) {
        return `images/pokeball.png`
    }
    return `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${pokeId}.png`
}
