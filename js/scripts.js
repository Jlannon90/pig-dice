// back end

//player constructor
function Player() {
  // this.roll = roll;
}

//DiceRoll prototype
Player.prototype.randomDiceRoll = function() {
  return Math.floor(Math.random() * 6 + 1);
}




// front end
$(document).ready(function() {
  $("button#player1roll").click(function(event) {
    console.log("hi");
    event.preventDefault();
    // debugger;

    var newPlayer = new Player();
    $("p").text(newPlayer.randomDiceRoll());

    // console.log(newDiceRoll);

  });
});
