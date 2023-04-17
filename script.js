//getting elements on which action has to be perrformed.\
const strikeButton = document.getElementById('strike');
const player1ScoreElement = document.getElementById('team1-score');
const player1WicketsElement = document.getElementById('team1-wickets');
const resetButton = document.getElementById('reset');
const player2ScoreElement = document.getElementById('team2-score');
const player2WicketsElement = document.getElementById('team2-wickets');

var playerBalls = 1;
var player1Score = 0;
var player1Wickets = 0;
var player2Score = 0;
var player2Wickets = 0;

function gameOver() {
  if (player1Score > player2Score) {
    alert('Ind Wins');
  }
  if (player1Score < player2Score) {
    alert('Pak Wins');
  }
  if (player1Score == player2Score) {
    alert('Draw');
  }
}

function getRandomOutcome() {
  possibleOutcome = [0, 1, 2, 3, 4, 5, 6, 'W'];
  return possibleOutcome[Math.floor(Math.random() * possibleOutcome.length)];
}

function updatePlayer1ScoreBoard() {
  player1ScoreElement.textContent = player1Score;
  player1WicketsElement.textContent = player1Wickets;
}
function updatePlayer2ScoreBoard() {
  player2ScoreElement.textContent = player2Score;
  player2WicketsElement.textContent = player2Wickets;
}
var turn = 1;
// Resetting the scores
resetButton.onclick = () => {
  window.location.reload();
};

strikeButton.onclick = () => {
  //player1 scenario.
  let randomOutcome = getRandomOutcome();
  //adding the current balls score to the UI

  if (turn == 2) {
    document.querySelector(
      `#team2-super div:nth-child(${playerBalls})`
    ).textContent = randomOutcome;
    playerBalls++;
    // calulating the score and wickets
    if (randomOutcome == 'W') {
      player2Wickets = player2Wickets + 1;
    } else {
      player2Score = player2Score + randomOutcome;
    }
    // updating the scoreboard
    updatePlayer2ScoreBoard();
    // game over conditions
    if (playerBalls > 6 || player1Wickets > 2 || player1Score < player2Score) {
      console.log('Game Over');
      gameOver();
      turn = 3;
    }
  }

  if (turn == 1) {
    document.querySelector(
      `#team1-super div:nth-child(${playerBalls})`
    ).textContent = randomOutcome;
    playerBalls++;
    // calulating the score and wickets
    if (randomOutcome == 'W') {
      player1Wickets = player1Wickets + 1;
      console.log(player1Wickets);
    } else {
      player1Score = player1Score + randomOutcome;
    }
    // updating the scoreboard
    updatePlayer1ScoreBoard();
    if (playerBalls > 6 || player1Wickets > 2) {
      console.log('Player 2 should start');
      turn = 2;
      playerBalls = 1;
    }
  }

  // adding the current balls score to the UI

  // balls should be increased
  // a random score to be generated
  // score board should be updated
};
