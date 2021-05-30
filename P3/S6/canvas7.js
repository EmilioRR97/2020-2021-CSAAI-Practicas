console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

canvas.width = 400;
canvas.height = 400;

const ctx = canvas.getContext("2d");

var logo = document.getElementById("logo-urjc");

logo.onload = ()=> {
  ctx.drawImage(logo, 15,18);
}