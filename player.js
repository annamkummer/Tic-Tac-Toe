class Player {
  constructor(player) {
    this.id = player.id;
    this.tokenImg = player.tokenImg;
    this.tokenAltText = player.tokenAltText;
    this.wins = this.retrieveWinsFromStorage();
  }

  saveWinsToStorage() {
    var stringifiedWins = JSON.stringify(this.wins);
    var savedWins = localStorage.setItem(`${this.id}`, stringifiedWins);
  }

  retrieveWinsFromStorage() {
    if (localStorage[`${this.id}`]) {
      var savedWins = localStorage.getItem(`${this.id}`);
      var parsedWins = JSON.parse(savedWins);
      return parsedWins;
    } else {
      return 0;
    }
  }
}
