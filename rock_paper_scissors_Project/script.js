//create another function that asks for the users input rock paper of sciccors
// create a way to keep track of the player score as well as the computer's score
// Create a new function named playRound.
// Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
// Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
// Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
// Increment the humanScore or computerScore variable based on the round winner.
let computerScore = 0;
let userScore = 0;
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * [4 - 1] +1);

//Adds a value to each number based on the selection of the random value

  if (randomNumber === 1) {
    console.log('Paper')
  } else if (randomNumber === 2) {
    console.log('Rock')
  } else if (randomNumber === 3) {
    console.log('Scissors')
  }
};

function getHumanChoice (choice) {
  //Checks for the user's input to see if its either rock paper or sciccors
  //checks if not throws an console.error() prompts the user to rewite the prompt\
  
  prompt("Select you choice, Rock, Paper, or Scissors").toLowerCase();
  //Checking user input
};

function playRound() {
  // This function compares the computer choice against the user's choice,
  // it determins who scored, adds to the scoreboad, runs the round again.
  pass
}

getComputerChoice();
