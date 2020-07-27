let playerScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const score_div = document.querySelector(".score");
const result_h3 = document.querySelector(".result > h3");
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissors_div = document.getElementById("Scissors");

function computerPlay() {
    let computerWeapon=["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random()*computerWeapon.length);
    return computerWeapon[randomNumber];
}

function win(playerChoice, computerChoice) {
    const playerChoice_div = document.getElementById(playerChoice);
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_h3.innerHTML = `${playerChoice} beats ${computerChoice}. You Win!`;
    playerChoice_div.classList.add("green-glow");
    setTimeout(() => playerChoice_div.classList.remove("green-glow"), 400);
}

function lose(playerChoice, computerChoice) {
    const playerChoice_div = document.getElementById(playerChoice);
    computerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_h3.innerHTML = `${computerChoice} beats ${playerChoice}. You Lose!`;
    playerChoice_div.classList.add("red-glow");
    setTimeout(() => playerChoice_div.classList.remove("red-glow"), 400);
}

function tie(playerChoice, computerChoice) {
    const playerChoice_div = document.getElementById(playerChoice);
    result_h3.innerHTML = "Nothing happens, it's a Tie!";
    playerChoice_div.classList.add("grey-glow");
    setTimeout(() => playerChoice_div.classList.remove("grey-glow"), 400);
}

function game(playerChoice){
    const computerChoice = computerPlay();
    switch (playerChoice + computerChoice) {
        case "ScissorsPaper":
        case "PaperRock":
        case "RockScissors":
            win(playerChoice, computerChoice);
            break;
        case "PaperScissors":
        case "RockPaper":
        case "ScissorsRock":
            lose(playerChoice, computerChoice);
            break;
        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
            tie(playerChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', () => game("Rock"));
    
    paper_div.addEventListener('click', () => game("Paper"));
    
    scissors_div.addEventListener('click', () => game("Scissors"));
}



main();