console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

canvas.width = 300;
canvas.height = 100;

const ctx = canvas.getContext("2d");

ctx.beginPath();

    ctx.arc(100, 50, 30, 0, 2 * Math.PI);
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 3;
    ctx.fillStyle = 'yellow';


    ctx.stroke()
    ctx.fill()
ctx.closePath();