const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 750;

let radio = 8;
let x = canvas.width/2;
let y = canvas.height-30;
let velx = 1;
let vely = -2;
let alturaBase = 10;
let anchoBase = 80;
let posicionBase = (canvas.width-anchoBase)/2;
var pulsacionDerecha = false;
var pulsacionIzquierda = false;
var filasLadrillos = 5;
var columnasLadrillos = 9;
var anchoLadrillo = 45;
var alturaLadrillo = 15;
var huecoLadrillos = 10;
var marginTop = 10;
var marginLeft = 8;
document.addEventListener("keydown", pulsa, false);
document.addEventListener("keyup", suelta, false);

var ladrillos = [];
for(c=0; c<columnasLadrillos; c++) {
    ladrillos[c] = [];
    for(f=0; f<filasLadrillos; f++) {
        ladrillos[c][f] = { x: 0, y: 0, estado: 1 };
    }
}

function pulsa (e) { 
    if (e.keyCode == 39) {
        pulsacionDerecha = true;
    }
    else if (e.keyCode == 37) {
        pulsacionIzquierda = true;
    }
}
function suelta (e) { 
    if (e.keyCode == 39) {
        pulsacionDerecha = false;
    }
    else if (e.keyCode == 37) {
        pulsacionIzquierda = false;
    }
}

function bola() {
    ctx.beginPath();    
    ctx.arc(x, y, radio, 0, 2 * Math.PI);
    ctx.fillStyle = 'black';
    ctx.fill()
    ctx.closePath();
}

function Fbase () {
    ctx.beginPath();
    ctx.rect(posicionBase, canvas.height-alturaBase, anchoBase, alturaBase);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}
function ladrillo() {
    for(c=0; c<columnasLadrillos; c++) {
        for(f=0; f<filasLadrillos; f++) {
            if(ladrillos[c][f].estado == 1) {
                var ladrilloX = (c*(anchoLadrillo+huecoLadrillos))+marginLeft;
                var ladrilloY = (f*(alturaLadrillo+huecoLadrillos))+marginTop;
                ladrillos[c][f].x = ladrilloX;
                ladrillos[c][f].y = ladrilloY;
                ctx.beginPath();
                ctx.rect(ladrilloX, ladrilloY, anchoLadrillo, alturaLadrillo);
                ctx.fillStyle = "grey";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

function colision() {
    for(c=0; c<columnasLadrillos; c++) {
        for(f=0; f<filasLadrillos; f++) {
            var b = bricks[c][f];
            if(b.status == 1) {
                if(x > b.x && x < b.x+anchoLadrillo && y > b.y && y < b.y+alturaLadrillo) {
                    vely = -vely;
                    b.estadi = 0;
                }
            }
        }
    }
}


function dibuja (){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ladrillo();
    bola();
    Fbase();
    colision();

    if (x >= (canvas.width - radio) || x <= radio) {
        velx = -velx;
    }
    if (y <= radio) {
        vely = -vely;
    }
    else if (y >= (canvas.height - radio)){
        if(x > posicionBase && x < posicionBase + anchoBase) {
            if(y= y- alturaBase){
                vely = -vely;
            }
        }
        else {
            alert("HAS PERDIDO");
            document.location.reload();
        }
    }

    if (pulsacionDerecha && posicionBase < canvas.width-anchoBase) {
        posicionBase = posicionBase + 10;
    }
    else if (pulsacionIzquierda && posicionBase > 0) {
        posicionBase = posicionBase - 10;
    }

    x = x + velx;
    y = y + vely;
}

setInterval(dibuja, 5)