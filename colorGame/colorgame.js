// create all variables
let squares = document.querySelectorAll("#squares");
let h1 = document.querySelector("h1");
let colors = generateRandomColors(6);
let pickColor = randomPick();
let colorDisplay = document.getElementById("colorDisplay");
let gameDisplay = document.getElementById("gameDisplay");
let reset = document.getElementById("reset");
let easyBtn = document.getElementById("easyBtn");
let hardBtn = document.getElementById("hardBtn");

colorDisplay.textContent = pickColor;
for (let i = 0; i < colors.length; i++) {
  //add initial color to squares
  squares[i].style.background = colors[i];
  //add click listener to squares
  squares[i].addEventListener("click", function() {
    let clickedColor = this.style.background;
    if (pickColor === clickedColor) {
      gameDisplay.textContent = "correct!!";
      gameDisplay.style.color = "black";
      changeColors(clickedColor);
      h1.style.background = pickColor;
      reset.textContent = "PLAY AGAIN?";
    } else {
      this.style.background = "#232323";
      gameDisplay.textContent = "Try again!!";
      gameDisplay.style.color = "black";
      console.log(pickColor, clickedColor);
    }
  });
}

function changeColors(color) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }
}
function randomPick() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
function generateRandomColors(num) {
  //make an array
  let arr = [];
  //add num random color to array
  for (let i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  //return that array

  return arr;
}
function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}
// create event listener to to reset button
reset.addEventListener("click", function() {
  colors = generateRandomColors(6);
  pickColor = randomPick();
  reset.textContent = "NEW COLORS";
  colorDisplay.textContent = pickColor;
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
  }
  h1.style.background = "steelblue";
  gameDisplay.style.color = "transparent";
});
easyBtn.addEventListener("click", function() {
  colors = generateRandomColors(3);
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  pickColor = randomPick();
  colorDisplay.textContent = pickColor;
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.background = "steelblue";
});

hardBtn.addEventListener("click", function() {
  colors = generateRandomColors(6);
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  pickColor = randomPick();
  colorDisplay.textContent = pickColor;
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
    squares[i].style.display = "block";
  }
  h1.style.background = "steelblue";
});
