function Game() {
  this.board = new Board(20, 30, 32);
  this.player1Position = [];
  this.player2Position = [];
  this.gridPositionP1 = [];
  this.gridPositionP2 = [];
  this.maps = [];
  this.players = {};
}

Game.prototype.start = function() {
    var gridPosition = this.board.renderBoard();
    var players = this.board.playersPosition(gridPosition);
    this.player1Position = players[0];
    this.player2Position = players[1];
    this.gridPositionP1 = players[2][0];
    this.gridPositionP2 = players[2][1];
    this.maps = players[3];
    this.players = {
      player1: new Player(this.player1Position, this.gridPositionP1, this.maps),
      player2: new Player(this.player2Position, this.gridPositionP2, this.maps)
    };
    };
