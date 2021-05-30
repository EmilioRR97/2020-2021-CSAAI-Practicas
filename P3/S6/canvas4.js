console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

canvas.width = 300;
canvas.height = 100;

const ctx = canvas.getContext("2d");

ctx.beginPath();
    //-- Línea horizontal
    ctx.moveTo(10, 80);
    ctx.lineTo(80, 50);

    //-- Línea horizontal y vertical, unidas
    ctx.moveTo(10, 80);
    ctx.lineTo(100,80);
    ctx.lineTo(80,50);

    ctx.strokeStyle = 'blue';
    //-- Cambiar el tamaño de la linea del trazo
    ctx.lineWidth = 4;

    //-- Dibujar el trazo
    ctx.stroke()
ctx.closePath();