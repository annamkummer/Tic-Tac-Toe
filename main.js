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
}

function findBox() {
  for (var i = 0; i < gameBoxes.length; i++) {
    if (event.target === gameBoxes[i]) {
      game.playToken(i);
    }
  }
  displayBoard();
}

function displayBoard() {
  for (var i = 0; i < game.board.length; i++) {
    if (game.board[i] === 'empty') {
      gameBoxes[i].innerText = '';
    }
    if (game.board[i] === 'snowflake') {
      gameBoxes[i].innerHTML = `<img class="token-image" src="assets/snowflake.svg" alt="snowflake">`;
    }
    if (game.board[i] === 'sunshine') {
      gameBoxes[i].innerHTML = `<img class="token-image" src="assets/sun.svg" alt="sun">`;
    }
  }
  checkForWin();
}

function displayTurn() {
  if (game.turn.token === 'snowflake') {
    var player = `<img class="header-image" src="assets/snowflake.svg" alt="snowflake">`;
  }
  if (game.turn.token === 'sunshine') {
    var player = `<img class="header-image" src="assets/sun.svg" alt="sun">`;
  }
  header.innerHTML = `It's ${player}'s turn!`
}

function checkForWin() {
  var result = game.checkForWin();
  if (!result) {
    displayTurn();
    return;
  } else if (result === 'draw') {
    header.innerText = `It's a draw!`;
  } else {
    if (result === 'snowflake') {
      var winner = `<img class="header-image" src="assets/snowflake.svg" alt="snowflake">`;
    }
    if (result === 'sunshine') {
      var winner = `<img class="header-image" src="assets/sun.svg" alt="sun">`;
    }
    header.innerHTML = `${winner} wins!`;
  }
  endGame();
}

function endGame() {
  game.resetBoard();
  setTimeout(displayBoard, 1000);
}
