
let searchText = document.querySelector('.joke');
let img = document.querySelector('.gif-container');
let image = document.createElement('img')

let APIKEY = 'ZbO2nno31mS8mT8mX8LL6XjUjYgZ9pvP'
fetch(`https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=${searchText}`)

// {
//     headers:
// }

.then(response => response.json()) 
.then(
    gif => {
    let giphyUrl = gif.data[0].images.downsized_large.url
image.src = giphyUrl 
img.appendChild(image)
}
)
.catch(console.error)
// Input text string from dad joke
// select the element id/class get the innerhtml/value
//img.src = content.data[0].images.downsized.url;
//


// `${giphy_URL}${giphy_key}&q=${movieTitle}&limit=1&offset=0&rating=G&lang=en`;

// fetch(` https://pokeapi.co/api/v2/pokemon/${name}`)
// .then(response => {
//             if (!response.ok) throw new Error(response.status);
//             return response.json();
//           })
// .then(pokemonData => {
//             const heading = document.createElement("h2");
//             heading.textContent = pokemonData.name;
//             const image = document.createElement("img");
//             image.src = pokemonData.sprites.front_default;
//             image.alt = "";

//             output.appendChild(heading);
//             output.appendChild(image);
// })