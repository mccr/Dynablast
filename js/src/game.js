function Game() {
  this.board = new Board(20, 30, 32);
  this.player1 = {};
  this.player2 = {};
}

Game.prototype.start = function() {
    var info = this.board.renderBoard();
    this.player1 = new Player(info.player1, info.maps, true);
    this.player2 = new Player(info.player2, info.maps, false);
    $('.player1').addClass('down');
    $('.player2').addClass('down');
    var that = this;
    $('.tile.empty').on('click', function(){
        console.log(event)
        console.log($(this))
        console.log(that)
        that.player1.dropSolidTile($(this));
    });
};
