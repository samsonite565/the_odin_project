const prompt = require("prompt-sync")();
let usrInput = prompt("What is your guess? ");
let humanScore = 0;
let computerScore = 0;

function getComputerguess() {
  let randomNumber = Math.floor(Math.random() * [4 - 1] + 1);

  if (randomNumber === 1) {
    return "Paper";
  } else if (randomNumber === 2) {
    return "Rock";
  } else if (randomNumber === 3) {
    return "Scissors";
  }
  //Function returns a string value
}

function getHumanGuess(guess) {
  guess.toLowerCase();
  if (guess.length === 4) return "Rock";
  else if (guess.length === 5) return "Paper";
  else if (guess.length === 8) return "Scissors";
  else {
    console.log("Please enter a valid answer");
    return null;
  }
  //Function returns a string value
}

function playRound(computerChoice, humanChoice) {
  if (humanChoice.length === computerChoice.length) {
    console.log(
      `Human choice: ${humanChoice} and ${computerChoice} are the same`,
    );
  } else if (humanChoice.length > computerChoice.length) {
    console.log(`Human wins this one, you choose ${humanChoice}`);
    humanScore += 1;
  } else if (computerChoice.length > humanChoice.length) {
    console.log(`Computer wins this one, it choose ${computerChoice}`);
    computerScore += 1;
  } else if (
    (computerChoice.length == 8 && humanChoice.length == 4) ||
    (humanChoice.length == 8 && computerChoice.length == 4)
  ) {
    console.log(`ROCK BEATS SCISSORS`);
  }
}

function playGame() {
  console.log(`Computer Score: ${computerScore}`);
  console.log(`Human Score: ${humanScore}`);

  while (humanScore <= 5 && computerScore <= 5) {
    usrInput = prompt("What is your guess now? ");
    playRound(getComputerguess(), getHumanGuess(usrInput));
    console.log(`Human score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);
  }
}

playGame();
