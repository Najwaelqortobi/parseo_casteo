// Parte popup
window.onload = function() {
    setTimeout(function() {
        document.getElementById("myPopup").style.display = "block";
    }, 2000);
}

function ejecutar() {
    let cadena = document.getElementById("inputCadena").value; // Obtener el valor del input
    let resultado = Number(cadena); // Convertir la cadena a string

    // Verificar si el resultado es NaN
    if (isNaN(resultado)) {
        window.alert(`El tipo de dato es: ${typeof(resultado)}`);
    } else {
        window.alert(`El tipo de dato es: ${typeof(resultado)} y el valor es: ${resultado}`);
    }
}

// Bloque para cerrar el popup//
function closePopup() {
    document.getElementById("myPopup").style.display = "none";
}
