console.log("Ejecutando JS...");

display = document.getElementById("display")
dot = document.getElementById("dot")
equal = document.getElementById("equal")
clear = document.getElementById("clear")
del = document.getElementById("del")

const ESTADO = {
    INIT: 0,
    OP1: 1,
    OPERATION: 2,
    OP2: 3,
    DOT: false,
} 


let estado = ESTADO.INIT;   

let digitos = document.getElementsByClassName("digito");
let operandos = document.getElementsByClassName("op");


for (i=0; i<digitos.length; i++){
    digitos[i].onclick = (ev) => {
      numeros(ev.target.value);
    }
}

function numeros(ev) {
    if(estado == ESTADO.INIT) {
        display.innerHTML = ev;
        estado = ESTADO.OP1;
    }
    else {
        display.innerHTML += ev;
        if (estado == ESTADO.OPERATION) {
            estado = ESTADO.OP2;
            ESTADO.DOT = false;
        }
    }
}

for (i=0; i<operandos.length; i++){
    operandos[i].onclick = (ev)=> {
        if(estado == ESTADO.OP1){
            display.innerHTML += ev.target.value;
            estado = ESTADO.OPERATION;
            ESTADO.DOT = true;
        }
    }
}

dot.onclick = (ev) => {
    if(ESTADO.DOT){
       
     console.log("Error")
    }
    else{
        display.innerHTML += ev.target.value;
        ESTADO.DOT = true;
    }
}

del.onclick = () => {
    display.innerHTML = display.innerHTML.slice(0,-1);
}

equal.onclick = () => {
    if(estado == ESTADO.OP2){
        display.innerHTML = eval(display.innerHTML);
        estado=ESTADO.OP1;
    }   
}

clear.onclick = () => {
  display.innerHTML = "0";
  estado = ESTADO.INIT;
  ESTADO.DOT = false;
}