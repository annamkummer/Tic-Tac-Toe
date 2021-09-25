class Player {
// Revisit constructor parameters when buidling localStorage
  constructor(id, token, wins) {
    this.id = id;
    this.token = token;
    this.wins = wins || 0;
  }

  saveWinsToStorage() {
// Put localStorage function here
  }

  retrieveWinsFromStorage() {
// Put localStorage function here
  }
}
