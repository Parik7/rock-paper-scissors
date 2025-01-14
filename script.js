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

function getHumanChoice() {
    const userInput = prompt("Enter rock, paper, or scissors:").toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
        return userInput;
    } else {
        alert("Invalid input. Please enter rock, paper, or scissors.");
        return getHumanChoice();
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "paper" ||
        humanChoice === "paper" && computerChoice === "rock") {
        alert(`You win this round! Human: ${humanChoice}, Computer: ${computerChoice}`);
        humanScore++;
    } else if (humanChoice === computerChoice) {
        alert(`It's a tie this round! Both chose ${humanChoice}`);
    } else {
        alert(`You lose this round! Human: ${humanChoice}, Computer: ${computerChoice}`);
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
        alert(`You win the game! Final Score - You: ${humanScore}, Computer: ${computerScore}`);
    } else if (computerScore > humanScore) {
        alert(`Computer wins the game! Final Score - You: ${humanScore}, Computer: ${computerScore}`);
    } else {
        alert(`The game is a tie! Final Score - You: ${humanScore}, Computer: ${computerScore}`);
    }
}

playGame();













