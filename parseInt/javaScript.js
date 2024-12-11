// Parte popup:
window.onload = function() {
    setTimeout(function() {
        document.getElementById("myPopup").style.display = "block";
    }, 2000); // El pop-up aparecerá después de 2 segundos (2000 ms)
}

let cadena = "3";

function ejecutar() {
    let resultado = parseInt(cadena);

    // Verificar si el resultado es un número entero
    let esEntero = Number.isInteger(resultado); // Usar Number.isInteger para verificar

    // Determinar el tipo
    let tipo = esEntero ? "entero" : "no entero"; 

    window.alert(`Tipo: ${typeof(resultado)}, ${tipo}, Valor: ${resultado}`);
}

// Función para cerrar el popup//
function closePopup() {
    document.getElementById("myPopup").style.display = "none";
}
