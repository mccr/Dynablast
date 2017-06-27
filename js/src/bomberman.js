var game;

$(document).ready(function() {
  game = new Game();

  $(document).on('keydown', movePlayer);
  //$(document).on('keydown', bombDrop);
  $('.empty').on('click', solidTileDrop);
  //$('#start').on('click', startGame);


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
      case 32:
      console.log('case 32');
        game.players.player1.dropBomb(true);
        break;
    }

      game.players.player1.moveForward(playerMove);
    // if(game.players.player1.active){
    //
    // } else {
    //   game.players.player2.moveForward(playerMove);
    // }

  }

  // function bombDrop (e) {
  //   var bomb;
  //   if(e.keycode === 32){
  //     bomb = true;
  //     game.players.player1.dropBomb(bomb);
  //   }
  //   // if(game.players.player1.active){
  //   //
  //   // } else {
  //   //   game.players.player2.dropBomb(bomb);
  //   // }
  // }

  function solidTileDrop () {
    if(game.players.player1.active){
      game.players.player1.dropSolidTile();
    } else {
      game.players.player2.dropSolidTile();
    }
  }
});
