var game = new Game();

var gameboard = document.querySelector('#gameboard');
var header = document.querySelector('#header');
var sidePanels = document.querySelectorAll('.side-panel');

gameboard.addEventListener('click', displayToken);

newGame();

function newGame() {
  game.createPlayers();
  createGameboard();
  displayTurn();
  emphasizeTurn();
}

function createGameboard() {
  gameboard.innerHTML =  ``;
  for (var i = 0; i < 9; i++) {
    gameboard.innerHTML += `<article class='free-square box-${i}' id='${i}'></article>`;
  }
}

function displayTurn() {
  header.innerHTML = `It's <img class='header-image' src=${game.turn.tokenImg} alt=${game.turn.tokenAltText}>'s turn!`;
  emphasizeTurn();
}

function emphasizeTurn() {
  for (var i = 0; i < sidePanels.length; i++) {
    if (game.turn === game.players[i]) {
      var turn = 'turn';
    } else {
      var turn = 'not-turn';
    }
    sidePanels[i].innerHTML = `
      <img class=${turn} src=${game.players[i].tokenImg} alt=${game.players[i].tokenAltText}>
      <h2>${displayWins(game.players[i])}</h2>
      `;
  }
}

function displayWins(player) {
  if (player.wins === 1) {
    var winText = 'win';
  } else {
    var winText = 'wins';
  }
  return `${player.wins} ${winText}`;
}

function displayToken() {
  if (event.target.classList.contains('free-square')) {
    game.playToken(event.target.id);
    event.target.innerHTML = `<img class='token-image' src=${game.board[event.target.id].tokenImg} alt=${game.board[event.target.id].tokenAltText}>`;
    event.target.classList.remove('free-square');
  }
  checkForWin();
}

function checkForWin() {
  var result = game.checkForWin();
  if (!result) {
    displayTurn();
    return;
  } else if (result === 'draw') {
    showDrawContent();
  } else {
    showWinContent(result);
  }
  endGame();
}

function showDrawContent() {
  header.innerText = `Cat's game!`;
  gameboard.innerHTML = `<img class='end-game-image' src='assets/cat.jpeg' alt='cat with tongue out'>`;
}

function showWinContent(winner) {
  header.innerHTML = `<img class='header-image' src=${winner.tokenImg} alt=${winner.tokenAltText}> wins!`;
  gameboard.innerHTML = `<img class='end-game-image' src='assets/lightning.svg' alt='blue lightning bolt'>`;
}

function endGame() {
  game.resetBoard();
  setTimeout(newGame, 1500);
}
