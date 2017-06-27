function Player(position, gridPosition, maps) {
  this.position = position;
  this.direction = 2; //0: up, 1: right, 2: down, 3: left
  this.gridPosition = gridPosition;
  this.maps = maps;
}

Player.prototype.moveForward = function(direction) {
  var id,
      prevId;
      this.direction = parseInt(direction);
      console.log(this.direction);

  switch (this.direction) {
    case 0:
      if (this.isPathForward()) {
        id='#'+this.gridPosition.col+'-'+(this.gridPosition.row-1);
        prevId = '#'+this.gridPosition.col+'-'+this.gridPosition.row;
        $('div'+prevId).removeClass('players player1');
        $('div'+prevId).addClass('tile empty');
        $('div'+id).removeClass('tile empty');
        $('div'+id).addClass('players player1');
        this.updateGridPosition();
      }
      break;
    case 1:
      if (this.isPathForward()) {
        id='#'+(this.gridPosition.col+1)+'-'+this.gridPosition.row;
        prevId = '#'+this.gridPosition.col+'-'+this.gridPosition.row;
        $('div'+prevId).removeClass('players player1');
        $('div'+prevId).addClass('tile empty');
        $('div'+id).removeClass('tile empty');
        $('div'+id).addClass('players player1');
        this.updateGridPosition();
      }
      break;
    case 2:
      if (this.isPathForward()) {
        id='#'+this.gridPosition.col+'-'+(this.gridPosition.row+1);
        prevId = '#'+this.gridPosition.col+'-'+this.gridPosition.row;
        $('div'+prevId).removeClass('players player1');
        $('div'+prevId).addClass('tile empty');
        $('div'+id).removeClass('tile empty');
        $('div'+id).addClass('players player1');
        this.updateGridPosition();
      }
      break;
    case 3:
      if (this.isPathForward()) {
        id='#'+(this.gridPosition.col-1)+'-'+this.gridPosition.row;
        prevId = '#'+this.gridPosition.col+'-'+this.gridPosition.row;
        $('div'+prevId).removeClass('players player1');
        $('div'+prevId).addClass('tile empty');
        $('div'+id).removeClass('tile empty');
        $('div'+id).addClass('players player1');
        this.updateGridPosition();
      }
      break;
  }
};

Player.prototype.dropBomb = function() {

};

Player.prototype.dropSolidTile = function() {

};

Player.prototype._up = function() {

};

Player.prototype._down = function() {

};

Player.prototype._right = function() {

};

Player.prototype._left = function() {

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

Player.prototype.updateGridPosition = function(){
  switch(this.direction){
    case 0:
      this.maps[this.gridPosition.row][this.gridPosition.col] = 'E'; //prev cell empty
      this.gridPosition.row -= 1;
      this.maps[this.gridPosition.row][this.gridPosition.col] = '1'; //actual cell player
      break;
    case 1:
      this.maps[this.gridPosition.row][this.gridPosition.col] = 'E'; //prev cell empty
      this.gridPosition.col += 1;
      this.maps[this.gridPosition.row][this.gridPosition.col] = '1';
      break;
    case 2:
      this.maps[this.gridPosition.row][this.gridPosition.col] = 'E'; //prev cell empty
      this.gridPosition.row += 1;
      this.maps[this.gridPosition.row][this.gridPosition.col] = '1';
      break;
    case 3:
      this.maps[this.gridPosition.row][this.gridPosition.col] = 'E'; //prev cell empty
      this.gridPosition.col -= 1;
      this.maps[this.gridPosition.row][this.gridPosition.col] = '1';
      break;
  }
};
