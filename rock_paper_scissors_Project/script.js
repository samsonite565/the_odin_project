const prompt = require("prompt-sync")();
let usrInput = prompt("What is your guess? ");
let humanScore = 0;
let computerScore = 0;

function getComputerguess() {
  let randomNumber = Math.floor(Math.random() * [4 - 1] + 1);

  if (randomNumber === 1) {
    console.log("Paper");
    return "Paper";
  } else if (randomNumber === 2) {
    console.log("Rock");
    return "Rock";
  } else if (randomNumber === 3) {
    console.log("Scissors");
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

//Compare if 2 strings are equal to each other.
//Compare if 2 strings are against each other based on number of letters
//Add to human or computer score
//Compleate a total of 5 rounds
function playRound(computerChoice, humanChoice) {
  if (humanChoice.length === computerChoice.length) {
    console.log(
      `Human choice: ${humanChoice} and ${computerChoice} are the same`,
    );
  } else if (humanChoice.length > computerChoice.length) {
    console.log(`Human wins this round`);
    console.log(computerChoice.length);
    console.log(humanChoice.length);
    humanScore += 1;
  } else if (computerChoice.length > humanChoice.length) {
    console.log(`Computer wins this one`);
    console.log(computerChoice);
    computerScore += 1;
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
