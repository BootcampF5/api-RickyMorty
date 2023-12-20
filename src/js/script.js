/* fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => console.log(data.results)); */

const url = 'https://rickandmortyapi.com/api/character';
const cardsContainer = document.getElementById('cards-container')

const getDataFetch = () => {
    fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then((data) => {
            printCard(data)
        })
}

const getDataAsyncAwait = async () => {
    const reponse = await fetch("https://rickandmortyapi.com/api/character")
    const data = await reponse.json(); 
    printCard(data);
}

const printCard = (data) => {
    let characters = data.results;
    //console.log(characters)
    characters.map(info => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML =
            `
        <div class="img-container">
            <img class="imagen" src="${info.image}" alt="" id="img">
        </div>
        <div class="text-container">
            <p class="text">${info.name}</p>
            <p class="text">Status: ${info.status}</p>
            <p class="text">Especie: ${info.species}</p>
        </div>
        `
        cardsContainer.appendChild(card)
    }
    )
}

getDataFetch()
//getDataAsyncAwait()

