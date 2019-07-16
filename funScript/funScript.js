let colorBtn = document.querySelector(".colorChangeBtn");
let divOne = document.querySelector(".colorBcg");
let introOne = document.querySelector(".introOne");
colorBtn.addEventListener("click", changeColor);
function changeColor() {
  divOne.classList.toggle("darkTheme");
  this.classList.toggle("darkThemeBtn");
  introOne.innerHTML = "welcome to toggle function";
  introOne.classList.toggle("darkThemeHeader");
}

// loop over a array;

let divTwo = document.querySelector(".colorBcgTwo");
let colorBtnTwo = document.querySelector(".colorChangeBtnTwo");
let introTwo = document.querySelector(".introTwo");
let colorDisplay = document.querySelector(".colorDisplay");
let colors = ["violet", "indigo", "blue", "green", "yellow", "orange", "red"];
let bgColorDisplay = [
  "#73025C",
  "#370278",
  "#044CC8",
  "#04BE96",
  "#04D71D",
  "#9BD204",
  "#E69705"
];
colorBtnTwo.addEventListener("click", rainbowColor);

function rainbowColor() {
  let random = Math.floor(Math.random() * colors.length);
  divTwo.style.backgroundColor = colors[random];
  colorDisplay.innerHTML = colors[random];
  colorDisplay.style.color = colors[random];
  colorDisplay.style.backgroundColor = bgColorDisplay[random];
}
