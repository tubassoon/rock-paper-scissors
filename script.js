let playerScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const playerDecision_div = document.getElementById("player-decision");
const computerDecision_div = document.getElementById("computer-decision");
const score_div = document.querySelector(".score");
const result_h1 = document.querySelector(".result > h1");
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissors_div = document.getElementById("Scissors");
const lizard_div = document.getElementById("Lizard");
const spock_div = document.getElementById("Spock");

function computerPlay() {
    let computerWeapon=["Rock", "Paper", "Scissors", "Lizard", "Spock"];
    let randomNumber = Math.floor(Math.random()*computerWeapon.length);
    return computerWeapon[randomNumber];
}

function win(playerChoice, computerChoice) {
    const playerChoice_div = document.getElementById(playerChoice);
    const computerChoice_div = document.getElementById(computerChoice);
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_h1.innerHTML = `<span style="color: #002627;">${playerChoice} beats ${computerChoice}. You Win!</span>`;
    playerChoice_div.classList.add("green-glow");
    setTimeout(() => playerChoice_div.classList.remove("green-glow"), 400);
    playerDecision_div.innerHTML = playerChoice_div.innerHTML;
    computerDecision_div.innerHTML = computerChoice_div.innerHTML;
}

function lose(playerChoice, computerChoice) {
    const playerChoice_div = document.getElementById(playerChoice);
    const computerChoice_div = document.getElementById(computerChoice);
    computerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_h1.innerHTML = `<span style="color: #600000;">${computerChoice} beats ${playerChoice}. You Lose!</span>`;
    playerChoice_div.classList.add("red-glow");
    setTimeout(() => playerChoice_div.classList.remove("red-glow"), 400);
    playerDecision_div.innerHTML = playerChoice_div.innerHTML;
    computerDecision_div.innerHTML = computerChoice_div.innerHTML;
}

function tie(playerChoice, computerChoice) {
    const playerChoice_div = document.getElementById(playerChoice);
    const computerChoice_div = document.getElementById(computerChoice);
    result_h1.innerHTML = "Nothing happens, it's a Tie!";
    playerChoice_div.classList.add("grey-glow");
    setTimeout(() => playerChoice_div.classList.remove("grey-glow"), 400);
    playerDecision_div.innerHTML = playerChoice_div.innerHTML;
    computerDecision_div.innerHTML = computerChoice_div.innerHTML;
}

function game(playerChoice){
    const computerChoice = computerPlay();
    switch (playerChoice + computerChoice) {
        case "RockScissors":
        case "RockLizard":
        case "PaperRock":
        case "PaperSpock":
        case "ScissorsPaper":
        case "ScissorsLizard":
        case "LizardPaper":
        case "LizardSpock":
        case "SpockRock":
        case "SpockScissors":
            win(playerChoice, computerChoice);
            break;
        case "RockPaper":
        case "RockSpock":
        case "PaperScissors":
        case "PaperLizard":
        case "ScissorsRock":
        case "ScissorsSpock":
        case "LizardRock":
        case "LizardScissors":
        case "SpockPaper":
        case "ScissorsLizard":
            lose(playerChoice, computerChoice);
            break;
        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
        case "LizardLizard":
        case "SpockSpock":
            tie(playerChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', () => game("Rock"));
    
    paper_div.addEventListener('click', () => game("Paper"));
    
    scissors_div.addEventListener('click', () => game("Scissors"));

    lizard_div.addEventListener('click', () => game("Lizard"));
    
    spock_div.addEventListener('click', () => game("Spock"));
}



main();