console.log("Ejecutando JS...");

test.onclick = () => {
    console.log("Click en el boton!");
    test.outerHTML += "" + ("Esto es un párrafo");
}