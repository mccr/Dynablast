function Keyboard(){

}

Keyboard.prototype.keypressed = function(e){
  var result;
  switch (e.keyCode) {
    case 38: //up
      result = "0";
      break;
    case 39: //right
      result = "1";
      break;
    case 40: //down
      result = "2";
      break;
    case 37: //left
      result = "3";
      break;
    }
    return result;
};
