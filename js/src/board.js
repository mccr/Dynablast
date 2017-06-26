function Board(row, col, tileSize) {
  this.heigth = (row - 1) * tileSize;
  this.width = (col - 1) * tileSize;
  this.row = row;
  this.col = col;
  this.tileSize = tileSize;
  this.mapSelector = Math.floor(Math.random()*3);
  this.map = mapToGrid(this.mapSelector);
}

Board.prototype.renderBoard = function() {
  var html = "";
  //$('#board').empty();

  for (var y = 0; y < this.row; y++) {
    for (var x = 0; x < this.col; x++) {
      var classTile;
      if (this.map[y][x] == '*') {
        classTile = 'tile brick';
      } else if (this.map[y][x] == 'W') {
        classTile = 'tile wall';
      } else if (this.map[y][x] == 'E') {
        classTile = 'tile empty';
      } else if (this.map[y][x] == 'A') {
        classTile = 'flags flag1';
      } else if (this.map[y][x] == 'B') {
        classTile = 'flags flag2';
      } else if (this.map[y][x] == '1') {
        classTile = 'players player1';
      } else if (this.map[y][x] == '2') {
        classTile = 'players player2';
      }
      html += ('<div id="' + y + '-' + x + '" class="' + classTile + '" style="{top:' + (y * this.tileSize) + 'px;left:' + (x * this.tileSize) + 'px}"></div>');
    }
  }
  $('#board').append(html);
};
