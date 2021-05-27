console.log("Ejecutando JS...");

const botones = document.getElementsByClassName("digito")
display = document.getElementById("display")
boton0 = document.getElementById("boton0")
boton1 = document.getElementById("boton1")
boton2 = document.getElementById("boton2")
boton3 = document.getElementById("boton3")
boton4 = document.getElementById("boton4")
boton5 = document.getElementById("boton5")
boton6 = document.getElementById("boton6")
boton7 = document.getElementById("boton7")
boton8 = document.getElementById("boton8")
boton9 = document.getElementById("boton9")
add = document.getElementById("add")
sub = document.getElementById("sub")
mult = document.getElementById("mult")
div = document.getElementById("div")
equal = document.getElementById("equal")
clear = document.getElementById("clear")
del = document.getElementById("del")
dot = document.getElementById("dot")

function digito(value)
{
  console.log("Valor: " + value);
}

for (let boton of botones) {

  boton.onclick = (ev) => {
    digito(ev.target.value)
  }
}

