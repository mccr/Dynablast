var game;

// function volumeDown(){
//     var volume = $("game-sound").prop("volume")-0.1;
//     if(volume <0){
//         volume = 0;
//     }
//     $("game-sound").prop("volume",volume);
// }

$(document).ready(function() {
  game = new Game();

  // var vol = getElementById('#game-sound');
  // vol.volume = 0.2;

  $("#intro").trigger('play');

  $(document).on('keydown', movePlayer);
  $('#skip-turn').on('click', function() {
    game.changeTurn();
  });
  $('#start').on('click', function() {
    $("#intro").trigger('pause');
    $('#game-sound').prop('volume', 0.1);
    $('#game-sound').trigger('play');
    game.init();
  });

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
        $('drop-bomb').trigger('play');
        game.dropBomb();
        break;
    }
    game.isTurn(playerMove);
  }
});
