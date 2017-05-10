// back end

//player constructor
function Player() {
}

//DiceRoll prototype
Player.prototype.randomDiceRoll = function() {
  return Math.floor(Math.random() * 6 + 1);
}




// front end
$(document).ready(function() {
  $("button#player1roll").click(function(event) {
    event.preventDefault();

    var newPlayer = new Player();
    $("p.dice1").text(newPlayer.randomDiceRoll());

  });


  $("button#player2roll").click(function(event) {
    event.preventDefault();

    var newPlayer = new Player();
    $("p.dice2").text(newPlayer.randomDiceRoll());

  });
});
