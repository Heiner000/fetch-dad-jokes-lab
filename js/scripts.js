const dadJokeUrl = "https://icanhazdadjoke.com/"
const options = {
    headers: {
        Accept: "application/json"
    }
}

// fetch(url, options object)

fetch(dadJokeUrl, options)
    .then(rawJokeData => rawJokeData.json())
    .then(console.log)
    .catch(console.warn)

document.addEventListener("DOMContentLoaded", () => {
    const jokeDiv = document.querySelector("#jokeDiv")
    const fetchJokeButton = document.querySelector("#fetchJokeButton")
    // console.log(jokeDiv, fetchJokeButton)
    fetchJokeButton.addEventListener("click", () => {
        // clear out everything in the jokeDiv
        while(jokeDiv.firstChild) {
            jokeDiv.removeChild(jokeDiv.firstChild)
        }
        // fetch a joke
        fetch(dadJokeUrl, options)
            .then(taco => taco.json())
            .then(jokeData => {
                // make a new p tag
                const newP = document.createElement("p")
                // set innerText of p tag to be fetched joke
                newP.innerText = jokeData.joke
                // mount the p tag on the joke div
                jokeDiv.append(newP)
            })
            .catch(console.warn)        
    })
})


/*
const dadUrl = "https://icanhazdadjoke.com"

document.querySelector("#jokeButton").addEventListener("click", (e) => { 
    fetch(dadUrl, {
        headers: {
          'Accept': 'application/json',
          "User-Agent": "https://github.com/Heiner000/fetch-dad-jokes-lab"
        }
        })
        .then((responseData) => responseData.json())
    
        .then(jsonData => {
            let jokeContainer = document.querySelector("#jokeContainer")
            while(jokeContainer.firstChild) {
                jokeContainer.removeChild(jokeContainer.firstChild)
            }

            let jokeID = jsonData.id
            console.log(jokeID)

            console.log(jsonData)
            let randomJoke = jsonData.joke
            let jokeDiv = document.createElement("div")
            jokeDiv.innerText = randomJoke
            document.querySelector("#jokeContainer").append(jokeDiv)

            let jokeImage = document.createElement("img")
            jokeImage.src="https://icanhazdadjoke.com/j/" + jokeID + ".png"
            document.querySelector("#jokeContainer").append(jokeImage)
            })


            .catch(error => {
                console.log("error  :(  ")
            })
        })
*/
