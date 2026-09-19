console.log("Mahadev Mahadev")

const guess = document.querySelector('#number')
const submit = document.querySelector('#submit')
const previousGuess = document.querySelector('#previous-guesses')
const attempt = document.querySelector('#attempt') 
const elements = document.querySelector(".elements")
const result = document.querySelector("#result")
const winning = document.querySelector("#winning-result")
const loosing = document.querySelector("#loosing-result")

const randomNumber = Math.floor(Math.random()*100) + 1
console.log(randomNumber)

let attemptLeft = 10
let previousGuessList = []
let gameWon = false 


function validateGuess(guessedNumber){
    if (isNaN(guessedNumber) || guessedNumber < 1 || guessedNumber > 100) {
        alert("Please enter a number between 1 and 100");
        return;
    }else if(previousGuessList.includes(guessedNumber)){
        alert("You already enter a value once.")
        return
    }
    previousGuessList.push(guessedNumber)
    attemptLeft -= 1
}

function checkGuess(guessedNumber){
    if(guessedNumber==randomNumber){
        gameWon = true
    }else{
        if(attemptLeft!=0){
            alert("worng Guess! Try again.")
        }
        
    }
    
}

function updateUI(){
    attempt.innerHTML = `Attempt Left: ${attemptLeft}`
    previousGuess.innerHTML = `previous Guess: ${previousGuessList.join(", ")}`
}

function displayResult(){
    if(gameWon==false && attemptLeft==0){
        result.style.display = "flex"
        loosing.innerHTML = `You Loose! Better Luck next Time, Correct number is ${randomNumber}`
        loosing.style.display = "flex"
        elements.style.display = "none"
        submit.disabled = true
    } else if(gameWon==true){
        result.style.display = "flex"
        winning.innerHTML = `You Win! Congratulation, Correct Guess is ${randomNumber}`
        winning.style.display = "flex"
        elements.style.display = "none"
        submit.disabled = true
    }
}


submit.addEventListener("click", ()=>{
    const guessedNumber = Number(guess.value)
    guess.value = ''
    guess.focus()
    validateGuess(guessedNumber)
    updateUI()
    checkGuess(guessedNumber)
    displayResult()
})

