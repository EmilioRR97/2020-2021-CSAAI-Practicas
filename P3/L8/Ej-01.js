console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

canvas.width = 500;
canvas.height = 750;

const ctx = canvas.getContext("2d");

let x = 250;
let y = 740;

let velx = 0.5;
let vely = 1;

ctx.font = "25px Arial";
ctx.fillStyle = 'black'
ctx.fillText("Puntos", 10, 30);

ctx.font = "25px Arial";
ctx.fillStyle = 'black'
ctx.fillText("Vidas", 360, 30);

function update() {

    console.log("test");

    if (x >= (canvas.width - 7.5/2) || x < 7.5/2) {
        velx = -velx;
    }

    if (y >= (canvas.height - 7.5/2) || y < 7.5/2) {
        vely = -vely;
    }

    x = x + velx;
    y = y + vely;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();    
    ctx.arc(x, y, 7.5, 0, 2 * Math.PI);
    ctx.strokeStyle = 'grey';
    ctx.lineWidth = 3;
    ctx.fillStyle = 'lightgrey';

    ctx.stroke()
    ctx.fill()
    ctx.closePath();

    requestAnimationFrame(update);
}

update();