getal2 = document.getElementById("getal2");

getal1 = document.getElementById("getal");


function verander(){
    document.getElementById("st1").innerHTML = "";
    document.getElementById("pa1").innerHTML = "";
    document.getElementById("sc1").innerHTML = "";
    document.getElementById("st2").innerHTML = "🪨";
    document.getElementById("pa2").innerHTML = "📃";
    document.getElementById("sc2").innerHTML = "✂️";
    
}

function verander2(){
    document.getElementById("st2").innerHTML = "";
    document.getElementById("pa2").innerHTML = "";
    document.getElementById("sc2").innerHTML = "";
}

function steen(){
    getal1 = "🪨";
    verander();    
}

function papier(){
    getal1 = "📃";
    verander();  
}

function schaar(){
    getal1 = "✂️";
    verander();  
}


function steen2(){
    getal2 = "🪨";
    verander2();
}

function papier2(){
    getal2 = "📃";
    verander2();
}

function schaar2(){
    getal2 = "✂️";
    verander2();
}


gewonnen="heeft gewonnen";
gelijk="niemand heeft gewonnen want het is gelijk";

function laatzien(){
    //dit gedeelte is voor de gelijke uitkomst:)
    if(getal1=="🪨"&&getal2=="🪨"){
        getal3="";
        getal4 = gelijk;
    }
    else if(getal1=="📃"&&getal2=="📃"){
        getal3="";
        getal4 = gelijk;
    }
    else if(getal1=="✂️"&&getal2=="✂️"){
        getal3="";
        getal4 = gelijk;
        //dit gedeelte is voor speler1
        }
        else if(getal1=="🪨"&&getal2=="✂️"){
            getal3 = "speler1";
            getal4 = gewonnen;
        }
        else if(getal1=="🪨"&&getal2=="📃"){
            getal3 = "speler2";
            getal4 = gewonnen;
        }
        else if(getal1=="✂️"&&getal2=="🪨"){
            getal3 = "speler2";
            getal4 = gewonnen;
        }
        else if(getal1=="✂️"&&getal2=="📃"){
            getal3 = "speler1";
            getal4 = gewonnen;
        }
        else if(getal1=="📃"&&getal2=="🪨"){
            getal3 = "speler1";
            getal4 = gewonnen;
        }
        else if(getal1=="📃"&&getal2=="✂️"){
            getal3 = "speler2";
            getal4 = gewonnen;
        }

    document.write("<style>body{background-color:gray;}h1{ font-family: monospace; color:deepskyblue;</style><h1>speler 1 deed",getal1,"en speler 2 deed",getal2," dus ",getal3," ",getal4,"</h1>")
    
}