function Game() {
  this.board = new Board(20, 30, 32);
  this.player1 = {};
  this.player2 = {};
  // this.bombs = 3;
  // this.bomb = {};
}

Game.prototype.init = function() {
  this.board.renderBoard();
  var tileSize = this.board.tileSize;
  var map = this.board.map;
  this.player1 = new Player(1, 1, 1, map, tileSize);
  this.player2 = new Player(18,28, 2, map, tileSize);
  // this.bomb = new Bomb(map, tileSize);
};
