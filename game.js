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

// The 'box' and 'token' parameters are currently input manually. Revisit when building DOM interaction.
  playToken(box) {
    if (this.board[box] === 'empty') {
      this.board.splice(box, 1, this.turn.token);
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
    ];
    for (var i = 0; i < winningBoards.length; i++) {
      var a = winningBoards[i][0];
      var b = winningBoards[i][1];
      var c = winningBoards[i][2];
// Can this conditional be clearer?
      if ((!(this.board[a] ==='empty') || !(this.board[b] === 'empty') || !(this.board[c] === 'empty')) && (this.board[a] === this.board[b] && this.board[a] === this.board[c])) {
        return this.board[a];
      }
    }
    if (!this.board.includes('empty')) {
      return 'draw'
    }
    return 'false'
  }

  resetBoard() {
    this.board = ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'];
  }
}
