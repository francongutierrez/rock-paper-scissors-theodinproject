function getComputerChoice() {
    let number = Math.floor(Math.random() * 3) + 1;

    if (number==1) {
        return 'Rock';
    } else if (number==2) {
        return 'Paper';
    }
    else {
        return 'Scissors';
    }
}

function playRound(playerChoice, computerChoice) {

    let choose = playerChoice.toLowerCase();
    let results = document.querySelector('#results');

    if (choose == 'rock' && computerChoice == 'Rock') {
        results.innerText = 'Tie! Both players chose Rock';
        return 0;
    } else if (choose == 'rock' && computerChoice == 'Paper') {
        results.innerText = 'You lose! Paper beats Rock';
        return 1;
    } else if (choose == 'rock' && computerChoice == 'Scissors') {
        results.innerText = 'You win! Rock beats Scissors';
        return 2;
    } else if (choose == 'paper' && computerChoice == 'Paper') {
        results.innerText = 'Tie! Both players chose Paper';
        return 0;
    } else if (choose == 'paper' && computerChoice == 'Rock') {
        results.innerText = 'You win! Paper beats Rock';
        return 2;
    } else if (choose == 'paper' && computerChoice == 'Scissors') {
        results.innerText = 'You lose! Scissors beats Paper'; 
        return 1; 
    } else if (choose == 'scissors' && computerChoice == 'Scissors') {
        results.innerText = 'Tie! Both players chose Scissors';
        return 0;
    } else if (choose == 'scissors' && computerChoice == 'Rock') {
        results.innerText = 'You lose! Rock beats Scissors';
        return 1;
    } else if (choose == 'scissors' && computerChoice == 'Paper') {
        results.innerText = 'You win! Scissors beats Paper';
        return 2;
    } else {
        results.innerText = 'Please, enter a valid option (Rock, Paper or Scissors)';
    }
}

let userScore = {score: 0};
let computerScore = {score: 0};

function game(userChoose, user, computer) {
    let finalResult = document.querySelector('#finalResult');
    let numUser = document.querySelector('#userScore');
    let numComputer = document.querySelector('#computerScore');

    
    returned = playRound(userChoose, getComputerChoice());
    if (returned == 2) {
        user.score++;
    }
    else if (returned == 1) {
        computer.score++;
    }
    else {}

    numUser.innerText = 'User score: ' + user.score;
    numComputer.innerText = 'Computer score: ' + computer.score;

    if (user.score == 3) {
        finalResult.innerText = 'YOU WON THE GAME!';
        user.score = 0;
        computer.score = 0;
    } 
    if (computer.score == 3) {
        finalResult.innerText = 'You lose the game :( !';
        user.score = 0;
        computer.score = 0;
    }
}

const gameContainer = document.querySelector('.options');

gameContainer.addEventListener('click', (event) => {
    const target = event.target;
    
    if (target.matches('.choice')) {
        game(target.id, userScore, computerScore);
    }
});

function reset() {
    let numUser = document.querySelector('#userScore');
    let numComputer = document.querySelector('#computerScore');
    let results = document.querySelector('#results');
    userScore.score = 0;
    computerScore.score = 0;
    numUser.innerText = 'User score: ' + userScore.score;
    numComputer.innerText = 'Computer score: ' + computerScore.score;
    results.innerText = 'Scores have been reseted';

}