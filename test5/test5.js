var a = "gaming";
var hoek=0;
var goed=false;
var blueg=0;
var greeng=0;
var yellowg=0;
var redg=0;
var blue = parseInt(document.getElementById("blue"));
var green = parseInt(document.getElementById("green"));
var yellow = parseInt(document.getElementById("yellow"));
var red = parseInt(document.getElementById("red"));
var img = document.getElementById("img");


function begin(){
  document.getElementById("begin").remove();
  bepaal();
  setInterval(spin, 1);
}

function bepaal(){
  var tijd = Math.floor(Math.random() * 10000 + 1);
  console.log(tijd);
  const bs = setTimeout(spel, tijd);
}

function spel(){
    var img = document.getElementById("img");
  random = Math.floor(Math.random() * 3)
  if(random == 2){
    goed=false;
    img.setAttribute("src", "img/red.png");
  }
  else if(random == 0||1){
    goed=true;
    img.setAttribute("src", "img/green.png");
  }

  console.log(random);
  bepaal();
}


function epic(kleur){
  if(kleur=='blue'){
    if(goed==true){
      blueg++;
    }
    else if(goed==false){
      blueg-=1;
    }
  }

    else if(kleur=='green'){
      if(goed==true){
        greeng++;
      }
      else if(goed==false){
        greeng-=1;
      }
    }

      else if(kleur=='yellow'){
        if(goed==true){
          yellowg++;
        }
        else if(goed==false){
          yellowg-=1;
        }
      }

        else if(kleur=='red'){
          if(goed==true){
            redg++;
          }
          else if(goed==false){
            redg-=1;
          }
        }
        goed=false;
        var img = document.getElementById("img");
        document.getElementById("blue").innerHTML=blueg;
        document.getElementById("green").innerHTML=greeng;
        document.getElementById("yellow").innerHTML=yellowg;
        document.getElementById("red").innerHTML=redg;
        img.setAttribute("src", "img/kat.gif");

}

function spin(){
  hoek+=2;
  if(hoek== 360){
    hoek=0;
  }
  if(blueg==3){
    clearInterval(spin);
    document.getElementById("weg").remove();
    document.getElementById("klaar").innerHTML = "blauw heeft gewonnen!";
  }
  else if(greeng==3){
    clearInterval(spin);
    document.getElementById("weg").remove();
    document.getElementById("klaar").innerHTML = "groen heeft gewonnen!";
  }
  else if(yellowg==3){
    clearInterval(spin);
    document.getElementById("weg").remove();
    document.getElementById("klaar").innerHTML = "geel heeft gewonnen!";
  }
  else if(redg==3){
    clearInterval(spin);
    document.getElementById("weg").remove();
    document.getElementById("klaar").innerHTML = "rood heeft gewonnen!";
  }

   document.getElementById("img").style.rotate = hoek+"deg"; 
}