# Tic-Tac-Toe
This version of the classic game pits snowflake against sunshine, notifies players about turns, wins, and draws, and keeps track of wins over time.<br>

https://user-images.githubusercontent.com/75143561/135121533-54c3b59f-fe3a-4173-a782-1cd154c559f7.mov

<hr>

## Install and Setup
In your terminal,
- clone: git@github.com:annamkummer/Tic-Tac-Toe.git
- and run: open index.html<br><br>
The project specifications can be found [here](https://frontend.turing.edu/projects/module-1/tic-tac-toe-solo.html)

## Technologies Used
- JavaScript
- CSS
- HTML
- Atom

## Code Architecture
- The data model is contained in the Game class. Its properties track the gameboard, player objects, and current turn. Its methods instantiate the Player class, update the board, check the board for wins and draws, and update the players' win counts.
- The Player class houses player ids and tokens and saves and retrieves win counts from local storage.
- DOM interactions are handled in the main.js file. It displays the gameboard and player data on page load and then uses the data model to update the board as users click in the squares.

## Contributors
- [Anna Kummer](https://github.com/annamkummer)
- Review by [James Sullivan](https://github.com/jsullivan5)

## Wins
- Allowing player wins to persist on refresh using localStorage
- Emphasizing which player's turn it is by updating the css to  highlight that player's image in the side panel

## Challenges and Improvements
- One challenge was allowing the gameboard display to respond to changes in screen size without also adjusting when the player tokens are placed. While this is currently achieved on normal computer browser sizes, it does not maintain in very reduced or mobile-sized screens.
- Future additions may include incorporating sounds and the ability for users to play across devices while maintaining their win counts.
