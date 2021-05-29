console.log("Ejecutando JS...");

display = document.getElementById("display")
dot = document.getElementById("dot")
equal = document.getElementById("equal")
clear = document.getElementById("clear")
del = document.getElementById("del")


//-- Estados de la calculadora
const ESTADO = {
    INIT: 0,
    OP1: 1,
    OPERATION: 2,
    OP2: 3,
    DOT: false,
}
 
 //-- Variable de estado de la calculadora
 //-- Al comenzar estamos en el estado incial
 let estado = ESTADO.INIT;   

 for (i=0; i<digito.length; i++){
    digito[i].onclick = (ev)=> {
      digito(ev.target.value);
    }
  }
//-- Función de retrollamada de los digitos
function digitos(ev)
{
    //-- Se ha recibido un dígito
    //-- Según en qué estado se encuentre la calculadora
    //-- se hará una cosa u otra

    //-- Si es el primer dígito, no lo añadimos,
    //-- sino que lo mostramos directamente en el display
    if (estado == ESTADO.INIT) {

        display.innerHTML = ev.target.value;

        //-- Pasar al siguiente estado
        estado = ESTADO.OP1;

    } else {
       
        //--En cualquier otro estado lo añadimos
        display.innerHTML += ev.target.value;

        //-- Y nos quedamos en el mismo estado
        //-- Ojo! Este ejemplo sólo implementa el primer
        //-- estado del diagrama. Habría que tener en 
        //-- cuenta el resto... lo debes hacer en tu práctica
    } 
    
}

dot.onclick = (ev) => {
    if(ESTADO.DOT=true){
      console.log("No se pueden poner 2 puntos seguidos");
    }else{
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
}
