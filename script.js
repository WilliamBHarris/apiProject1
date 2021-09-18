// Global Variables
let baseUrl = "https://pokeapi.co/api/v2/pokemon?limit=151";
let infoUrl = 'https://pokeapi.co/api/v2/characteristic/'
let mainBox = document.getElementById("mainSection");
let boxOne = document.querySelector(".boxOne");
let boxTwo = document.querySelector(".boxTwo");
let searchBtn = document.getElementById("searchBtn");


// First display

 boxOne.style.display = 'none';
 boxTwo.style.display = 'none';

document.getElementById("searchBtn").addEventListener("click", apiFetch);

//Get the info from API and JSONify
async function apiFetch() {
  const response = await fetch(baseUrl);
  const json = await response.json();
  apiResults(json);
}
// create a function to give some results from the collected data

let apiResults = (data) => {
  let data1 = data.results;
  let data2 = data.results[Math.floor(Math.random() * data1.length)].url;
  
  
  async function infoFetch() {
    const pokeInfo = await fetch(data2);
    const returnedData = await pokeInfo.json();
    console.log(returnedData)
    let pokeImg = returnedData.sprites.front_shiny
    console.log(pokeImg);

    
    
    let injectImg = document.getElementById('pokeImg')
    let imgValue = returnedData.species.name;
    let abilitiesData = returnedData.abilities[0,1].ability.name;

    
    console.log(abilitiesData);
    injectImg.src = pokeImg;
    injectImg.className = 'pokeImg';


    let dataName = imgValue;

    let pokeAb = document.createElement('p')
    pokeAb.className = 'ability'
    pokeAb.innerText = `Ability: ${abilitiesData}`;
    pokeAb.style = 'font-size: 2rem; text-align: center; padding-top: 10px;';
 
  

    let pokeName = document.createElement("p");
    pokeName.className =  'pokeName'
    pokeName.innerText = dataName;
    pokeName.style = "font-size: 2rem";
  
    let pokeDetails = document.createElement('p');
    pokeDetails.className = 'pokeDetails';
    pokeDetails.innerText = 'poke data'
    pokeInfo.style = 'font-size: 1rem';
  
      // Append Info
  
  
    boxTwo.appendChild(pokeName);
    boxTwo.appendChild(pokeAb);
  
  
    document.querySelector('#searchBtn').addEventListener("click", () => {
      boxTwo.removeChild(pokeName);
      boxTwo.removeChild(pokeAb);
      boxTwo.style.display = 'block';
      boxOne.style.display = 'block';
    });
    
  }
  
  infoFetch();

 


};

// apiFetch();
