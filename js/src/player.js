function Player(gridPosition, maps, active) {
  this.direction = 2; //0: up, 1: right, 2: down, 3: left
  this.gridPosition = gridPosition;
  this.maps = maps;
  this.bombs = 3;
  this.solidTile = 1;
  this.active = active;
}

Player.prototype.moveForward = function(direction) {
  this.direction = parseInt(direction);
  var x = this.gridPosition.row,
      y = this.gridPosition.col,
      prevId = '#'+y+'-'+x;

  switch (this.direction) {
    case 0:
      if (this.isPathForward(x,y)) {
        this._up(prevId,x,y);
        this._updateGridPosition();
      }
      break;
    case 1:
      if (this.isPathForward(x,y)) {
        this._right(prevId,x,y);
        this._updateGridPosition();
      }
      break;
    case 2:
      if (this.isPathForward(x,y)) {
        this._down(prevId,x,y);
        this._updateGridPosition();
      }
      break;
    case 3:
      if (this.isPathForward(x,y)) {
        this._left(prevId,x,y);
        this._updateGridPosition();
      }
      break;
  }
};

Player.prototype.dropBomb = function(bomb) {
  //if(bomb && this.bombs > 3){
    this.bombs--;
    console.log(this.bombs);
    var id = '#'+this.gridPosition.col+'-'+this.gridPosition.row;
    var bombing = $('<img>').attr({
      src: 'css/assets/Bomb/Bomb_f01.png',
      width: '32px'
    });
    var flame = $('<img>').attr({
      src: 'css/assets/Flame/Flame_F02.png',
      width: '32px'
    });
    $('#board > div'+id).append(bombing);
    var bombOut = setTimeout(function(){
      $('#board > div'+id).empty();
      $('#board > div'+id).append(flame);
      var flameOut = setTimeout(function(){
        $('#board > div'+id).empty();
      }, 1 * 1000);
    },1 * 1000);
  //}
};

Player.prototype.dropSolidTile = function(element) {
  console.log(element);
  element.removeClass('empty');
  element.addClass('solidTile');
  var id = element[0].id;
  var arr = id.split('-').map(function(n){
    return parseInt(n);
  });
  var y = arr[0];
  var x = arr[1];
  console.log(y,x);
  this.maps[x][y] = 'S';
};

Player.prototype._up = function(prevId,x,y) {
    var id = '#'+y+'-'+(x-1);
    $('div' + prevId).removeClass();
    $('div' + prevId).addClass('tile empty');
    $('div' + id).removeClass('tile empty');
    $('div' + id).addClass('players player1 up');
};

Player.prototype._down = function(prevId,x,y) {
  var id = '#'+y+'-'+(x+1);
  $('div' + prevId).removeClass();
  $('div' + prevId).addClass('tile empty');
  $('div' + id).removeClass('tile empty');
  $('div' + id).addClass('players player1 down');
};

Player.prototype._right = function(prevId,x,y) {
  var id = '#'+(y+1)+'-'+x;
  $('div' + prevId).removeClass();
  $('div' + prevId).addClass('tile empty');
  $('div' + id).removeClass('tile empty');
  $('div' + id).addClass('players player1 right');
};

Player.prototype._left = function(prevId,x,y) {
  var id = '#'+(y-1)+'-'+x;
  $('div' + prevId).removeClass();
  $('div' + prevId).addClass('tile empty');
  $('div' + id).removeClass('tile empty');
  $('div' + id).addClass('players player1 left');
};

Player.prototype.isPathForward = function(x,y) {
  var response;
  switch (this.direction) {
    case 0:
      response = ((x-1) >= 0 && (this.maps[x-1][y] == 'E')) ? true : false;
      break;
    case 1:
      response = ((y+1 < this.maps[0].length) && (this.maps[x][y+1] == 'E')) ? true : false;
      break;
    case 2:
      response = ((x+1 < this.maps.length) && (this.maps[x+1][y] == 'E')) ? true : false;
      break;
    case 3:
      response = ((y-1 >= 0) && (this.maps[x][y-1] == 'E')) ? true : false;
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
