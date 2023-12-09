var red = 0;
var green = 0;
var blue = 0;




function achtergrond(){

  if(blue == 255){
    blue=0;
  }
  else if(red == 255){
    red=0;
  }
  else if(green == 255){
    green=0;
  }
  else{
  }
  blue +=5;
  green +=3;
  red +=1;
  document.getElementById("body").style.background = "rgb(" + red + ", " + green + ", " + blue + ")";
  console.log("hello");

}
setInterval(achtergrond, 10);