function Board(row, col, tileSize) {
  this.heigth = (row - 1) * tileSize;
  this.width = (col - 1) * tileSize;
  this.row = row;
  this.col = col;
  this.tileSize = tileSize;
  this.mapSelector = Math.floor(Math.random() * 3);
  this.maps = mapToGrid(this.mapSelector);
}

Board.prototype.renderBoard = function() {
  var html = "",
      playersPositions = [];
  //$('#board').empty();

  for (var x = 0; x < this.row; x++) {
    for (var y = 0; y < this.col; y++) {
      var classTile;
      if (this.maps[x][y] == '*') {
        classTile = 'tile brick';
      } else if (this.maps[x][y] == 'W') {
        classTile = 'tile wall';
      } else if (this.maps[x][y] == 'E') {
        classTile = 'tile empty';
      } else if (this.maps[x][y] == 'A') {
        classTile = 'flags flag1';
      } else if (this.maps[x][y] == 'B') {
        classTile = 'flags flag2';
      } else if (this.maps[x][y] == '1') {
        classTile = 'players player1';
        playersPositions.push({col: y, row: x});
      } else if (this.maps[x][y] == '2') {
        classTile = 'players player2';
        playersPositions.push({col: y, row: x});
      }
      html += ('<div id="' + y + '-' + x + '" class="' + classTile + '" style="{top:' + (y * this.tileSize) + 'px;left:' + (x * this.tileSize) + 'px}"></div>');
    }
  }
  $('#board').append(html);
  return playersPositions;
};

Board.prototype.playersPosition = function(gridPosition) {
  var players = [
    [$('.player1').position().top, $('.player1').position().left],
    [$('.player2').position().top, $('.player2').position().left],
    gridPosition,
    this.maps,
  ];
  return players;
};
