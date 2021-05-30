console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

canvas.width = 200;
canvas.height = 100;

const ctx = canvas.getContext("2d");

ctx.font = "25px Arial";
ctx.fillStyle = 'yellow'
ctx.fillText("Texo sólido", 10, 30);

ctx.strokeStyle = 'blue';
ctx.font = "35px Arial";
ctx.fillStyle = 'yellow'
ctx.strokeText("Texto mixto", 5, 80);
ctx.fillText("Texto mixto", 5, 80);