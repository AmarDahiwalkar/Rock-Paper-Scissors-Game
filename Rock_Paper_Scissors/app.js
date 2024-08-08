let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const generateCompChoice = () => {
  //rock,paper,scissors
  const options = ["rock", "paper", "scissors"];
  const randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};
const drawGame = () => {
  console.log("game draw");
  msg.innerText = "Game Draw...! Play Agian...!";
  msg.style.backgroundColor = "#081b31";
};
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    console.log(`you win ${userChoice} beats ${compChoice}`);
    msg.innerText = `You Win..! ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    console.log("comp win");
    msg.innerText = `You Lost ${compChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  console.log("user Choice =", userChoice);
  //generate comp choice
  const compChoice = generateCompChoice();
  console.log("comp Choice =", compChoice);
  if (userChoice === compChoice) {
    //draw game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors,paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock,scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock,paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log("choice was Clicked", userChoice);
    playGame(userChoice);
  });
});
