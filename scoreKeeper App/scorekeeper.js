let p1Display = document.getElementById("p1Score");
let p2Display = document.getElementById("p2Score");
let totalScoreDisplay = document.getElementById("totalScore");
let p1Input = document.getElementById("p1Input");
let p2Input = document.getElementById("p2Input");
let reset = document.getElementById("reset");
let setScore = document.querySelector("input");
//let set the score valus to the player score
var p1Score = 0;
let p2Score = 0;
let gameOver = false;
let winningScore = 5;

// add event listener to the player one and two and reset
p1Input.addEventListener("click", function() {
  if (!gameOver) {
    p1Score++;
  }
  if (p1Score === winningScore) {
    gameOver = true;
    p1Display.classList.add("winner");
  }

  p1Display.textContent = p1Score;
});

p2Input.addEventListener("click", function() {
  if (!gameOver) {
    p2Score++;
  }
  if (winningScore === p2Score) {
    gameOver = true;
    p2Display.classList.add("winner");
  }

  p2Display.textContent = p2Score;
});

reset.addEventListener("click", function() {
  resetTheGame();
});
// set the input form to display on the setnumber
setScore.addEventListener("change", function() {
  totalScoreDisplay.textContent = setScore.value;
  winningScore = Number(setScore.value);
  resetTheGame();
});
function resetTheGame() {
  p1Score = 0;
  p2Score = 0;
  gameOver = false;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
}
