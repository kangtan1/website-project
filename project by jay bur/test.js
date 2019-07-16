//All the choices that the comp has
const choiceArr = ['rock', 'paper', 'scissors'];
//content & restart pop
const resetDisplay = document.querySelector('.final-reset');
const whoWin = document.querySelector('.win');
const finalScore = document.querySelector('.final-score')
const resetBtn = document.querySelector('.resetBtn');
const content = document.querySelector('.content');
//all the choices the user have
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
//score board
const userScore = document.querySelector('#user-score');
const compScore = document.querySelector('#comp-score');
const tieScore = document.querySelector('#tie-score');
const roundPlayed = document.querySelector('#round');
let userSc = 0;
let compSc = 0;
let tieSc = 0;
let winner = '';
//battleground
const battleground = document.querySelector('.battleground');
//turn counter
let turnCounter = 0;
//users choice for the round
let usersChoice = '';

//add onClick listeners on users choices
rock.addEventListener('click', () => {
    usersChoice = 'rock';
    game(compChoice(), usersChoice);

});
paper.addEventListener('click', () => {
    usersChoice = 'paper';
    game(compChoice(), usersChoice);

});
scissors.addEventListener('click', () => {
    usersChoice = 'scissors'
    game(compChoice(), usersChoice);
});

//get a random number 0, 1 or 2 for random index select for the comp choiceArr
const getRandomNum = () => Math.floor((Math.random() * 3));;
//comp random choice
const compChoice = () => {
    return choiceArr[getRandomNum()];

}

//game logic
const game = (compChoice, userChoice) => {
    const displayContent = () => {
        battleground.innerHTML = `
        <i class="far fa-hand-${usersChoice} ${usersChoice}"></i>
        <span>VS</span>
        <i class="far fa-hand-${compChoice} ${compChoice}"></i>
        `;
    }
    displayContent();
    if (userChoice === 'rock' && compChoice === 'rock') {
        turnCounter++;
        tieSc++;
        tieScore.innerHTML = `Tie: ${tieSc}`;
        roundPlayed.innerHTML = `Round Played: ${turnCounter}`;
    } else if (userChoice === 'rock' && compChoice === 'paper') {
        turnCounter++;
        compSc++;
        compScore.innerHTML = `Computer: ${compSc}`;
        roundPlayed.innerHTML = `Round Played: ${turnCounter}`;
    } else if (userChoice === 'rock' && compChoice === 'scissors') {
        turnCounter++;
        userSc++;
        userScore.innerHTML = `User: ${userSc}`;
        roundPlayed.innerHTML = `Round Played: ${turnCounter}`;
    } else if (userChoice === 'paper' && compChoice === 'rock') {
        turnCounter++;
        userSc++;
        userScore.innerHTML = `User: ${userSc}`;
        roundPlayed.innerHTML = `Round Played: ${turnCounter}`;
    } else if (userChoice === 'paper' && compChoice === 'scissors') {
        turnCounter++;
        compSc++;
        compScore.innerHTML = `Computer: ${compSc}`;
        roundPlayed.innerHTML = `Round Played: ${turnCounter}`;
    } else if (userChoice === 'paper' && compChoice === 'paper') {
        turnCounter++;
        tieSc++;
        tieScore.innerHTML = `Tie: ${tieSc}`;
        roundPlayed.innerHTML = `Round Played: ${turnCounter}`;
    } else if (userChoice === 'scissors' && compChoice === 'rock') {
        turnCounter++;
        compSc++;
        compScore.innerHTML = `Computer: ${compSc}`;
        roundPlayed.innerHTML = `Round Played: ${turnCounter}`;
    } else if (userChoice === 'scissors' && compChoice === 'paper') {
        turnCounter++;
        userSc++;
        userScore.innerHTML = `User: ${userSc}`;
        roundPlayed.innerHTML = `Round Played: ${turnCounter}`;
    } else if (userChoice === 'scissors' && compChoice === 'scissors') {
        turnCounter++;
        tieSc++;
        tieScore.innerHTML = `Tie: ${tieSc}`;
        roundPlayed.innerHTML = `Round Played: ${turnCounter}`;
    }
    //who wins
    if (tieSc === 5) {
        winner = "It's a Tie";
    } else if (userSc > compSc) {
        winner = "USER WINS!!!";
    } else if (userSc < compSc) {
        winner = "COMPUTER WINS!!!"
    }

    if (turnCounter === 5) {
        content.style.display = 'none';
        resetDisplay.style.display = 'grid';
        resetBtn.style.display = 'inline';
        resetDisplay.innerHTML = `
        <span class="win">${winner}</span>
        <span class="final-score">Score: User: ${userSc} , Computer: ${compSc} ,Tie: ${tieSc}</span>
        <button class="resetBtn">Restart Game</button>`;
        resetBtn.addEventListener('click', () => {
            location.reload();
        })
    }
}