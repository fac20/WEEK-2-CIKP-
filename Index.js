//link button to dom
const jokeButton = document.querySelector("#joke-button");
const jokeContainer = document.querySelector(".joke-text");

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
    // selecting gif-container and creating an image element to house the Giphy gif 
    let img = document.querySelector(".gif-container");
    let image = document.createElement("img");

    let APIKEY = "ZbO2nno31mS8mT8mX8LL6XjUjYgZ9pvP";
    //fetch statement has searchText variable and APIKEY variable 
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=${searchText}`
    )
    
      .then((response) => response.json())
      // selecting pathway to gif image an assigning it to giphyUrl
      .then((gif) => {
        let giphyUrl = gif.data[0].images.downsized_large.url;
        // assigning giphyUrl to image src 
        image.src = giphyUrl;
        //appending img to image tag
        img.appendChild(image);
      })

      .catch(console.error);
  })
  .catch((error) => console.log(error));


