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

  for (var y = 0; y < this.row; y++) {
    for (var x = 0; x < this.col; x++) {
      var classTile;
      if (this.maps[y][x] == '*') {
        classTile = 'tile brick';
      } else if (this.maps[y][x] == 'W') {
        classTile = 'tile wall';
      } else if (this.maps[y][x] == 'E') {
        classTile = 'tile empty';
      } else if (this.maps[y][x] == 'A') {
        classTile = 'flags flag1';
      } else if (this.maps[y][x] == 'B') {
        classTile = 'flags flag2';
      } else if (this.maps[y][x] == '1') {
        classTile = 'players player1';
        playersPositions.push({row: y, col: x});
      } else if (this.maps[y][x] == '2') {
        classTile = 'players player2';
        playersPositions.push({row: y, col: x});
      }
      html += ('<div id="' + x + '-' + y + '" class="' + classTile + '" style="{top:' + (y * this.tileSize) + 'px;left:' + (x * this.tileSize) + 'px}"></div>');
    }
  }
  $('#board').append(html);
  return playersPositions;
};

Board.prototype.playerPosition = function(gridPosition) {
  var players = [
    [$('.player1').position().top, $('.player1').position().left],
    [$('.player2').position().top, $('.player2').position().left],
    gridPosition,
    this.maps,
  ];
  return players;
};
