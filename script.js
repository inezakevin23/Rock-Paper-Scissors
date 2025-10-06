// the logic to get computer logic
function getComputerChoice() {
    // Math.floor(Math.random() * (max - min + 1)) + min; formula i used below to get random number between 1 and 3
    const computerChoice = Math.floor(Math.random() * 3) + 1;

    if (computerChoice === 1) {
        return 'rock';
    }
    else if (computerChoice === 2) {
        return 'paper';
    }
    else if (computerChoice === 3) {
        return 'scissors';
    }
    return computerChoice;

}

getComputerChoice();

//the logic to get human choice 
function getHumanChoice() {
    const humanChoice = prompt('Enter rock, paper, or scissors:').toLowerCase();
    if (humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors') {
        return humanChoice;
    }
    else {
        alert('Invalid choice. Please enter rock, paper, or scissors.');
        return getHumanChoice();
    }
}

getHumanChoice();

// declaration of players score variables
let humanscore = 0; 
let computerscore = 0;

// // the logic to play single round
// function playRound(humanChoice, computerChoice){
//     if (humanChoice === computerChoice)
//         return console.log(draw)
// }

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a draw!";
    }
    else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanscore++;
        return `You win! ${humanChoice} beats ${computerChoice}.`;
    }
    else {
        computerscore++;
        return `You lose! ${computerChoice} beats ${humanChoice}.`;
    }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);

// the logic to play a game of 5 rounds
function playGame() {
    for (let i=1, i <=5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Round ${i}: ${playRound(humanSelection, computerSelection)}`);
        console.log(`Score - You: ${humanscore}, Computer: ${computerscore}`);
    }
    if (humanscore > computerscore){
        console.log('Congratulations! You won the game!');
    }
    else if (computerscore > humanscore){
        console.log('Sorry, you lost the game. Better luck next time!');
    }
    else {
        console.log("It's a draw game!");
    } 

}
playGame();