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
var gameboard = document.querySelector('#gameboard')

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

function findBox() {
  for (var i = 0; i < gameBoxes.length; i++) {
    if (event.target === gameBoxes[i]) {
      console.log(event.target)
    }
  }
}
