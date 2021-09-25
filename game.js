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
}

// A Game should include:
// *Two Player instances
// *A way to keep track of the data for the game board
// *A way to keep track of which player’s turn it currently is
// A way to check the Game’s board data for win conditions
// A way to detect when a game is a draw (no one has won)
// A way to reset the Game’s board to begin a new game
