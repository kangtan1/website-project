 //this is my first javascript note!
 //console.log('Hello World')

 // variable 
//let name ='T'; //string literal
//console.log(name);
// cannot be a severced keyword
//should me meaningful name
//they cannot start with a number (1name) use meaningful name
//cannot contain a space or hyphen(-)
//are case-sensitivee

//let firstName = 'T';
//let lastName = "N";

//constant
//const interestRate = .3;
//interestRate = 1;
//console.log(interestRate);
//primatives/ value types we string number boolean undefined null
//reference types

//let age = 30; //number literal
//let isApproved = true; //boolean literal
//let firstName = undefined;
//let lastName = null;
//let selectedColor = null;

//typeof name
//"string"
//name = 1;
//1
//typeof name
//"number"
//age = 30.1

//typeof age
//"number"//
//age = 30.1//

//typeof isApproved//


/*let person ={
 name: 'T',
 age: 30
};
//dot notation
//person.name = 'john';
// bracket Notation
//person['name'] = 'mary';
//console.log(person.name);

let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors);*/
/*console.log(23+97);
let a = 9;
let b = 345;
let c = 23;
let z = a + b - c;
console.log(z);
console.log((4 + 6 +9)/77);
console.log(a);
console.log(9 * a);
let x = 7 * a;
console.log(x);
let max = 57;
let actual = max - 13;
let percentage = actual / max;
console.log(percentage);*/

function computerPlay() {
    var choices = ["rock", "paper", "scissors"];
    computerSelection = choices[Math.floor(Math.random() * choices.length)];
    return computerSelection;
}
var playerSelection;
var wins = 0;
var losses = 0;
var draws = 0;

var btn = document.querySelector('#btn1');
btn.addEventListener('click', () => {
    playRound("rock", computerPlay());
});
var btn = document.querySelector('#btn2');
btn.addEventListener('click', () => {
    playRound("paper", computerPlay());
});
var btn= document.querySelector('#btn3');
btn.addEventListener('click', () => {
    playRound("paper", computerPlay());
});
const div = document.createElement('div');
const h1 = document.createElement('h1');
h1.textContent = "scoreboard:";
div.appendChild(h1);
const p1 = document.createElement('p')
p1.textContent = "wins: " + wins;
div.appendChild(p1);
const p2 = document.createElement('p')
p2.textContent = "losses: " + losses;
div.appendChild(p2);
const p3 = document.createElement('p')
p3.textContent = "Draws: " + draws;
div.appendChild(p3);

container.appendChild(div);

function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection){
    draws++;
    alert("It's a draw!");
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        wins++;
        alert("You win! Paper beats rock");
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        wins++;
        alert("you win! rock beats scissors");
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        wins++;
        alert("you win! Scissor beats paper");
    }else if (playerSelection == "rock" && computerSelection == "paper") {
        losses++;
        alert("You lose! Paper beats rock!");
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        losses++;
        alert("You lose! Scissors beats paper");
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        losses++;
        alert("You lose! Rock beats scissors");
    } else {
        alert("Oops! Something went wrong.");
    }
    p1.textContent = "wins: " + wins;
    p2.textContent = "losses: " + losses;
    p3.textContent = "Draws: " + draws;
    if (wins ==3) {
        document.write("congradulations! You defeated the computer 3 to " + losses + "!");

    } else if (losses == 3) {
        document.write("The computer is champion, winning by a score of 3 to " + wins + "!");

    }
}
