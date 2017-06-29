function Player(top, left, player, map, tileSize) {
  this.direction = 'S';
  this.top = top; //row
  this.left = left; //col
  this.map = map;
  this.playerNumber = player;
  this.tileSize = tileSize;
  this._insertPlayer();
}

Player.prototype._insertPlayer = function() {
  var playerDiv = $('<div>').addClass('players player' + this.playerNumber + ' down').css({
    top: '' + (this.top * this.tileSize) + 'px',
    left: '' + (this.left * this.tileSize) + 'px'
  }).attr('id', 'player' + this.playerNumber);
  $('#objects').append(playerDiv);
  this.map[this.top][this.left] = this.playerNumber;
};

Player.prototype.moveForward = function(direction) {
  this.direction = direction;
  
  switch (this.direction) {
    case 'N':
      this._changeDirection();
      this._checkPath();
      break;
    case 'E':
      this._changeDirection();
      this._checkPath();
      break;
    case 'S':
      this._changeDirection();
      this._checkPath();
      break;
    case 'W':
      this._changeDirection();
      this._checkPath();
      break;
  }
};

Player.prototype._changeDirection = function(){
  switch (this.direction) {
    case 'N':
      $('#player' + this.playerNumber).removeClass().addClass('players player' + this.playerNumber);
      $('#player' + this.playerNumber).addClass('up');
      break;
    case 'E':
      $('#player' + this.playerNumber).removeClass().addClass('players player' + this.playerNumber);
      $('#player' + this.playerNumber).addClass('right');
      break;
    case 'S':
      $('#player' + this.playerNumber).removeClass().addClass('players player' + this.playerNumber);
      $('#player' + this.playerNumber).addClass('down');
      break;
    case 'W':
      $('#player' + this.playerNumber).removeClass().addClass('players player' + this.playerNumber);
      $('#player' + this.playerNumber).addClass('left');
      break;
  }
};

Player.prototype._checkPath = function() {
  if (this._isPathForward()) this._updateMap();
};

Player.prototype._isPathForward = function() {
  var response,
    x = this.top,
    y = this.left;

  switch (this.direction) {
    case 'N':
      response = ((x - 1) >= 0 && (this.map[x - 1][y] == 'E')) ? true : false;
      break;
    case 'E':
      response = ((y + 1 < this.map[0].length) && (this.map[x][y + 1] == 'E')) ? true : false;
      break;
    case 'S':
      response = ((x + 1 < this.map.length) && (this.map[x + 1][y] == 'E')) ? true : false;
      break;
    case 'W':
      response = ((y - 1 >= 0) && (this.map[x][y - 1] == 'E')) ? true : false;
      break;
  }
  return response;
};

Player.prototype._updateMap = function() {
  var x = this.top,
    y = this.left;

  this.map[x][y] = 'E';
  switch (this.direction) {
    case 'N':
      x = this._up();
      break;
    case 'E':
      y = this._right();
      break;
    case 'S':
      x = this._down();
      break;
    case 'W':
      y = this._left();
      break;
  }
  this.map[x][y] = '1';
  this._render();
};

Player.prototype._up = function() {
  return this.top -= 1;
};

Player.prototype._down = function() {
  return this.top += 1;
};

Player.prototype._right = function() {
  return this.left += 1;
};

Player.prototype._left = function() {
  return this.left -= 1;
};

Player.prototype._render = function() {
  $("#player" + this.playerNumber).css({
    top: '' + (this.top * this.tileSize) + 'px',
    left: '' + (this.left * this.tileSize) + 'px'
  });
};
