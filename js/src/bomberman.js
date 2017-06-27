var game;

$(document).ready(function(){
  game = new Game();

  $(document).on( "keydown", movePlayer);
  //$('#start').on("click", startGame);


  function movePlayer(e) {
    var playerMove;
    switch (e.keyCode) {
      case 38: //up
        playerMove = "0";
        break;
      case 39: //right
        playerMove = "1";
        break;
      case 40: //down
        playerMove = "2";
        break;
      case 37: //left
        playerMove = "3";
        break;
    }
    console.log(playerMove + ' player move');
    game.players.player1.moveForward(playerMove);
  }
});
