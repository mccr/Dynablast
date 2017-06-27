function Player(position, gridPosition, maps, active) {
  this.position = position;
  this.direction = 2; //0: up, 1: right, 2: down, 3: left
  this.gridPosition = gridPosition;
  this.maps = maps;
  this.bombs = 3;
  this.solidTile = 1;
  this.active = active;
}

Player.prototype.moveForward = function(direction) {
  this.direction = parseInt(direction);

  switch (this.direction) {
    case 0:
      if (this.isPathForward()) {
        this._up();
        this._updateGridPosition();
      }
      break;
    case 1:
      if (this.isPathForward()) {
        this._right();
        this._updateGridPosition();
      }
      break;
    case 2:
      if (this.isPathForward()) {
        this._down();
        this._updateGridPosition();
      }
      break;
    case 3:
      if (this.isPathForward()) {
        this._left();
        this._updateGridPosition();
      }
      break;
  }
};

Player.prototype.dropBomb = function(bomb) {
    this.bombs--;
    console.log(this.bombs);
    var id = '#'+this.gridPosition.col+'-'+this.gridPosition.row;
    var bombing = $('<img>').attr({
      src: 'css/assets/Bomb/Bomb_f01.png',
      width: '32px'
    });
    $('#board > div'+id).append(bombing);

};

Player.prototype.dropSolidTile = function() {

};

Player.prototype._up = function() {
    var id = '#' + this.gridPosition.col + '-' + (this.gridPosition.row - 1);
    var prevId = '#' + this.gridPosition.col + '-' + this.gridPosition.row;
    $('div' + prevId).removeClass();
    $('div' + prevId).addClass('tile empty');
    $('div' + id).removeClass('tile empty');
    $('div' + id).addClass('players player1 up');
};

Player.prototype._down = function() {
  var id = '#' + this.gridPosition.col + '-' + (this.gridPosition.row + 1);
  var prevId = '#' + this.gridPosition.col + '-' + this.gridPosition.row;
  $('div' + prevId).removeClass();
  $('div' + prevId).addClass('tile empty');
  $('div' + id).removeClass('tile empty');
  $('div' + id).addClass('players player1 down');
};

Player.prototype._right = function() {
  var id = '#' + (this.gridPosition.col + 1) + '-' + this.gridPosition.row;
  var prevId = '#' + this.gridPosition.col + '-' + this.gridPosition.row;
  $('div' + prevId).removeClass();
  $('div' + prevId).addClass('tile empty');
  $('div' + id).removeClass('tile empty');
  $('div' + id).addClass('players player1 right');
};

Player.prototype._left = function() {
  var id = '#' + (this.gridPosition.col - 1) + '-' + this.gridPosition.row;
  var prevId = '#' + this.gridPosition.col + '-' + this.gridPosition.row;
  $('div' + prevId).removeClass();
  $('div' + prevId).addClass('tile empty');
  $('div' + id).removeClass('tile empty');
  $('div' + id).addClass('players player1 left');
};

Player.prototype.isPathForward = function() {
  var response;
  switch (this.direction) {
    case 0:
      response = ((this.gridPosition.row - 1) >= 0 && (this.maps[this.gridPosition.row - 1][this.gridPosition.col] == 'E')) ? true : false;
      break;
    case 1:
      response = ((this.gridPosition.col + 1 < this.maps[0].length) && (this.maps[this.gridPosition.row][this.gridPosition.col + 1] == 'E')) ? true : false;
      break;
    case 2:
      response = ((this.gridPosition.row + 1 < this.maps.length) && (this.maps[this.gridPosition.row + 1][this.gridPosition.col] == 'E')) ? true : false;
      break;
    case 3:
      response = ((this.gridPosition.col - 1 >= 0) && (this.maps[this.gridPosition.row][this.gridPosition.col - 1] == 'E')) ? true : false;
      break;
  }
  return response;
};

Player.prototype._updateGridPosition = function() {
  this.maps[this.gridPosition.row][this.gridPosition.col] = 'E';
  switch (this.direction) {
    case 0:
      this.gridPosition.row -= 1;
      break;
    case 1:
      this.gridPosition.col += 1;
      break;
    case 2:
      this.gridPosition.row += 1;
      break;
    case 3:
      this.gridPosition.col -= 1;
      break;
  }
  this.maps[this.gridPosition.row][this.gridPosition.col] = '1';
};
