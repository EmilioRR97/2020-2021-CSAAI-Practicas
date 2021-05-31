console.log("Ejecutando JS....")


const canvas = document.getElementById('canvas');
const img = document.getElementById('imagesrc');
const ctx = canvas.getContext('2d');


const deslizadorR = document.getElementById('deslizadorR');
const deslizadorG = document.getElementById('deslizadorG');
const deslizadorB = document.getElementById('deslizadorB');


const range_valueR = document.getElementById('range_valueR');
const range_valueG = document.getElementById('range_valueG');
const range_valueB = document.getElementById('range_valueB');


img.onload = function () {

  canvas.width = img.width;
  canvas.height = img.height;
  
  ctx.drawImage(img, 0,0);

  console.log("Imagen lista...");
};

function color() {
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let data = imgData.data
    ctx.drawImage(img, 0,0);

    range_valueR.innerHTML = deslizadorR.value;
    umbralR = deslizadorR.value

    range_valueG.innerHTML = deslizadorG.value;
    umbralG = deslizadorG.value

    range_valueB.innerHTML = deslizadorB.value;
    umbralB = deslizadorB.value

    for (let i = 0; i < data.length; i+=4) {
        if (data[i] > umbralR)
          data[i] = umbralR;
        if (data[i+1] > umbralG)
        data[i+1] = umbralG;
        if (data[i+2] > umbralB)
        data[i+2] = umbralB;
    }

  ctx.putImageData(imgData, 0, 0);
}

deslizadorR.oninput = () => {
    color();
}

deslizadorG.oninput = () => {
    color();
}

deslizadorB.oninput = () => {
    color();
}

console.log("Fin...");