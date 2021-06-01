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

document.addEventListener("keydown", pulsa, false);
document.addEventListener("keyup", suelta, false);

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

function dibuja (){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bola();
    Fbase();

    if (x >= (canvas.width - radio) || x <= radio) {
        velx = -velx;
    }
    if (y >= (canvas.height - radio) || y <= radio) {
        vely = -vely;
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

setInterval(dibuja, 1)