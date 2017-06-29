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
      "WEE***EE******E***EE***EEE***W",
      "WEW*W*W*W*W*W*W*W*W*W*W*W*W*EW",
      "WEE**EEEE**E***EEE***E***EE**W",
      "W*W*W*W*W*W*W*W*W*W*W*W*W*W*EW",
      "W*EE****E**EE****EEE****EE***W",
      "W*W*W*W*W*W*W*W*W*W*W*W*W*W*EW",
      "W****EEEEEEEEE******E****EE**W",
      "W*W*W*W*W*W*W*W*W*W*W*W*W*W*EW",
      "W*EE**E*****EEEE********EEE**W",
      "W*W*W*W*W*W*W*W*W*W*W*W*W*W*EW",
      "W*EE****EEEEEE*****E****EEEE*W",
      "W*W*W*W*W*W*W*W*W*W*W*W*W*W*EW",
      "W*EE**E****E*****EEE********W",
      "W*W*W*W*W*W*W*W*W*W*W*W*W*W*EW",
      "W******EEEE*********E*EEEEEE*W",
      "W*W*W*W*W*W*W*W*W*W*W*W*W*WEEW",
      "W******E***EE***EEEEE******EEW",
      "W*W*W*W*W*W*W*W*W*W*W*W*W*WEEW",
      "WWWWWWWWWWWWWWWWWWWWWWWWWWWWWW"
      ],
      [
      "WWWWWWWWWWWWWWWWWWWWWWWWWWWWWW",
      "W*E***********E**********EEEEW",
      "W*W*W*W*W*W*W*W*W*W*W*W*W*WEEW",
      "W*E*********E********E*****EEW",
      "W*W*W*W*W*W*W*W*W*W*W*W*W*W*EW",
      "W*******E***********E********W",
      "W*W*W*W*W*W*W*W*W*W*W*W*W*W*EW",
      "W********E***EEE****E********W",
      "W*W*W*W*W*W*W*W*W*W*W*W*W*W*EW",
      "W*****E**************E*******W",
      "W*W*W*W*W*W*W*W*W*W*W*W*W*W*EW",
      "W*******E**********E*********W",
      "W*W*W*W*W*W*W*W*W*W*W*W*W*W*EW",
      "W******E*****EEE*****E*******W",
      "W*W*W*W*W*W*W*W*W*W*W*W*W*W*EW",
      "W*******E***********E********W",
      "WEW*W*W*W*W*W*W*W*W*W*W*W*W*EW",
      "WEEEE**E**********E**********W",
      "WEW*W*W*W*W*W*W*W*W*W*W*W*W*EW",
      "WWWWWWWWWWWWWWWWWWWWWWWWWWWWWW"
      ],
      [
      "WWWWWWWWWWWWWWWWWWWWWWWWWWWWWW",
      "W*E*EEE*****EEEE****EEEE****EW",
      "W*W*WEW*W*W*W*W*W*W*W*W*W*WEEW",
      "W*E*********E********E*****EEW",
      "W*W*W*W*W*W*W*W*W*W*W*W*W*W*EW",
      "W*******E****EEE****E********W",
      "W*W*W*W*W*W*W*W*W*W*W*W*W*W*EW",
      "W********E**********E********W",
      "W*W*W*W*W*W*W*W*W*W*W*W*W*W*EW",
      "W*****E******EE******E*******W",
      "W*W*W*W*W*W*W*W*W*W*W*W*W*W*EW",
      "W*******E**********E*********W",
      "W*W*W*W*W*W*W*W*W*W*W*W*W*W*EW",
      "W******E****EEEEE****E*******W",
      "W*W*W*W*W*W*W*W*W*W*W*W*W*W*EW",
      "W*******E***********E********W",
      "W*W*W*W*W*W*W*W*W*W*W*W*WEW*EW",
      "WE*****E****EEEE**E*****EEE**W",
      "W*W*W*W*W*W*W*W*W*W*W*W*W*W*EW",
      "WWWWWWWWWWWWWWWWWWWWWWWWWWWWWW"
    ]
  ];
