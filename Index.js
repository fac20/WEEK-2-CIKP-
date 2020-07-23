

//link button to dom
const jokeButton = document.querySelector("#joke-button");
const jokeContainer = document.querySelector(".joke-text");
let APIKEY = "ZbO2nno31mS8mT8mX8LL6XjUjYgZ9pvP";

// selecting gif-container and creating an image element to house the Giphy gif 
let img = document.querySelector(".gif-container");
let image = document.createElement("img");
const happyButton = document.querySelector("#happy-button");
const loader = document.querySelector('#load-circle');
console.log(loader)

//on click, fetch from url
fetch("https://icanhazdadjoke.com/", {
  headers: {
    Accept: "application/json",
  },
})
// converting obj response to json
  .then((response) => response.json())
  // selecting joke text content 
  .then((dataObj) => {
    jokeContainer.textContent = dataObj.joke;
    // returning dataObj.joke so it can be used in n3xt then statemnet 
    return dataObj.joke;
  })
  /* next then statement has dataObj.joke as searchText due to
   previous return statement. It is then followed by  the fetch statement for the Giphy API */
  .then((searchText) => {

    //fetch statement has searchText variable and APIKEY variable 
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=${searchText}&rating=pg`
    )
    
      .then((response) => response.json())
      // selecting pathway to gif image an assigning it to giphyUrl
      .then((gif) => {
        loader.style.display = 'none';
        let giphyUrl = gif.data[0].images.downsized_large.url;
        // assigning giphyUrl to image src 
        image.src = giphyUrl;
        //appending img to image tag
        img.appendChild(image);
        image.style.borderRadius = '20px';
        image.style.boxShadow = '2px 2px 2px 2px hsl(233, 67%, 14%)';
       
      })

      .catch(console.error);
  })
  .catch((error) => console.log(error));
    


//clicking happyface button calls page reload
document.getElementById("happy-button").addEventListener("click", event => {
location.reload(true);
});


// without () => for the location.reload() the function will constantly run automatically
// happyButton.addEventListener("click", () => location.reload());

let unhappyButton = document.querySelector("#unhappy");

const searchForm = document.querySelector(".search-form");

unhappyButton.addEventListener("click", () => searchForm.classList.remove("hidden") );


<<<<<<< HEAD
const submitButton = document.querySelector("#submit-button")

=======

const submitButton = document.querySelector("#submit-button")

document.addEventListener("keypress", (e) => {
  if (e.keyCode == 13) {
    e.preventDefault();
}
})

>>>>>>> e4898e726ef665ce60e62c7e452e321c06ddc67f

submitButton.addEventListener("click", (event) => {

 
  event.preventDefault();

  let searchBarText = document.querySelector("#search-bar").value

    //fetch statement has searchText variable and APIKEY variable 
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=${searchBarText}&rating=pg`
    )
    .then( response => response.json())
    .then( (gif) => {
      let giphyUrl = gif.data[0].images.downsized_large.url;
      // assigning giphyUrl to image src 
      image.src = giphyUrl;
      //appending img to image tag
      img.appendChild(image);
      
    })
    .catch((error) => console.log(error));
    // .catch(console.error);
    // .catch((error) => console.log(error));

})
<<<<<<< HEAD
  


=======
  
>>>>>>> e4898e726ef665ce60e62c7e452e321c06ddc67f
