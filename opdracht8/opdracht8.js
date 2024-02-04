//ids ophalen en er vars an maken
var geb = document.getElementById("geb").value;
var gebl = document.getElementById("geb").length+1;
var saldo = document.getElementById("saldo"+geb);
var saldo2 = 0;
var number = parseInt(document.getElementById("number").value);


setInterval(gebupdate, 10);

//dit is de update functie die bijhoud welke gebruiker geselecteerd is en weizigd op basis van dat de display style van de h1 tags
function gebupdate(){
    for (let i = 1; i < gebl; i++){
    yeash = "saldogebruiker"+i;
    document.getElementById(yeash).style.display = "none";
    document.getElementById("saldo"+document.getElementById("geb").value).style.display = "inline";
    }
}



//dit maakt de gebruikers saldo text aan als de pagina word geladen
function makeuser(){
    for (let i = 1; i < gebl; i++){
        const stuurgeb = document.createElement("h1");
        stuurgeb.setAttribute("id", "saldogebruiker"+i);
        stuurgeb.innerText = "Huidig Saldo: €";
        document.getElementById("users").appendChild(stuurgeb);
    }
}



//functie knop voor storten hier word de gebruiker opgehaald en de transactie text verzonden
function storten(){
    var geb = document.getElementById("geb").value;
    var number = parseInt(document.getElementById("number").value);
    if(isNaN(number) == true){
        return;
    }
    const stuur = document.createElement("li");
    stuur.innerText = geb+" Storten:€"+number;
    document.getElementById("actie").appendChild(stuur);
    x = "s";
    saldof();
}

//functie knop voor opnemen hier word de gebruiker opgehaald en de transactie text verzonden
function opnemen(){
    var geb = document.getElementById("geb").value;
    var number = parseInt(document.getElementById("number").value);
    const stuur = document.createElement("li");
    if(isNaN(number) == true){
        return;
    }
    //dit is voor als er meer geld probeer word opgenomen dan dat er is
    if(saldo2 < number){
        stuur.innerText = " Te weinig geld om op te nemen";
        document.getElementById("actie").appendChild(stuur);
    }
    else{
    stuur.innerText = geb+" Opnemen:€"+number;
    document.getElementById("actie").appendChild(stuur);
    x = "o";
    saldof();
    }
}

//de functie die de berekeningen doet en het saldo update
function saldof(){
    var number = parseInt(document.getElementById("number").value);
    var geb = document.getElementById("geb").value;
    var saldo = document.getElementById("saldo"+geb);
    if(x == "s"){
        saldo2 = saldo2 + number;
    }
    else if(x == "o"){
        saldo2 -= number;;
    }
    saldo.innerHTML = `Huidig Saldo: € ${saldo2}`
}