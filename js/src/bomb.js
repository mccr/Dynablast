function Bomb(map, tileSize) {
this.tileSize = tileSize;
this.map = map;
this.x = 0;
this.y = 0;
}

Bomb.prototype.dropBomb = function(x,y){
  this.x = x;
  this.y = y;
  var id = '#'+y+'-'+x;
  var bomb = $('<img>').attr({
          src: 'css/assets/Bomb/Bomb_f01.png',
          width: '32px'
        });
  $('#board > div'+id).append(bomb);
  this._explode();
  this._isBreakable();
};

Bomb.prototype._isBreakable = function(){
  if(this.map[this.x-1][this.y] === '*') this._breakUp();
  if(this.map[this.x+1][this.y] === '*') this._breakDown();
  if(this.map[this.x][this.y+1] === '*') this._breakRigth();
  if(this.map[this.x][this.y-1] === '*') this._breakLeft();
};

Bomb.prototype._breakUp = function() {
  var x = this.x - 1,
      y = this.y;
  this._explodeAdjacent(x,y);
};

Bomb.prototype._breakDown = function() {
  var x = this.x + 1,
      y = this.y;
  this._explodeAdjacent(x,y);
};

Bomb.prototype._breakRigth = function() {
  var x = this.x,
      y = this.y + 1;
  this._explodeAdjacent(x,y);
};

Bomb.prototype._breakLeft = function() {
  var x = this.x,
      y = this.y - 1;
  this._explodeAdjacent(x,y);
};

Bomb.prototype._explodeAdjacent = function(x,y) {
  var id = '#'+y+'-'+x;
  var that = this;
  setTimeout(function(){
    var flame = $('<img>').attr({
            src: 'css/assets/Flame/Flame_F02.png',
            width: '32px'
          });
    $('#board > div'+id).removeClass('brick').addClass('empty');
    $('#board > div'+id).append(flame);
      setTimeout(function(){
        $('#board > div'+id).empty();
        that._updateMap(x,y);
      },2 * 1000);
  },1 * 1000);
};

Bomb.prototype._explode = function() {
  var prevId = '#'+this.y+'-'+this.x;
  setTimeout(function(){
    $('#board > div'+prevId).empty();
    var flame = $('<img>').attr({
            src: 'css/assets/Flame/Flame_F02.png',
            width: '32px'
          });
    $('#board > div'+prevId).append(flame);
      setTimeout(function(){
        $('#board > div'+prevId).empty();
      },2 * 1000);
  },1 * 1000);
};

Bomb.prototype._updateMap = function(x,y) {
  this.map[x][y]= 'E';
};
