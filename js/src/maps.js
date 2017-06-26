function mapToGrid (mapSelector){
  var grid = [],
      selection = maps[mapSelector];

  for(var i = 0; i < selection.length; i++){
    grid.push(selection[i].split(''));
  }
  return grid;
}

  var maps = [
      [
      "WWWWWWWWWWWWWWWWWWWWWWWWWWWWWW",
      "WAE***********E**************W",
      "W1W*W*W*W*W*W*W*W*W*W*W*W*W*EW",
      "WEE******************E*******W",
      "W*W*W*W*W*W*W*W*W*W*W*W*W*W*EW",
      "W*******E********************W",
      "W*W*W*W*W*W*W*W*W*W*W*W*W*W*EW",
      "W*******************E********W",
      "W*W*W*W*W*W*W*W*W*W*W*W*W*W*EW",
      "W*****E**********************W",
      "W*W*W*W*W*W*W*W*W*W*W*W*W*W*EW",
      "W******************E*********W",
      "W*W*W*W*W*W*W*W*W*W*W*W*W*W*EW",
      "W******E*********************W",
      "W*W*W*W*W*W*W*W*W*W*W*W*W*W*EW",
      "W*******************E********W",
      "W*W*W*W*W*W*W*W*W*W*W*W*W*WEEW",
      "W******E*******************E2W",
      "W*W*W*W*W*W*W*W*W*W*W*W*W*WEBW",
      "WWWWWWWWWWWWWWWWWWWWWWWWWWWWWW"
      ],
      [
      "WWWWWWWWWWWWWWWWWWWWWWWWWWWWWW",
      "W*E***********E************1AW",
      "W*W*W*W*W*W*W*W*W*W*W*W*W*WEEW",
      "W*E*********E********E*****EEW",
      "W*W*W*W*W*W*W*W*W*W*W*W*W*W*EW",
      "W*******E***********E********W",
      "W*W*W*W*W*W*W*W*W*W*W*W*W*W*EW",
      "W********E**********E********W",
      "W*W*W*W*W*W*W*W*W*W*W*W*W*W*EW",
      "W*****E**************E*******W",
      "W*W*W*W*W*W*W*W*W*W*W*W*W*W*EW",
      "W*******E**********E*********W",
      "W*W*W*W*W*W*W*W*W*W*W*W*W*W*EW",
      "W******E*************E*******W",
      "W*W*W*W*W*W*W*W*W*W*W*W*W*W*EW",
      "W*******E***********E********W",
      "WEW*W*W*W*W*W*W*W*W*W*W*W*W*EW",
      "WE2****E**********E**********W",
      "WBW*W*W*W*W*W*W*W*W*W*W*W*W*EW",
      "WWWWWWWWWWWWWWWWWWWWWWWWWWWWWW"
      ],
      [
      "WWWWWWWWWWWWWWWWWWWWWWWWWWWWWW",
      "W*E*E1E*******E*************EW",
      "W*W*WEW*W*W*W*W*W*W*W*W*W*WEEW",
      "W*E*********E********E*****EEW",
      "W*W*W*W*W*W*W*W*W*W*W*W*W*W*EW",
      "W*******E***********E********W",
      "W*W*W*W*W*W*W*W*W*W*W*W*W*W*EW",
      "W********E**********E********W",
      "W*W*W*W*W*W*W*W*W*W*W*W*W*W*EW",
      "W*****E******AB******E*******W",
      "W*W*W*W*W*W*W*W*W*W*W*W*W*W*EW",
      "W*******E**********E*********W",
      "W*W*W*W*W*W*W*W*W*W*W*W*W*W*EW",
      "W******E*************E*******W",
      "W*W*W*W*W*W*W*W*W*W*W*W*W*W*EW",
      "W*******E***********E********W",
      "W*W*W*W*W*W*W*W*W*W*W*W*WEW*EW",
      "WE*****E**********E*****E2E**W",
      "W*W*W*W*W*W*W*W*W*W*W*W*W*W*EW",
      "WWWWWWWWWWWWWWWWWWWWWWWWWWWWWW"
    ]
  ];
