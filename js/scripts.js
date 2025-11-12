console.log(`Welcome Mr Ngcobo`);

function getComputerChoice() {
  let computerChoice = Math.random();
  if (computerChoice <= 1 / 3) {
    computerChoice = "rock";
  } else if (computerChoice <= 2 / 3) {
    computerChoice = "paper";
  } else if (computerChoice <= 3 / 3) {
    computerChoice = "scissor";
  }
  return computerChoice;
}

function getHumanChoice() {
  let humanChoice = prompt(`Please enter a choice of one of the following: 
		"scissor"
		"rock"
		"paper"`);
  return humanChoice;
}

let humanScore = 0;
let computerScore = 0;
let draw = 0;

function playGame() {
  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
      console.log(
        `Your Choice: ${humanChoice},
Computer choice : ${computerChoice},
Results: DRAW `
      );
      draw++;
    } else if (humanChoice === "rock" && computerChoice === "scissor") {
      console.log(
        `Your Choice: ${humanChoice},
Computer Choice : ${computerChoice},
Results: You Win
Rock smashes Scissor `
      );
      humanScore++;
    } else if (humanChoice === "scissor" && computerChoice === "paper") {
      console.log(
        `Your Choice: ${humanChoice},
Computer Choice : ${computerChoice},
Results: You Win
Scissor cut Paper `
      );
      humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      console.log(
        `Your Choice: ${humanChoice},
Computer Choice : ${computerChoice},
Results: You Win
Paper covers Rock`
      );
      humanScore++;
    } else {
      console.log(
        `Your Choice: ${humanChoice},
Computer Choice : ${computerChoice},
Results: You lose
    `
      );
      computerScore++;
    }
  }
  playRound(humanChoice, computerChoice);
  let gameScore = `Computer: ${computerScore} Player1: ${humanScore} Draw: ${draw}`;
  console.log(gameScore);
}
playGame();
