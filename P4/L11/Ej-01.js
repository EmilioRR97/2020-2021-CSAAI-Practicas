/* console.log("Ejecutando JS....")

const canvas = document.getElementById('canvas');
const img = document.getElementById('imagesrc')
const ctx = canvas.getContext('2d');

img.onload = function () {

  console.log("Imagen cargada");

  canvas.width = img.width;
  canvas.height = img.height;

  ctx.drawImage(img, 0,0);

  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  let data = imgData.data

  console.log("Tamaño de data: " + data.length)

  npixels = canvas.width * canvas.height
  console.log("Anchura (en pixeles): " + canvas.width)
  console.log("Altura (en pixeles): " + canvas.height)
  console.log("Pixeles totales: " + npixels)

  console.log("Total de datos de la imagen: " + npixels * 4)
};

console.log("Fin..."); */

console.log("Ejecutando JS....")

//-- Obtener elementos del DOM
const canvas = document.getElementById('canvas');
const img = document.getElementById('imagesrc')
const ctx = canvas.getContext('2d');

//-- Función de retrollamada de imagen cargada
//-- La imagen no se carga instantaneamente, sino que
//-- lleva un tiempo. Sólo podemos acceder a ella una vez
//-- que esté totalmente cargada
img.onload = function () {

  //-- Se establece como tamaño del canvas el mismo
  //-- que el de la imagen original
  canvas.width = img.width;
  canvas.height = img.height;

  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img, 0,0);

 //-- Obtener la imagen del canvas en pixeles
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  //-- Obtener el array con todos los píxeles
  let data = imgData.data

  for (let i = 0; i < data.length; i+=4) {
    data[i] = 0; //-- Canal rojo a 0
  }


  ctx.putImageData(imgData, 0, 0);
  console.log("HOllaaaaa");
};

console.log("Fin...");