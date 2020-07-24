//link buttons and containers to dom
const jokeButton = document.querySelector("#joke-button");
const jokeContainer = document.querySelector(".joke-text");
const submitButton = document.querySelector("#button-submit");
const APIKEY = "ZbO2nno31mS8mT8mX8LL6XjUjYgZ9pvP";
const searchRevealButton = document.querySelector("#button-reveal-search");
const randomButton = document.querySelector("#button-random");
const searchForm = document.querySelector(".search-form");
const loader = document.querySelector("#load-circle");

// selecting gif-container and creating an image element to house the Giphy gif
const gifContainer = document.querySelector(".gif-container");
const image = document.createElement("img");

function appendGif(obj) {
  let giphyUrl = obj.data[0].images.downsized_large.url;
  let giphyTitle = obj.data[0].title;
  loader.style.display = "none";
  // assigning giphyUrl to image src and relevant giphy title
  image.src = giphyUrl;
  image.alt = giphyTitle;
  image.title = giphyTitle;
  image.classList.add("box-style");
  //appending image to gifContainer
  gifContainer.appendChild(image);
}

function giphyFetch(searchString) {
  fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=${searchString}&rating=pg`
  )
    .then((response) => response.json())
    .then((gif) => {
      appendGif(gif);
    })
    .catch((error) => console.log(error));
}

//on load, fetch from url
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
    giphyFetch(searchText);
  });

//clicking random button calls page reload
randomButton.addEventListener("click", (event) => {
  location.reload(true);
});

searchRevealButton.addEventListener("click", () =>{
  searchForm.classList.remove("hidden")
  document.location.href = "#search-form-id";
}
);

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  const searchBarText = document.querySelector("#search-bar").value;
  giphyFetch(searchBarText);
});

searchForm.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    const searchBarText = document.querySelector("#search-bar").value;
    giphyFetch(searchBarText);
  }
});
