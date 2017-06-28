function Board(row, col, tileSize) {
  this.heigth = (row - 1) * tileSize;
  this.width = (col - 1) * tileSize;
  this.row = row;
  this.col = col;
  this.tileSize = tileSize;
  this.mapSelector = 0;
  //Math.floor(Math.random() * 3);
  this.map = mapToGrid(this.mapSelector);
}

Board.prototype.renderBoard = function() {
  //$('#board').empty();
  for (var x = 0; x < this.row; x++) {
    for (var y = 0; y < this.col; y++) {
      var classTile;
      if (this.map[x][y] == '*') {
        classTile = 'tile brick';
      } else if (this.map[x][y] == 'W') {
        classTile = 'tile wall';
      } else if (this.map[x][y] == 'E') {
        classTile = 'tile empty';
      }
      grid = $('<div>').addClass(classTile).attr({
        top: ''+(y * this.tileSize)+'px',
        left: ''+(x * this.tileSize)+'px',
        id: ''+y+'-'+x
      });
      $('#board').append(grid);
    }
  }
};
