function Bomb(map, tileSize, player1, player2) {
this.tileSize = tileSize;
this.map = map;
this.x = 0;
this.y = 0;
this.player1 = player1;
this.player2 = player2;
}

Bomb.prototype._playerNear = function(){
  var nearFire = {
    player1: false,
    player2: false
  };

  if(this.player1.top === this.x && this.player1.left === this.y){
    nearFire.player1 = true;
  }
  if(this.player2.top === this.x && this.player2.left === this.y){
    nearFire.player2 = true;
  }
  return nearFire;
};

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
    $('#bomb-explode').trigger('play');
    var near = that._playerNear();
    if(near.player1){
      var deadDiv1 = $('<div id="1dead" class="winDiv"><img src="css/assets/Bman_dead.png"/></div>');
      $('#objects').append(deadDiv1);
      setTimeout(function(){
        $('#objects > div#1dead').remove();
      }, 1000);
    }
    if(near.player2){
      var deadDiv2 = $('<div id="2dead" class="winDiv"><img src="css/assets/Creep_dead.png"/></div>');
      $('#objects').append(deadDiv2);
      setTimeout(function(){
        $('#objects > div#2dead').remove();
      }, 1000);
    }
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
