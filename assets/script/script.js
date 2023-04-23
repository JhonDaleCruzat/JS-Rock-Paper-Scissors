// Define Variables
let buttons = document.querySelectorAll('button');
let playerScore = document.getElementById('player-score');
let computerScore = document.getElementById('computer-score');
let history = document.getElementById('history');
let playerSelection, computerSelection;
let playerScoreCount = 0;
let computerScoreCount = 0;

// Function for Computer Choice
function computerPlay() {
    const choices = ['Conan', 'Ran', 'Detective Mouri'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Conditional Statement for Player Win / Computer Win
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
    return "It's a tie!";
    } else if (playerSelection === 'Conan' && computerSelection === 'Detective Mouri' || playerSelection === 'Detective Mouri' && computerSelection === 'Ran' || playerSelection === 'Ran' && computerSelection === 'Conan') {
        playerScoreCount++;
        return `You win! You chose ${playerSelection} and Computer chose ${computerSelection}`;
    } else {
        computerScoreCount++;
        return `You lose! You chose ${playerSelection} and Computer chose ${computerSelection}`;
    }
}

// Function that updates the scoreboard after each match
function updateScore() {
    playerScore.textContent = playerScoreCount;
    computerScore.textContent = computerScoreCount;
}

// Function that updates the match history using appendChild
function updateHistory(result) {
    const li = document.createElement('li');
    li.textContent = result;
    history.appendChild(li);
    var lastLi = document.querySelector('#history li:last-child');
	lastLi.scrollIntoView();
}

// Function that resets the game to 0
function resetGame() {
    playerScoreCount = 0;
    computerScoreCount = 0;
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    history.innerHTML = '';
}

// Loops the score, if player/computer reached 5 points, alert will pop out to announce the winner then resets the game to 0
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection);
        updateScore();
        updateHistory(result);
        if (playerScoreCount === 5 || computerScoreCount === 5) {
            alert(`Game over! ${playerScoreCount > computerScoreCount ? 'You win!' : 'You lose!'}`);
            resetGame();
        }
    });
});