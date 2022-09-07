let playerScore = 0;
let computerScore = 0;

// Randomly generating the computer choice

let getComputerChoice = () => {
  const randomNum = Math.floor(Math.random() * 3) + 1;

  if (randomNum == 1) {
    return "rock";
  } else if (randomNum == 2) {
    return "paper";
  } else {
    return "scissors";
  }
};

// Playing a single round of the game

let playRound = (playerSelection, computerSelection) => {
  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    playerScore += 1;
    return (
      "You won " +
      playerSelection +
      " beats " +
      computerSelection +
      "!" +
      "\n\nPlayer score: " +
      playerScore +
      "\nComputer Score :" +
      computerScore
    );
  } else if (playerSelection == computerSelection) {
    return "It's a draw! You both picked " + playerSelection + "!";
  } else {
    computerScore += 1;
    return (
      "You Lose! " +
      computerSelection +
      " beats " +
      playerSelection +
      "!" +
      "\n\nPlayer score: " +
      playerScore +
      "\nComputer Score :" +
      computerScore
    );
  }
};

const playerSelection = prompt("Rock Paper or Scissors").toLowerCase();
computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
