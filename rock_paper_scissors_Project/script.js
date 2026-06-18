const prompt = require("prompt-sync")();

let computerScore = 0;
let humanScore = 0;
let usrInput = prompt("What is your guess? ");

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
}
//
function getHumanguess(guess) {
  guess = guess.toLowerCase().replace(/\b\w/g, (s) => s.toUpperCase());
  let acceptableAnswers = ["Rock", "Paper", "Scissors"];
  //Should have a return value in number to compare with the computer guess
  //Checking user input to see if he has put the correct answer
  if (guess.length === 4) return  "Rock";
  else if (guess.length === 5) return "Paper";
  else if (guess.length === 8) return "Scissors";
  else {
    console.log("Please enter a valid answer");
    return null;
  }
}

// Need to make it so the when you make the final comparision it is number with number instead of numbwer with string
function playRound(computerChoice, humanChoice) {
  let computerGuessLength = computerChoice.length;
  let humanGuessLength = humanChoice.length;

  if (computerGuessLength > humanGuessLength) {
    computerScore += 1;
    console.log(computerScore);
    console.log(humanScore);
  };
  
  // Make your function’s humanguess paraumeter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
  // Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
  // Increment the humanScore or computerScore variable based on the round winner.
}
playRound(getComputerguess(),getHumanguess(usrInput));