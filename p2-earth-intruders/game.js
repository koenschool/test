//foto's ophalen
const invaderImg = "invader.jpg";
const bulletImg = "bullet.png";
//id's koppelen aan een variable
const body = document.getElementById("body");
const container = document.getElementById("container");
const menuContainer = document.getElementById("menuContainer");
var player = document.getElementById("player");
player.ondragstart = function() { return false; };
var invaders = document.getElementById("invaders");
var bullets = document.getElementById("bullets");
var scoreBoard = document.getElementById("scoreBoard");

//variables maken voor gameplay elementen
var score = 0;
var bulletTimeout = 0;
var isWin = false;
var isGameOver = false;
var isInMenu = true;
var invaderSpeed = 1;
var bulletSpeed = 10;


//startknop
function play()
{
    isInMenu = false;
    container.style.display = "inherit";
    menuContainer.style.display = "none";
}

//x positie van de muis ophalen
function onMouseMove(event){
    if (isWin) return;
    if (isInMenu) return;
    if (isGameOver) return;

    let x = event.clientX;
    x -= player.clientWidth / 2;
    player.style.left = x + "px";
    player.setAttribute("data-x", x);
}

//de bullet
body.addEventListener("keydown", function(event) {
    if (isWin) return;
    if (isInMenu) return;
    if (isGameOver) return;

    //bullet afschieten, maken en berekeningen toevoegen
    if (event.key == " ") {
        if (bulletTimeout == 0) {
            var newBullet = document.createElement("img");
            newBullet.setAttribute("src", bulletImg);
            newBullet.className = "bullet";
            newBullet.setAttribute("data-x", player.getAttribute("data-x"));
            newBullet.setAttribute("data-y", screen.height - 200);
            newBullet.style.paddingLeft = player.style.left;
            newBullet.ondragstart = function() { return false; };
            bullets.appendChild(newBullet);
            bulletTimeout = Math.max(0, 20 - score);
        }
    }
});


//hitboxes berekenen
function handleCollisions()
{   
    //grote van invader ophalen
    for (var i = 0; i < invaders.children.length; i++)
    {
        var invader = invaders.children[i];
        let invaderLeft = parseInt(invader.getAttribute("data-x"));
        let invaderTop = parseInt(invader.getAttribute("data-y"));
        let invaderWidth = invader.width;
        let invaderHeight = invader.height;
        let invaderRight = invaderLeft + invaderWidth;
        let invaderBottom = invaderTop + invaderHeight;

        //grote van bullet ophalen
        for (var j = 0; j < bullets.children.length; j++)
        {
            var bullet = bullets.children[j];

            let bulletLeft = parseInt(bullet.getAttribute("data-x"));
            let bulletTop = parseInt(bullet.getAttribute("data-y"));
            let bulletWidth = bullet.width;
            let bulletHeight = bullet.height;
            let bulletRight = bulletLeft + bulletWidth;
            let bulletBottom = bulletTop + bulletHeight;

            // checken of de bullet de invader heeft geraakt
            if (bulletLeft < invaderRight && bulletRight > invaderLeft)
            {
                if (bulletTop < invaderBottom && bulletBottom > invaderTop)
                {
                    invader.remove();
                    bullet.remove();
                    score += 1;
                }
            }
        }
    }
}


//alles weg halen en gamer over scherm laten zien
function gameOver()
{
    isGameOver = true;
    bullets.remove();
    invaders.remove();
    player.remove();
    scoreBoard.remove();
    let gameOverMessage = document.createElement("h1");
    gameOverMessage.innerText = "Game Over!";
    let scoreMessage = document.createElement("h2");
    scoreMessage.innerText = "Your score was: " + score;
    
    let gameOverDiv = document.createElement("div");
    gameOverDiv.id = "gameOverDiv";
    gameOverDiv.appendChild(scoreMessage);
    gameOverDiv.appendChild(gameOverMessage);
    container.appendChild(gameOverDiv);
}



function win()
{
    isWin = true;
    bullets.remove();
    invaders.remove();
    player.remove();
    scoreBoard.remove();
    let winMessage = document.createElement("h1");
    winMessage.innerText = "You win!";
    
    let windiv = document.createElement("div");
    windiv.id = "windiv";
    windiv.appendChild(winMessage);
    container.appendChild(windiv);
}

var tick = 0;
//
function onUpdate()
{
    if (isWin) return;
    if (isInMenu) return;
    if (isGameOver) return;

    if(score > 99){
        win();
    }

    tick++;
    //invader y updaten
    for (var i = 0; i < invaders.children.length; i++) {
        let invader = invaders.children[i];
        let y = parseInt(invader.getAttribute("data-y"));
        y += invaderSpeed;
        invader.style.paddingTop = parseInt(invader.getAttribute("data-y")) + "px"
        invader.setAttribute("data-y", y);
        if (y > screen.height - invader.height - 100) 
        {
            gameOver();
            return;
        }
    }

    //bullet y updaten
    for (var i = 0; i < bullets.children.length; i++) {
        let bullet = bullets.children[i];
        let y = parseInt(bullet.getAttribute("data-y"));
        y -= bulletSpeed;
        if (y < 0) 
        {
            bullet.remove();
            continue;
        }
        bullet.style.paddingTop = y + "px"
        bullet.setAttribute("data-y", y);
    }

    handleCollisions();
    scoreBoard.innerText = score;

    //invader aanmaken
    if (tick % Math.max(0, 100 - score) == 0)
    {
        tick = 0;
        var newInvader = document.createElement("img");
        newInvader.setAttribute("src", invaderImg);
        let x = Math.round(Math.random() * screen.width - 100);
        newInvader.setAttribute("data-x", x);
        newInvader.setAttribute("data-y", 0);
        newInvader.style.paddingLeft = x + "px";
        newInvader.className = "invader";
        newInvader.ondragstart = function() { return false; };
        invaders.appendChild(newInvader);
    }

    if (bulletTimeout > 0) bulletTimeout--;
}

window.setInterval(onUpdate, 10);
