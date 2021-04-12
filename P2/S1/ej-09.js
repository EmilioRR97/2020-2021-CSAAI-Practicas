const test3 = document.getElementById('test3')

const test2 = document.getElementById('test2')

const test1 = document.getElementById('test1')

//-- Configurar el manejador para el evento de
//-- pulsación de botón
test2.onclick = function () {
  console.log("Click sobre el párrafo 2...")
  test1.innerHTML = "¡TEXTO CAMBIADO!"
}

test3.onclick = function () {
    console.log("Click sobre el botón...")
    test2.innerHTML = "Ahora no puedes ver lo de antes jeje"
}