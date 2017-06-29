function Game() {
  this.board = {};
  this.player1 = {};
  this.player2 = {};
  this.bombs = 3;
  this.bomb = {};
  this.turn = 'player1';
  this.solidTile = 1;
  this.flag1 = {};
  this.flag2 = {};
  this.mapSelector = Math.floor(Math.random() * 3);
}

Game.prototype.init = function() {
  this.board = new Board(20, 30, 32, this.mapSelector);
  this._mapSelector();
  //this._dropSolidTileEvent();
};

Game.prototype._mapSelector = function(){
  var tileSize = this.board.tileSize,
      map = this.board.map,
      players = {},
      flags = {};

  switch(this.mapSelector){
    case 0:
      players = {
        player1: {
          top: 1,
          left: 1,
          playerNum: 1
        },
        player2: {
          top: 18,
          left: 28,
          playerNum: 2
        }
      };
      flags = {
        flag1: {
          top: 1,
          left: 2,
          flagNum: 1
        },
        flag2: {
          top: 17,
          left: 28,
          flagNum: 2
        }
      };
      this._newElements(players, flags, map, tileSize);
      break;
    case 1:
    players = {
      player1: {
        top: 1,
        left: 28,
        playerNum: 1
      },
      player2: {
        top: 17,
        left: 1,
        playerNum: 2
      }
    };
    flags = {
      flag1: {
        top: 7,
        left: 14,
        flagNum: 1
      },
      flag2: {
        top: 13,
        left: 14,
        flagNum: 2
      }
    };
    this._newElements(players, flags, map, tileSize);
      break;
    case 2:
    players = {
      player1: {
        top: '1',
        left: '13',
        playerNum: 1
      },
      player2: {
        top: '17',
        left: '13',
        playerNum: 2
      }
    };
    flags = {
      flag1: {
        top: '9',
        left: '13',
        flagNum: 1
      },
      flag2: {
        top: '9',
        left: '14',
        flagNum: 2
      }
    };
    this._newElements(players, flags, map, tileSize);
      break;
  }
};

Game.prototype._newElements = function(players, flags, map, tileSize){
  this.board.renderBoard();
  this.player1 = new Player(players.player1.top, players.player1.left, players.player1.playerNum, map, tileSize);
  this.player2 = new Player(players.player2.top, players.player2.left, players.player2.playerNum, map, tileSize);
  this.flag1 = new Flag(flags.flag1.top, flags.flag1.left, flags.flag1.flagNum, map, tileSize);
  this.flag2 = new Flag(flags.flag2.top, flags.flag2.left, flags.flag2.flagNum, map, tileSize);
  this.bomb = new Bomb(map, tileSize);
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
