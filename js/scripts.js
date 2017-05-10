// BUSINESS LOGIC //

//player constructor
function Player() {
this.roundScore = [];
this.totalScore = 0;
this.lastRoll = 0;
}

// prototype for player to roll dice and generate a random number from 1-6
Player.prototype.randomDiceRoll = function() {
  return Math.floor(Math.random() * 6 + 1);
}

//prototype to add up the running total for roundScore array
Array.prototype.addArray = function () {
  var result = 0;
  this.forEach(function(num) {
    result += num;
  });
  return result;
}


//player prototype to determine what to do with dice output
Player.prototype.playerRound = function(buttonClickName) {
  debugger;
  //if they click on roll whatever the random number is will be connected to .lastRoll
  if (buttonClickName === "roll") {
    var diceNumber = this.randomDiceRoll();
    this.lastRoll = diceNumber
  } //if they roll a 1, empties the roundScore array so nothing to add to score
  if (diceNumber === 1) {
    this.roundScore = [];
  } //if they roll a 2-6 push that value to their roundScore array
  else {
    this.roundScore.push(diceNumber);
  }
  // if they click on hold, add roundScore array to totalScore
  if (buttonClickName === "hold") {
    var roundScoreTotal = this.roundScore.addArray();
    this.totalScore += roundScoreTotal;
    this.roundScore = [];
  }
}



// USER INTERFACE LOGIC //
$(document).ready(function() {
  var buttonClickName = $(this).prop("name");
  var newPlayer = new Player();
  
  //player 1 rolling dice
  $("button#player1roll").click(function(event) {
    event.preventDefault();

    $("p.dice1").text(newPlayer.randomDiceRoll());

    $("h3.player1total").text(newPlayer.roundScore.addArray());
  });

  //player 2 rolling dice
  $("button#player2roll").click(function(event) {
    event.preventDefault();

    var newPlayer = new Player();
    $("p.dice2").text(newPlayer.randomDiceRoll());

  });
});
