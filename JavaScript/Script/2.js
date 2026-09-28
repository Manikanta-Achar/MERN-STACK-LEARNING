let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg");
let userScorePara = document.querySelector(".user-score");
let compScorePara = document.querySelector(".comp-score");

const gencompChoice = () => {
  const myArray = ["rock", "paper", "scissor"];
  const genscore = Math.floor(Math.random() * 3);
  return myArray[genscore];
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win. your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You Lose. Comp ${compChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const draw = () => {
  console.log("Match Draw");
  msg.innerText = "Match draw";
  msg.style.backgroundColor = "black";
};

const playGame = (userChoice) => {
  let compChoice = gencompChoice();

  if (userChoice == compChoice) {
    draw();
  } else {
    userWin = true;

    if (userChoice == "rock") {
      userWin = compChoice == "paper" ? false : true;
    } else if (userChoice == "paper") {
      userWin = compChoice == "scissor" ? false : true;
    } else {
      userWin = compChoice == "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log(userChoice);
    playGame(userChoice);
  });
});
