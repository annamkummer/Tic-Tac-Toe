class Game {
  constructor() {
    this.board = ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'];
    this.players = [];
    this.turn = null;
  }

  createPlayers() {
    var playerSnow = new Player('snow', 'snowflake');
    var playerSun = new Player('sun', 'sunshine');
    this.players.push(playerSnow, playerSun);
    this.turn = this.players[0];
  }

  playToken(box, token) {
    if (this.board[box] === 'empty') {
      this.board.splice(box, 1, token)
    }
    this.switchTurn();
  }

  switchTurn() {
    if (this.turn === this.players[0]) {
      this.turn = this.players[1];
    } else {
      this.turn = this.players[0];
    }
  }

  checkForWin() {
    var winningBoards = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for (var i = 0; i < winningBoards.length; i++) {
      var a = winningBoards[i][0];
      var b = winningBoards[i][1];
      var c = winningBoards[i][2];
// Can this conditional be clearer?
      if ((!(this.board[a] ==='empty') || !(this.board[b] === 'empty') || !(this.board[c] === 'empty')) && (this.board[a] === this.board[b] && this.board[a] === this.board[c])) {
        console.log('winner: ', this.board[a])
        return;
      }
    }
    if (!this.board.includes('empty')) {
      console.log('draw')
      return;
    }
    console.log('false')
  }

  resetBoard() {
    this.board = ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'];
  }
}

// A Game should include:
// *Two Player instances
// *A way to keep track of the data for the game board
// *A way to keep track of which player’s turn it currently is
// *A way to check the Game’s board data for win conditions
// *A way to detect when a game is a draw (no one has won)
// *A way to reset the Game’s board to begin a new game
