console.log("Ejecutando JS...");

const test = document.getElementById('test');
const test2 = document.getElementById('test2');
const display = document.getElementById('display');



if (display.innerHTML == "") {
    test.onclick = () => {
        display.innerHTML = "0";
    }
}
else {
    test.onclick = () => {
        display.innerHTML += "1";  
    }
}


test2.onclick = () => {
    console.log("Click en el boton 2");
    display.innerHTML += "2";
}