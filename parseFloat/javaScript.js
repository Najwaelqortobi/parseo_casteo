//parte popup:
window.onload = function() {
    setTimeout(function() {
        document.getElementById("myPopup").style.display = "block";
    }, 2000); // El pop-up aparecerá después de 2 segundos (2000 ms)
}

let cadena="3.14";
function ejecutar(){
    let resultado = parseFloat(cadena); // Convertir la cadena a float

    // Verificar si es un float//
    let esFloat = resultado % 1 !== 0; // Si hay parte decimal
    let tipo = esFloat ? "float" : "entero"; // Determinar el tipo con ternario

    window.alert(`Tipo: ${typeof(resultado)}, ${tipo}, Valor: ${resultado}`);
}

function closePopup() {
    document.getElementById("myPopup").style.display = "none";
}
//