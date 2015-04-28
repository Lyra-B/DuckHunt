$(document).ready(function() {
  if(typeof(difficulty) === "undefined") {
    $('#difficulty-dialog').show();
    $('.button').click(function(){
      $('#difficulty-dialog').hide();
      var difficulty = this.id;
    });
  }

  console.log("Welcome to Duck Hunt!");

  // Behaviour for the play again link
  $('#play-again').click(function(e) {
    $("#game-over").toggle();
    new Game();
  });

  // Moves the crosshair with the mousepointer
  // TODO: Add a mousemove event to the #game element...

  $( "#game" ).on('mousemove', function(e){
    $( "#crosshair" ).css({
      left:  e.pageX,
      top:   e.pageY
    });
  });

  // Kick-off a New Game
  // TODO: Pass in a string to represent the difficulty level
  new Game();
});