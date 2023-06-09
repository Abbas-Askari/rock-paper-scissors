let choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  return choices[random];
}

function getConclusion(playerSelection, computerSelection) {
  let playerIndex = choices.indexOf(playerSelection.toLowerCase());
  let computerIndex = choices.indexOf(computerSelection);
  if ((playerIndex + 1) % 3 === computerIndex) {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else if ((computerIndex + 1) % 3 === playerIndex) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return "Its a draw!";
  }
}

function playGame() {
  let computerScore = 0;
  let playerScore = 0;
  for (let i = 0; i < 5; i++) {
    let playerChoice = prompt(`Enter your move: `);
    let result = getConclusion(playerChoice, getComputerChoice());
    if (result.startsWith("You L")) {
      computerScore++;
    } else if (result.startsWith("You W")) {
      playerScore++;
    } else {
      i--;
    }
    console.log(
      `Your score: ${playerScore}\nComputer's score: ${computerScore}\n` +
        result
    );
  }
  if (computerScore > playerScore) console.log("Sorry! you lost!");
  else if (computerScore < playerScore) console.log("Yay! you Won!");
  else console.log("Draw.");
}

playGame();
