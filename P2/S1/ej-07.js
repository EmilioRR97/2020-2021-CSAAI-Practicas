console.log("Ejecutando js...")



console.log("Párrafo test leido. Dice:")
console.log(test.innerHTML)

//-- Leer el párrafo identificado como test
const test = document.getElementById('test')
console.log("Párrafo test leido. Dice:")
console.log(test.innerHTML)

//-- Configurar el manejador para el evento de
//-- pulsación de botón
test.onclick = function () {
  console.log("Click sobre el párrafo...")
}
