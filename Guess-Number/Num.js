let randomNumber = parseInt(Math.random() * 100 +1)
console.log(randomNumber);
const userInput =  document.querySelector('#guessField')
const submit =  document.querySelector('#subt')
const guessSlot = document.querySelector('.guesses')
const lastResult = document.querySelector('.lastResult')
const lowOrhi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')
const p = document.createElement('p')
let previousGuess = []
let numberGuess = 1;
let playGame = true;
if (playGame) {
    submit.addEventListener('click',(e)=>{
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGusses(guess)   // PASSING THE GUESS NUMBER TO VALIDATE GUESSES
    })
}
function validateGusses(guess){
    if(isNaN(guess)){
        alert('Please entre a valid number')
    } else if (guess<1) {
        alert('Please entre a number more than 1')
    } else if(guess>100){
        alert('please entre a number less than 100')
    } else{
        previousGuess.push(guess);  //IF THE PREVIOUS GUESS IS THE LAST ATTEMPT THEN,
        if (numberGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over! Random number was ${randomNumber}`);

            endGame();
        } else{                   // if number is shorter than 11 then else work
            displayGuess(guess); // passing the value to display guess
            checkGuess(guess);
        }
    }
}
function checkGuess(guess){

if(guess === randomNumber){
    displayMessage(`You guessed it Right`);
    endGame();
}else if(guess > randomNumber){
    displayMessage(`Number is TOO High`)
}
 else if(guess < randomNumber){
    displayMessage(`Number is TOO Short`)
}
}
function displayGuess(guess){

    userInput.value = '';
    guessSlot.innerHTML += `${guess},`
    numberGuess++;
    lastResult.innerHTML = `${11 - numberGuess}`
}
function displayMessage(message){
    lowOrhi.innerHTML = `<h2>${message}</h2>`
}
function endGame(){
userInput.value = '';
userInput.setAttribute('disabled','')  // set attribute is work as key value pair
p.classList.add('button')
p.innerHTML = `<h2 id='newGame'>Start a new game</h2>`
startOver.appendChild(p)
playGame = false
newGame();
}
function newGame(){
const newGame = document.querySelector('#newGame')
newGame.addEventListener('click',(e)=>{
    let randomNumber = parseInt(Math.random() * 100 +1)
    console.log(randomNumber)
    previousGuess = []
    numberGuess = 1
    guessSlot.innerHTML = ''
    lastResult.innerHTML = `${11 - numberGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true;
    lowOrhi.innerHTML = ''
})
}











