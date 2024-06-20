console.log("HELLO X-RAY PLATOON!")
// Your function(s) should go here that will interact with the webpage or DOM

// declares a variable and set it to random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100);

// function 
const guessingGame = (num) => {
    console.log(num)
        if (num === randomNumber) {
            document.getElementById('h1').innerText = "Hooray, you won!"
            solved = true
        }
        else if (num > randomNumber) {
            document.getElementById('h1').innerText = "Your guess is too high"
        }
        else if (num < randomNumber) {
            document.getElementById('h1').innerText = "Your guess is too low"
        }
    // }
}

document.getElementById('button').onclick = () => {
    let guessNum = Number(document.getElementById('input').value);
    guessingGame(guessNum)
    document.getElementById('numbers').innerText += guessNum + "\n"
}
