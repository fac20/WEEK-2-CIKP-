//link button to dom
const jokeButton = document.querySelector("#joke-button")
const jokeContainer = document.querySelector(".joke-text")


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

