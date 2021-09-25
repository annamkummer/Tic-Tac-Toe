class Player {
  constructor(id, token, wins) {
    this.id = id;
    this.token = token;
    this.wins = wins || 0;
  }

  saveWinsToStorage() {
    var stringifiedWins = JSON.stringify(this.wins);
    var savedWins = localStorage.setItem(`${this.id}`, stringifiedWins)
  }

  retrieveWinsFromStorage() {
    if (localStorage[`${this.id}`]) {
      var savedWins = localStorage.getItem(`${this.id}`);
      var parsedWins = JSON.parse(savedWins);
      return parsedWins;
    }
  }
}
