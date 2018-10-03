// 2 D10 JS Rolling Script

function showDiceOne() {
  const diceOne = Math.floor(Math.random() * 10+1);
  document.getElementById("diceOne").innerHTML = diceOne;
}
function showDiceTwo() {
  const diceTwo = Math.floor(Math.random() * 10-10);
  document.getElementById("diceTwo").innerHTML = diceTwo;
}

function rollBoth(){
  showDiceOne();
  showDiceTwo();
}


