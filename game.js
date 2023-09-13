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

    if (choose == 'rock' && computerChoice == 'Rock') {
        return 'Tie! Both players chose Rock';
    } else if (choose == 'rock' && computerChoice == 'Paper') {
        return 'You lose! Paper beats Rock';
    } else if (choose == 'rock' && computerChoice == 'Scissors') {
        return 'You win! Rock beats Scissors';
    } else if (choose == 'paper' && computerChoice == 'Paper') {
        return 'Tie! Both players chose Paper';
    } else if (choose == 'paper' && computerChoice == 'Rock') {
        return 'You win! Paper beats Rock';
    } else if (choose == 'paper' && computerChoice == 'Scissors') {
        return 'You lose! Scissors beats Paper'; 
    } else if (choose == 'scissors' && computerChoice == 'Scissors') {
        return 'Tie! Both players chose Scissors';
    } else if (choose == 'scissors' && computerChoice == 'Rock') {
        return 'You lose! Rock beats Scissors';
    } else if (choose == 'scissors' && computerChoice == 'Paper') {
        return 'You win! Scissors beats Paper';
    } else {
        return 'Please, enter a valid option (Rock, Paper or Scissors)';
    }
}



function game() {
    let userScore = 0;
    let computerScore = 0;

    for (i=0; i<5 ; i++) {
        userChoose = prompt('Please, enter an option ("Rock", "Paper" or "Scissors")').toLowerCase();
        while (userChoose != 'rock' && userChoose != 'paper' && userChoose != 'scissors') {
            userChoose = prompt('Please, enter a valid option ("Rock", "Paper" or "Scissors")').toLowerCase();
        }
        returned = playRound(userChoose, getComputerChoice());
        console.log(returned);
        spliced = returned.substring(0,5);
        if (spliced == 'You w') {
            userScore++;
        }
        else if (spliced == 'You l') {
            computerScore++;
        }
        else {}
    }

    if (userScore>computerScore) {
        return 'YOU WON THE GAME!';
    } else if (userScore<computerScore) {
        return 'You lose the game :( !';
    }
    else {
        return "It's a TIE!";
    }
}