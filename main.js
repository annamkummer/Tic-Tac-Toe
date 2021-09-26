var game = new Game();

var gameboard = document.querySelector('#gameboard');
var header = document.querySelector('#header');
var player0Wins = document.querySelector('#player0Wins');
var player1Wins = document.querySelector('#player1Wins');
var snowSideImg = document.querySelector('#snow')
var sunSideImg = document.querySelector('#sunshine')

gameboard.addEventListener('click', displayToken);

newGame();

function newGame() {
  game.createPlayers();
  createGameboard();
  displayTurn();
  snowSideImg.classList.add('turn');
  snowSideImg.classList.remove('not-turn');
  sunSideImg.classList.remove('turn');
  sunSideImg.classList.add('not-turn');
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

  if (game.turn.id === 'sunshine') {
    sunSideImg.classList.add('turn')
    snowSideImg.classList.remove('turn')
    sunSideImg.classList.remove('not-turn')
    snowSideImg.classList.add('not-turn')
  } else {
    snowSideImg.classList.add('turn')
    sunSideImg.classList.remove('turn')
    snowSideImg.classList.remove('not-turn')
    sunSideImg.classList.add('not-turn')
  }
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
    header.innerText = `Cat's game!`;
    showDrawImage();
  } else {
    header.innerHTML = `<img class='header-image' src=${result.tokenImg} alt=${result.tokenAltText}> wins!`;
    showWinImage();
  }
  endGame();
}

function showDrawImage() {
  gameboard.innerHTML = `<img class='end-game-image' src='assets/cat.jpeg' alt='cat with tongue out'>`;
}

function showWinImage() {
  gameboard.innerHTML = `<img class='end-game-image' src='assets/lightning.svg' alt='blue lightning bolt'>`;
}

function endGame() {
  game.resetBoard();
  setTimeout(createGameboard, 1500);
  setTimeout(displayTurn, 1500);
  displayWins();
}
