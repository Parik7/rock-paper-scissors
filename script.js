function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
        return "rock";
    } else if (randomNum === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}
// console.log(getComputerChoice())



function getHumanChoice() {
    const userInput = prompt("Enter rock, paper, or scissors:").toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
        return userInput;
    } else {
        console.log("Invalid input. Please enter rock, paper, scisssors.");
        return getHumanChoice();
    }
}

// console.log(getHumanChoice());

let humanScore = 0;

let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win!");
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win!");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win!");
        humanScore++;
    } else {
        console.log("You lose!");
        computerScore++;
    }
}


function playGame() {
    for (let i = 0; i < 5; i++) {

        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
    }



    if (humanScore > computerScore) {
        console.log("you win the game!");
    } else if (computerScore > humanScore) {
        console.log("computer wins the game!");
    } else {
        console.log("The game is a tie!");
    }

}

playGame();




