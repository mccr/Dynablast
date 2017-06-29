var game;

$(document).ready(function() {
  game = new Game();

  window.onload = function() {
  game.init();
};

  $(document).on('keydown', movePlayer);
  $('#skip-turn').on('click', function(){
      game.changeTurn();
    });
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
        game.dropBomb();
        break;
    }
    game.isTurn(playerMove);
  }
});
