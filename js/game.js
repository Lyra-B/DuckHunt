// Constructor function for a Game

function Game(difficulty) {
  this.lives = 10;
  this.score = 0;
  this.shots = 0;
  this.modal = $('#difficulty-dialog');

  // Set the difficulty- easy by default
  if(typeof(difficulty) === "undefined") {
    $('#difficulty-dialog').show();
    var _this = this;

    $('.button').click(function(){
      $('#difficulty-dialog').hide();
      difficulty = this.id;
      _this.speed = _this.difficulty[difficulty];
      _this.nextRound();
    });
  }
  else {
    this.speed = this.difficulty[difficulty];
    this.nextRound();
  }

  // Kick-off the first wave of Ducks
}

// Maps difficulty to speed at which a Duck traverses the screen in milliseconds.
Game.prototype.difficulty = {
  easy: 8000,
  medium: 4000,
  hard: 2500
};

// Fire off two new Ducks. After waiting a little while, continue to the next
// round if we've got more lives, or show the Game Over screen.
Game.prototype.nextRound = function() {
  var duck = new Duck(this);
  var duck = new Duck(this);
  var _this = this;
  this.shots = 3;
  $('#shots').html(this.shots);
  $("#game").click(function(){
    if(_this.shots > 0) { _this.shots -= 1; }
    $('#shots').html(_this.shots);
  });

  // Do this again in a little while...
  var roundTimer = setTimeout(function() {
    // End the game if we've run out of lives
    if(_this.lives <= 0) {
      // Game over man
      _this.gameOver();
    }
    else {
      // Keep going!
      _this.nextRound();
    }
  }, this.speed + 2000);
};

// Show the Game Over modal and insert the player's score.
Game.prototype.gameOver = function() {
  $("#points").html(this.score);
  $("#game-over").toggle();
};

// Add the given number of points to the score, and print the total to the log.
Game.prototype.addScore = function(points) {
  this.score += points;
  console.log("Score: " + this.score);
};