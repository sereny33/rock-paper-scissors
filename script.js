// main variables
const rock = "rock";
const paper = "paper";
const scissors = "scissors";

// score variables
let playerScore = 0;
let compScore = 0;

// choice variables
let playerChoice;
let compChoice;

// score and winner selectors
const playerScoreText = document.querySelector('#playerScore');
const compScoreText = document.querySelector('#compScore');
const winner = document.querySelector('#winner');

// button selectors
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const choiceBtn = document.querySelectorAll('.choice');

// converting nodeList choiceBtn into an array
// [].forEach.call(choiceBtn, function(el) {} also works
Array.from(choiceBtn, function(el) {
el.addEventListener('click', (e) => { // add an event listener to each button
        if (e.target === rockBtn) playerChoice = rock;
        if (e.target === scissorsBtn) playerChoice = scissors;
        if (e.target === paperBtn) playerChoice = paper;
        compChoice = getComputerChoice();
        playGame();
    });
});

// generate random choice
function getComputerChoice() {
    let randomNumber = Math.floor((Math.random() * 3) + 1);
    switch (randomNumber) {
        case 1:
            return rock;
        break;

        case 2:
            return paper;
        break;

        case 3:
            return scissors;
        break;
    }    
}

// main game logic and score count
function playGame () {
    if ((playerChoice === rock && compChoice === scissors)||
        (playerChoice === scissors && compChoice === paper)||
        (playerChoice === paper && compChoice === rock)) {
            winner.textContent = '';
            winner.textContent = `Winner: YOU WIN! ${playerChoice} beats ${compChoice}!`;
            playerScore+=1;
            playerScoreText.textContent = `Your score is: ${playerScore}`;
        } else if (playerChoice === compChoice) {
            winner.textContent = '';
            winner.textContent ='TIE!';
        } else {
            winner.textContent = ''
            winner.textContent = `Winner: YOU LOSE! ${compChoice} beats ${playerChoice}!`;
            compScore+=1;
            compScoreText.textContent = `Computer score is: ${compScore}`;
        }
}