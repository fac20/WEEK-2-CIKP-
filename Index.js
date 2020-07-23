//link button to dom
const jokeButton = document.querySelector("#joke-button")
const jokeContainer = document.querySelector(".joke-text")
console.log(jokeContainer.textContent)

/*
//on click, fetch from url
fetch("https://icanhazdadjoke.com/",{
    headers: {
        'Accept': 'application/json'
      },
})
  .then(response => response.json())
  .then(dataObj => {
      jokeContainer.textContent = dataObj.joke;
    })
  .catch(error => console.log(error));
 ;
*/


let jokeObj;

 async function fetchJoke() {
    try {
        const response = await fetch("https://icanhazdadjoke.com/", {
            method: 'GET',
            headers: {
              'Accept': 'application/json'
            }
        });
        const obj = await response.json();
        return obj;
    } catch (error) {
        console.error(error);
    }
}

async function renderJoke() {
  jokeObj = await fetchJoke();
  jokeContainer.textContent = jokeObj.joke;
}

let img = document.querySelector('.gif-container');
let image = document.createElement('img')

let APIKEY = 'ZbO2nno31mS8mT8mX8LL6XjUjYgZ9pvP'

async function fetchGif() {
  try {
    await fetchJoke()
    await renderJoke()
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=${jokeObj.joke}`)

  const obj = await response.json() 
 return obj;
  }
  catch (error) {
    console.error(error);
  }
}

async function renderGif() {
  let gifObj = await fetchGif()
  giphyUrl = gifObj.data[0].images.downsized_large.url
  image.src = giphyUrl 
  img.appendChild(image)
}

fetchGif()
renderGif()

