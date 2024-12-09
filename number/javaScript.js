// Parte popup
window.onload = function() {
    setTimeout(function() {
        document.getElementById("myPopup").style.display = "block";
    }, 2000);
}

function ejecutar() {
    let cadena = document.getElementById("inputCadena").value;
    let resultado;
    switch (cadena) {
        case "3.14":
            resultado = Number(cadena);
            window.alert(`El tipo de dato es: ${typeof(resultado)}`);
            break;
        case "123abc":
            resultado = Number(cadena);
            window.alert(`El tipo de dato es: ${typeof(resultado)} y el valor es: ${resultado} (NaN)`);
            break;
        case "15":
            resultado = Number(cadena);
            window.alert(`El tipo de dato es: ${typeof(resultado)} y el valor es: ${resultado}`);
            break;
        default:
            resultado = Number(cadena);
            window.alert(`El tipo de dato es: ${typeof(resultado)} y el valor es: ${resultado}`);
            break;
    }
}

// Bloque para cerrar el popup
function closePopup() {
    document.getElementById("myPopup").style.display = "none";
}
