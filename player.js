class Player {
  constructor(player) {
    this.id = player.id;
    this.tokenImg = player.tokenImg;
    this.tokenAltText = player.tokenAltText;
    this.wins = this.retrieveWinsFromStorage();
  }

  saveWinsToStorage() {
    var stringifiedWins = JSON.stringify(this.wins);
    var savedWins = localStorage.setItem(`${this.id}`, stringifiedWins); // Does this need to be set to a variable
  }

  retrieveWinsFromStorage() {
    if (localStorage[`${this.id}`]) { // does this need to be interpolated?
      var savedWins = localStorage.getItem(`${this.id}`);
      var parsedWins = JSON.parse(savedWins);
      return parsedWins;
    } else { // A lot of folks  just return the else condition if there's a return in the if and skip else  but whatever's more readable
      return 0;
    }
  }
}
