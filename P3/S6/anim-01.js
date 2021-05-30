console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

canvas.width = 1000;
canvas.height = 500;

const ctx = canvas.getContext("2d");

let x = 0;
let y = 10;

let velx = 8;
let vely = 2;

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