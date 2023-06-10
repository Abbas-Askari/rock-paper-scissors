let choices = ["Rock", "Paper", "Scissors"];
let playerButtons = document.querySelectorAll(".player>button");
let computerButtons = document.querySelectorAll(".computer>button");
let winTag = document.querySelector(".info div");
let explainationTag = document.querySelector(".info .explaination");
let scoreTag = document.querySelector(".info .score");
let allButtons = [...playerButtons, ...computerButtons];
let computerScore = 0;
let playerScore = 0;
let playerChoice = "";
let computerChoice = "";

const reset = () =>
  allButtons.forEach((button) => button.classList.remove("pressed"));

playerButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    reset();
    button.classList.add("pressed");
    playerChoice = button.textContent;
    // updateComputerChoice();
    playRound();
    // console.log(getConclusion(playerChoice, computerChoice));
  });
});

function updateComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  computerChoice = choices[random];
  computerButtons[random].classList.add("pressed");
  return computerChoice;
}

function getConclusion() {
  let playerIndex = choices.indexOf(playerChoice);
  let computerIndex = choices.indexOf(computerChoice);
  let diff = Math.abs(playerIndex - computerIndex);
  if (diff === 2) return playerIndex > computerIndex ? -1 : 1;
  if (diff === 1) return playerIndex > computerIndex ? 1 : -1;
  return 0;
}

function playRound() {
  updateComputerChoice();
  let outCome = getConclusion();
  if (outCome === -1) computerScore++;
  else if (outCome === 1) playerScore++;
  updateWinTag(outCome);
  updateScore();
  updateExplainTag(outCome);
  if (computerScore === 5 || playerScore === 5) {
    endGame();
  }
}

function updateWinTag(winner) {
  if (!winner) winTag.textContent = "Draw!";
  else winTag.textContent = `${winner > 0 ? "Player" : "Computer"} Wins`;
}

function updateExplainTag(winner) {
  if (!winner) explainationTag.textContent = "";
  else
    explainationTag.textContent = `${
      winner > 0 ? playerChoice : computerChoice
    } beats ${winner < 0 ? playerChoice : computerChoice}`;
}

function updateScore() {
  scoreTag.textContent = `${playerScore} - ${computerScore}`;
}

function endGame() {
  reset();
  playerButtons.forEach((button) => {
    button.removeEventListener("click", (e) => {
      reset();
      button.classList.add("pressed");
      playerChoice = button.textContent;
      // updateComputerChoice();
      playRound();
      // console.log(getConclusion(playerChoice, computerChoice));
    });
  });
}
