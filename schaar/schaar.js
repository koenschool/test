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

function laatzien(){
    if(getal2=="✂️"){
        alert("omg dit werkt wat epic")
    }
    document.write("<style> h1{ font-family: monospace; color:blue;</style><h1>speler 1 deed",getal1,"en speler 2 deed",getal2,"</h1>")
    
}