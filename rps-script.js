let compChoice;
let playerChoice;
let compScore = 0;
let playerScore = 0;

function getComputerChoice() {
  console.log("test");
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

function playRound() {
  getComputerChoice();
  playerChoice = prompt("Let's play Rock, Paper, Scissors! What is your choice?");
  playerChoice=playerChoice.toUpperCase();
  decideRoundWinner();


}

function decideRoundWinner() {
  if (playerChoice === "ROCK") {
    if (compChoice === "ROCK") {
      console.log("The computer's choice was ROCK! You tie! Do this round over.");
      playRound();
    } else if (compChoice === "PAPER") {
      console.log("The computer's choice was PAPER! You lose this round!");
      compScore +=1;
    } else if (compChoice === "SCISSORS") {
      console.log("The computer's choice was SCISSORS! You win this round!");
      playerScore +=1;
    }
  } else if (playerChoice === "PAPER") {
    if (compChoice === "PAPER") {
      console.log("The computer's choice was PAPER! You tie! Do this round over.");
      playRound();
    } else if (compChoice === "SCISSORS") {
      console.log("The computer's choice was SCISSORS! You lose this round!");
      compScore +=1;
    } else if (compChoice === "ROCK") {
      console.log("The computer's choice was ROCK! You win this round!");
      playerScore +=1;
    }
  } else if (playerChoice === "SCISSORS") {
    if (compChoice === "SCISSORS") {
      console.log("The computer's choice was SCISSORS! You tie! Do this round over.");
      playRound();
    } else if (compChoice === "ROCK") {
      console.log("The computer's choice was ROCK! You lose this round!");
      compScore +=1;
    } else if (compChoice === "PAPER") {
      console.log("The computer's choice was PAPER! You win this round!");
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
}


playRPS();