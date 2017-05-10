// front end
$(document).ready(function() {
  $("form#nameInput1").submit(function(event) {
    event.preventDefault();

    //get names from user input form
    var nameUser1 = $("input#person1name").val();
    var nameUser2 = $("input#person2name").val();

    //add names to h3 under PLAYER1 and PLAYER2
    $("h3#player1name").text(nameUser1);
    $("h3#player2name").text(nameUser2);
  });
});


// back end
