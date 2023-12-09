let getal = 0;

function begin(){
    document.getElementById("scherm").remove()
}



function move(){
    const breed = Math.floor(Math.random() * 300);
    const hoog = Math.floor(Math.random() * 300);
    document.getElementById("cube").style.left = hoog + "px";
    document.getElementById("cube").style.top = breed + "px";
    getal++;
    document.getElementById("nummer").innerHTML = getal.toString();
    console.log("hello")
    if (getal > 4){
        cube.remove();

    }
}