function Flag(player, top, left, map, tileSize){
  this.flagPlayer = player;
  this.flag = 'P'+player;
  this.top = top;
  this.left = left;
  this.tileSize = tileSize;
  this.map = map;
  this._insertFlags();
}

Flag.prototype._insertFlags = function() {
  var flagsDiv = $('<div>').addClass('flags flag'+this.flagPlayer).css({
    top: ''+(this.top * this.tileSize)+'px',
    left: ''+(this.left * this.tileSize)+'px'
  });
  $('#objects').append(flagsDiv);
  this.map[this.top][this.left] = this.flag;
};
