var game = new Game();

var box0 = document.querySelector('#box0');
var box1 = document.querySelector('#box1');
var box2 = document.querySelector('#box2');
var box3 = document.querySelector('#box3');
var box4 = document.querySelector('#box4');
var box5 = document.querySelector('#box5');
var box6 = document.querySelector('#box6');
var box7 = document.querySelector('#box7');
var box8 = document.querySelector('#box8');
var gameboard = document.querySelector('#gameboard');
var header = document.querySelector('#header');
var player0Wins = document.querySelector('#player0Wins');
var player1Wins = document.querySelector('#player1Wins');

var gameBoxes = [
  box0,
  box1,
  box2,
  box3,
  box4,
  box5,
  box6,
  box7,
  box8
];

gameboard.addEventListener('click', findBox)

newGame()

function newGame() {
  game.createPlayers();
  displayBoard();
  displayWins();
}

function displayBoard() {
  for (var i = 0; i < game.board.length; i++) {
    if (game.board[i] === 'empty') {
      gameBoxes[i].innerText = '';
    } else {
      gameBoxes[i].innerHTML = `<img class='token-image' src=${game.board[i].tokenImg} alt=${game.board[i].tokenAltText}>`
    }


    if (game.board[i] === 'snow') {
      gameBoxes[i].innerHTML = `<img class="token-image" src="assets/snowflake.svg" alt="snowflake">`;
    }
    if (game.board[i] === 'sunshine') {
      gameBoxes[i].innerHTML = `<img class="token-image" src="assets/sun.svg" alt="sun">`;
    }
  }
  checkForWin();
}

function displayWins() {
  var winDisplayText = []
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

function displayTurn() {
  header.innerHTML = `It's <img class='header-image' src=${game.turn.tokenImg} alt=${game.turn.tokenAltText}>'s turn!`
}

function findBox() {
  for (var i = 0; i < gameBoxes.length; i++) {
    if (event.target === gameBoxes[i]) {
      game.playToken(i);
    }
  }
  displayBoard();
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
  setTimeout(displayBoard, 1000);
  displayWins();
}
