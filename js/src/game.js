function Game() {
  this.board = new Board(20, 30, 32);
  this.player1 = {};
  this.player2 = {};
  this.bombs = 3;
  this.bomb = {};
  this.turn = 'player1';
}

Game.prototype.init = function() {
  this.board.renderBoard();
  var tileSize = this.board.tileSize;
  var map = this.board.map;
  this.player1 = new Player(1, 1, 1, map, tileSize);
  this.player2 = new Player(18,28, 2, map, tileSize);
  this.bomb = new Bomb(map, tileSize);
};

Game.prototype.dropBomb = function(){
  if(this.turn === 'player1' && this.bombs > 0){
      this.bombs --;
      this.bomb.dropBomb(this.player1.top, this.player1.left);
  } else if(this.turn === 'player2' && this.bombs > 0){
    this.bombs --;
    this.bomb.dropBomb(this.player2.top, this.player2.left);
  }

};

Game.prototype.isTurn = function(playerMove){
  if(this.turn === 'player1'){
    this.player1.moveForward(playerMove);
    if(this.bombs === 0){
      this.bombs = 3;
      this.turn = 'player2';
    }
  } else {
    this.player2.moveForward(playerMove);
    if(this.bombs === 0){
      this.bombs = 3;
      this.turn = 'player1';
    }
  }
};

Game.prototype.changeTurn = function() {
  if(this.turn === 'player1'){
    this.turn = 'player2';
    this.isTurn();
  } else {
    this.turn = 'player1';
    this.isTurn();
  }
};
