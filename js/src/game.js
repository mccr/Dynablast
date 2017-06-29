function Game() {
  this.board = new Board(20, 30, 32);
  this.player1 = {};
  this.player2 = {};
  this.bombs = 3;
  this.bomb = {};
  this.turn = 'player1';
  this.solidTile = 1;
  this.flag1 = {};
  this.flag2 = {};
}

Game.prototype.init = function() {
  this.board.renderBoard();
  var tileSize = this.board.tileSize;
  var map = this.board.map;
  this.player1 = new Player(1, 1, 1, map, tileSize);
  this.player2 = new Player(18, 28, 2, map, tileSize);
  this.flag1 = new Flag(1, 1, 2, map, tileSize);
  this.flag2 = new Flag(2, 17, 28, map, tileSize);
  this.bomb = new Bomb(map, tileSize);
  //this._dropSolidTileEvent();
};

// Game.prototype._dropSolidTileEvent = function() {
//   var that = this;
//   $('.empty').on('click', function() {
//     that._dropSolidTile($(this));
//   });
// };

Game.prototype.dropBomb = function() {
  if (this.turn === 'player1' && this.bombs > 0) {
    this.bombs--;
    this.bomb.dropBomb(this.player1.top, this.player1.left);
  } else if (this.turn === 'player2' && this.bombs > 0) {
    this.bombs--;
    this.bomb.dropBomb(this.player2.top, this.player2.left);
  }

};

Game.prototype.isTurn = function(playerMove) {
  if (this.turn === 'player1') {
    this.player1.moveForward(playerMove);
    if (this.bombs === 0) {
      this.solidTile = 1;
      this.bombs = 3;
      this.turn = 'player2';
    }
  } else {
    this.player2.moveForward(playerMove);
    if (this.bombs === 0) {
      this.solidTile = 1;
      this.bombs = 3;
      this.turn = 'player1';
    }
  }
};

Game.prototype.changeTurn = function() {
  if (this.turn === 'player1') {
    this.turn = 'player2';
    this.isTurn();
  } else {
    this.turn = 'player1';
    this.isTurn();
  }
};

// Game.prototype._dropSolidTile = function(element) {
//   var arr, y,x;
//   if (this.solidTile) {
//     element.removeClass('empty').addClass('solidTile');
//     arr = (element[0].id).split('-').map(function(n) {
//       return parseInt(n);
//     });
//     y = arr[0];
//     x = arr[1];
//     this.board.map[x][y] = 'S';
//     this.solidTile--;
//   }
// };
