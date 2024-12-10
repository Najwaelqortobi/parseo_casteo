// Parte popup
window.onload = function() {
    setTimeout(function() {
        document.getElementById("myPopup").style.display = "block";
    }, 2000);
}

function ejecutar() {
    let cadena = document.getElementById("inputCadena").value; // Obtener el valor del input
    let resultado = String(cadena); // Convertir la cadena a número
    window.alert(`El tipo de dato es: ${typeof(resultado)}`)};

// Bloque para cerrar el popup
function closePopup() {
    document.getElementById("myPopup").style.display = "none";
}
