var game;

$(document).ready(function() {
  game = new Game();

//   window.onload = function() {
//   game.start();
// };
//
  $(document).on('keydown', movePlayer);
  $('#skip-turn').on('click', function(){
      game.changeTurn();
    });


  // emptyTiles.addEventListener('click', function(e){
  //    e.currentTarget.style.visibility = "hidden";
  //     console.log('here');
  //   });


      console.log($('.empty'))
//   $('#start').on('click', startGame);

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
      case 32:
      console.log('case 32');
        game.dropBomb();
        break;
    }
    game.isTurn(playerMove);
  }

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
