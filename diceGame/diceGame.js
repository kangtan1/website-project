//select player one and player two
let playerOne = document.getElementById("name-0");
let playerOneGlobalScore = document.getElementById("score-0");
let playerOneCurrentScore = document.getElementById("current-0");
let playerOnePanel = document.querySelector(".player-0-panel");
let playerTwo = document.getElementById("name-1");
let playerTwoGlobalScore = document.getElementById("score-1");
let playerTwoCurrentScore = document.getElementById("current-1");
let playerTwoPanel = document.querySelector(".player-1-panel");

//select the game button
let newGame = document.querySelector("button.btn-new");
let rollDice = document.querySelector("button.btn-roll");
let hold = document.querySelector(".btn-hold");
var diceDom1 = document.querySelector(".dice1");
var diceDom2 = document.querySelector(".dice2");

//listen for a click
let gamePlaying, scores, roundScore, activePlayer, lastScore;

init();
//add click function to the roll dice button
rollDice.addEventListener("click", function() {
  if (gamePlaying) {
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
    console.log(dice1);
    console.log(dice2);

    diceDom1.style.display = "block";
    diceDom2.style.display = "block";

    diceDom1.src = "dice-" + dice1 + ".png";
    diceDom2.src = "dice-" + dice2 + ".png";

    if (dice1 != 1 && dice2 != 1) {
      //   lastDice += dice;
      roundScore += dice1 + dice2;

      document.querySelector(
        "#current-" + activePlayer
      ).textContent = roundScore;
    } else if (dice1 === 6 && dice2 === 6) {
      document.querySelector("#current-" + activePlayer).textContent = "0";
      score[activePlayer] = 0;
      nextPlayer();
    } else {
      nextPlayer();
    }
  }
});

hold.addEventListener("click", function() {
  if (gamePlaying) {
    scores[activePlayer] += roundScore;
    document.querySelector("#score-" + activePlayer).textContent =
      scores[activePlayer];
    var setScore = document.querySelector(".input").value;

    var winningScore;
    if (setScore) {
      winningScore = setScore;
    } else {
      winningScore = 100;
    }
    if (scores[activePlayer] >= winningScore) {
      document.querySelector("#name-" + activePlayer).textContent = "winner!";
      diceDom1.style.display = "none";
      diceDom2.style.display = "none";

      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
      gamePlaying = false;
    } else {
      nextPlayer();
    }
  }
});
function nextPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }

  roundScore = 0;
  playerOneCurrentScore.textContent = "0";
  playerTwoCurrentScore.textContent = "0";
  playerOnePanel.classList.toggle("active");
  playerTwoPanel.classList.toggle("active");
  diceDom1.style.display = "none";
  diceDom2.style.display = "none";
}
newGame.addEventListener("click", init);

function init() {
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true;

  playerOneCurrentScore.textContent = "0";
  playerTwoCurrentScore.textContent = "0";
  playerOneGlobalScore.textContent = "0";
  playerTwoGlobalScore.textContent = "0";
  playerOne.textContent = "player 1";
  playerTwo.textContent = "player 2";
  playerOnePanel.classList.remove("active");
  playerTwoPanel.classList.remove("active");
  playerOnePanel.classList.remove("winner");
  playerTwoPanel.classList.remove("winner");
  diceDom1.style.display = "none";
  diceDom2.style.display = "none";

  playerOnePanel.classList.add("active");
}
