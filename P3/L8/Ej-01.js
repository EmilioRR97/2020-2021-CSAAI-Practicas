console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

canvas.width = 500;
canvas.height = 1000;

const ctx = canvas.getContext("2d");

let x = 250;
let y = 10;

let velx = 0.5;
let vely = 1;

ctx.font = "25px Arial";
ctx.fillStyle = 'yellow'
ctx.fillText("Texo sólido", 10, 30);

ctx.strokeStyle = 'blue';
ctx.font = "35px Arial";
ctx.fillStyle = 'yellow'
ctx.strokeText("Texto mixto", 5, 80);
ctx.fillText("Texto mixto", 5, 80);

function update() 
{
  console.log("test");

  if (x >= (canvas.width - 20) || x < 0) {
    velx = -velx;
  }

  if (y >= (canvas.height - 20) || y < 0) {
    vely = -vely;
  }

  x = x + velx;
  y = y + vely;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
    ctx.rect(x, y, 20, 20);

    ctx.fillStyle = 'red';

    ctx.fill();

    ctx.stroke()
  ctx.closePath();

  requestAnimationFrame(update);
}

update();