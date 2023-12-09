function achtergrond(){
  document.getElementById("body").style.backgroundColor = "crimson";
  console.log("hello")
}


function myFunction() {
    var v = document.getElementById("voornaam").value;
    var a = document.getElementById("achternaam").value;
    var s = document.getElementById("straatnaam").value;
    if((v == "koen" && a == "gaming")||(v == "gex" && a == "enter the gecko"))
    alert("je straatnaam is " + s )
    else if ((v == "koen")||(v == "gex"))
    kleur() && alert("leuke naam")
    else
    console.log("voornaam=" + v )
    console.log("achternaam=" + a)
    console.log("straatnaam=" + s)
    document.getElementById("voornaam1").innerHTML = ("voornaam=" + v );
    document.getElementById("achternaam1").innerHTML = ("achternaam=" + a);
    document.getElementById("straatnaam1").innerHTML = ("straatnaam=" + s);
    Leeg()
  }

function Iets(){
  document.getElementById("voornaam").value = "koen";
  document.getElementById("achternaam").value = "gaming";
  document.getElementById("straatnaam").value = "gexx";
}

function Leeg(){
  document.getElementById("voornaam").value = "";
  document.getElementById("achternaam").value = "";
  document.getElementById("straatnaam").value = "";
}

function openiets(){
  open("https://www.google.com")
}

function kleur(){
  document.getElementById("voornaam1").style.color = "crimson";
  document.getElementById("achternaam1").style.color = "crimson";
  document.getElementById("straatnaam1").style.color = "crimson";
}