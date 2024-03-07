// const main variables
const rock = "rock";
const paper = "paper";
const scissors = "scissors";
let playerChoice;
let compChoice = getComputerChoice();

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


