var game = new Game();

var gameboard = document.querySelector('#gameboard');
var header = document.querySelector('#header');
var player0Wins = document.querySelector('#player0Wins');
var player1Wins = document.querySelector('#player1Wins');

gameboard.addEventListener('click', displayToken);

newGame();

function newGame() {
  game.createPlayers();
  createGameboard();
  displayTurn();
  displayWins();
}

function createGameboard() {
  gameboard.innerHTML =  ``;
  for (var i = 0; i < 9; i++) {
    gameboard.innerHTML += `<article class='squares box-${i}' id='${i}'></article>`;
  }
}

function displayTurn() {
  header.innerHTML = `It's <img class='header-image' src=${game.turn.tokenImg} alt=${game.turn.tokenAltText}>'s turn!`;
}

function displayWins() {
  var winDisplayText = [];
  for (var i = 0; i < game.players.length; i++) {
    if (game.players[i].wins === 1) {
      var winText = 'win';
    } else {
      var winText = 'wins';
    }
    winDisplayText.push(`${game.players[i].wins} ${winText}`);
  }
  player0Wins.innerText = winDisplayText[0];
  player1Wins.innerText = winDisplayText[1];
}

function displayToken() {
  if (event.target.classList.contains('squares')) {
    game.playToken(event.target.id);
    event.target.innerHTML = `<img class='token-image' src=${game.board[event.target.id].tokenImg} alt=${game.board[event.target.id].tokenAltText}>`;
    event.target.classList.remove('squares');
  }
  checkForWin();
}

function checkForWin() {
  var result = game.checkForWin();
  if (!result) {
    displayTurn();
    return;
  } else if (result === 'draw') {
    header.innerText = `It's a draw!`;
  } else {
    header.innerHTML = `<img class='header-image' src=${result.tokenImg} alt=${result.tokenAltText}> wins!`;
  }
  endGame();
}

function endGame() {
  game.resetBoard();
  setTimeout(createGameboard, 1000);
  setTimeout(displayTurn, 1000);
  displayWins();
}
