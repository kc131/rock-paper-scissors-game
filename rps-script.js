let compChoice;
let playerChoice;
let compScore = 0;
let playerScore = 0;

function getComputerChoice() {
  random123 = Math.floor(Math.random()*(3)+1); //gets number between 1 and 3
  
  if (random123 === 1) {
    compChoice = "ROCK";
  } else if (random123 === 2) {
    compChoice = "PAPER";
  } else  {
    compChoice = "SCISSORS";
  }
 
  return(compChoice);
}

function getPlayerChoice() {
  playerChoice = prompt("Let's play Rock, Paper, Scissors! What is your choice?");
  playerChoice=playerChoice.toUpperCase();
  if (playerChoice === "ROCK") {
    return(playerChoice);
  } else if (playerChoice === "PAPER") {
    return(playerChoice);
  } if (playerChoice === "SCISSORS") {
    return(playerChoice);
  } else {
    console.log("That is not a valid choice. Try again!");
    getPlayerChoice();
  }
}

function playRound() {
  getComputerChoice();
  getPlayerChoice();
  decideRoundWinner();
}

function decideRoundWinner() {
  if (playerChoice === "ROCK") {
    if (compChoice === "ROCK") {
      console.log("Your choice was ROCK! The computer's choice was ROCK! You tie! Do this round over.");
      playRound();
    } else if (compChoice === "PAPER") {
      console.log("Your choice was ROCK! The computer's choice was PAPER! You lose this round!");
      compScore +=1;
    } else if (compChoice === "SCISSORS") {
      console.log("Your choice was ROCK! The computer's choice was SCISSORS! You win this round!");
      playerScore +=1;
    }
  } else if (playerChoice === "PAPER") {
    if (compChoice === "PAPER") {
      console.log("Your choice was PAPER! The computer's choice was PAPER! You tie! Do this round over.");
      playRound();
    } else if (compChoice === "SCISSORS") {
      console.log("Your choice was PAPER! The computer's choice was SCISSORS! You lose this round!");
      compScore +=1;
    } else if (compChoice === "ROCK") {
      console.log("Your choice was PAPER! The computer's choice was ROCK! You win this round!");
      playerScore +=1;
    }
  } else if (playerChoice === "SCISSORS") {
    if (compChoice === "SCISSORS") {
      console.log("Your choice was SCISSORS! The computer's choice was SCISSORS! You tie! Do this round over.");
      playRound();
    } else if (compChoice === "ROCK") {
      console.log("Your choice was SCISSORS! The computer's choice was ROCK! You lose this round!");
      compScore +=1;
    } else if (compChoice === "PAPER") {
      console.log("Your choice was SCISSORS! The computer's choice was PAPER! You win this round!");
      playerScore +=1;
    }
  }
return(playerScore, compScore);

}

function playRPS() {
  for (let i = 0; i<=4; i++) {
    if (i < 4) {
    playRound();
    console.log(`The score is now ${playerScore} to ${compScore}.`)
  } else {
    playRound();
    console.log(`The final score is ${playerScore} to ${compScore}.`);
    if (playerScore > compScore) {
      console.log("You won the game! Great job!")
    } else {
      console.log("You lost the game! Better luck next time!")
    }
  }
}
let playAgain= prompt("Would you like to play again?");
playAgain = playAgain.toUpperCase();
console.log(playAgain);
if (playAgain === 'YES') {
  compScore = 0;
  playerScore = 0;
  playRPS();
} else {
  console.log("Ok!See you next time! Bye!");
}

}


playRPS();