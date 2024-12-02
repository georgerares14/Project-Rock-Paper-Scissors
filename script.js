const getComputerChoice = () => {
    const randomNum = Math.floor(Math.random() * 3); //returnează un număr între 0 și 3 (exclusiv)
    if (randomNum === 0) {
        return "rock";
    } else if (randomNum === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

const getHumanChoice = () => {
    let userInput = prompt("Rock, Paper, Scissors?");
    return userInput ? userInput.toLowerCase() : '';  // Asigură-te că inputul este în litere mici
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    const humanChoiceIns = humanChoice.toLowerCase();

    if (humanChoiceIns === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoiceIns === "rock" && computerChoice === "scissors") ||
        (humanChoiceIns === "paper" && computerChoice === "rock") ||
        (humanChoiceIns === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        return "You win this round!";
    } else {
        computerScore++;
        return "You lose this round!";
    }
}

const playGame = () => {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        // Verifică dacă inputul utilizatorului este valid
        if (humanSelection === '') {
            console.log("Invalid input, please enter Rock, Paper, or Scissors.");
            i--;  // Dacă inputul este invalid, repetăm această rundă
            continue;
        }

        const roundResult = playRound(humanSelection, computerSelection);
        console.log(roundResult);
        console.log(`Score: Computer - ${computerScore}, You - ${humanScore}`);
    }

    if (computerScore > humanScore) {
        return "You lost the game!";
    } else if (computerScore === humanScore) {
        return "It's a tie!";
    } else {
        return "You won the game!";
    }
}

playGame();
