// const main variables
const rock = "rock";
const paper = "paper";
const scissors = "scissors";

let compChoice = getComputerChoice();
let playerChoice = getPlayerChoice();

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

// aks player for their choice (case insensitive)
function getPlayerChoice() {
    playerInput = prompt('Choose: Rock, Paper or Scissors?', '');
    return playerInput.toLowerCase()
}

// choice comparison && main logic of the game
function playGame () {
    if ((playerChoice === rock && compChoice === scissors)||
        (playerChoice === scissors && compChoice === paper)||
        (playerChoice === paper && compChoice === rock)) {
            return alert(`YOU WIN! ${playerChoice} beats ${compChoice}!`);
        } else if (playerChoice === compChoice) {
            return alert('TIE!');
        } else {
            return alert(`YOU LOSE! ${compChoice} beats ${playerChoice}!`)
        }
}