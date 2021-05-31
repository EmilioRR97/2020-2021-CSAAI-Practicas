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



deslizadorR.oninput = () => {
    
  range_valueR.innerHTML = deslizadorR.value;

  
  ctx.drawImage(img, 0,0);

  
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  
  let data = imgData.data

  
  umbral = deslizadorR.value

  
  for (let i = 0; i < data.length; i+=4) {
    if (data[i] > umbral)
      data[i] = umbral;
  }

  
  ctx.putImageData(imgData, 0, 0);
}

deslizadorG.oninput = () => {
    
    range_valueG.innerHTML = deslizadorG.value;
  
    
    ctx.drawImage(img, 0,0);
  
    
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  
    
    let data = imgData.data
  
    
    umbral = deslizadorG.value
  
    
    for (let i = 1; i < data.length; i+=4) {
      if (data[i] > umbral)
        data[i] = umbral;
    }
  
    
    ctx.putImageData(imgData, 0, 0);
  }

  
  deslizadorB.oninput = () => {
    
    range_valueB.innerHTML = deslizadorB.value;
  
    
    ctx.drawImage(img, 0,0);
  
    
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  
    
    let data = imgData.data
  
    
    umbral = deslizadorB.value
  
    
    for (let i = 2; i < data.length; i+=4) {
      if (data[i] > umbral)
        data[i] = umbral;
    }
  
    
    ctx.putImageData(imgData, 0, 0);
  }
  

console.log("Fin...");