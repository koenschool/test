testvar = 0;
function change(){
    document.getElementById("meter").value = document.getElementById("input").value;
}

function track(){
    testvar = 1;
}

function notrack(){
    testvar = 0;
    // console.log(screenX);
}


document.addEventListener('mousemove', function(event) {
    if (testvar == 1) {
        document.getElementById("meterx").value = event.offsetX;
        document.getElementById("metery").value = (event.offsetY * -1);
        console.log('Mouse X: ' + event.clientX + ', Mouse Y: ' + event.clientY);
    }
});
