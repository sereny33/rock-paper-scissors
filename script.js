// const main variables
const rock = "rock";
const paper = "paper";
const scissors = "scissors";

// score variables
let playerScore = 0;
let compScore = 0;

const playerScorePara = document.querySelector('#playerScore');
const compScorePara = document.querySelector('#compScore');
const winnerPara = document.querySelector('#winner');

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

for (let round=0; round < 5; round++) {
    let playerChoice = getPlayerChoice();
    let compChoice = getComputerChoice();
    if (playerChoice == compChoice) {
        console.log('Tie');
    } else if ((playerChoice == rock && compChoice == scissors) ||
              (playerChoice == paper && compChoice == rock) ||
              (playerChoice == scissors && compChoice == paper)) {
        console.log('You win', playerScore+=1);
        playerScorePara.textContent = `Your score: ${playerScore}`;
                
    } else {
        console.log('You lose!', compScore+=1);
        compScorePara.textContent = `Computer score: ${compScore}`;
    }
}

function whoWon() {
    
    (playerScore>compScore) ? winner = 'You are CHAMPION':
    (playerScore<compScore) ? winner = 'You are LOSER':
    winner = 'TIE';
    return winnerPara.textContent = `${winner}`;
}
console.log(whoWon());

// five round game


