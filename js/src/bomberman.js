var game;

$(document).ready(function() {
  game = new Game();

//   window.onload = function() {
//   game.start();
// };
//
  $(document).on('keydown', movePlayer);
//   $(document).on('keydown', bombDrop);
//   $('.tile.empty').on('click', function(){
//     console.log(this);
//     console.log('solidTileDrop');
//   });
//   $('#start').on('click', startGame);
//
//
  function movePlayer(e) {
    var playerMove;
    switch (e.keyCode) {
      case 38: //up
        playerMove = 'N';
        break;
      case 39: //right
        playerMove = 'E';
        break;
      case 40: //down
        playerMove = 'S';
        break;
      case 37: //left
        playerMove = 'W';
        break;
      // case 32:
      // console.log('case 32');
      //   game.player1.dropBomb(true);
      //   break;
    }

      game.player1.moveForward(playerMove);
//     if(game.players.player1.active){
//
//     } else {
//       game.players.player2.moveForward(playerMove);
//     }
//
  }
//
//   function bombDrop (e) {
//     var bomb;
//     if(e.keycode === 32){
//       bomb = true;
//       game.players.player1.dropBomb(bomb);
//     }
//     if(game.players.player1.active){
//
//     } else {
//       game.players.player2.dropBomb(bomb);
//     }
//   }
//
//   function solidTileDrop () {
//     console.log(this);
//     console.log('solidTileDrop');
//     this.removeClass('empty');
//     this.addClass('solidTile');
//     game.players.player1.dropSolidTile();
//     if(game.players.player1.active){
//
//     } else {
//       game.players.player2.dropSolidTile();
//     }
//   }
});
