//parte popup:
window.onload = function() {
    setTimeout(function() {
        document.getElementById("myPopup").style.display = "block";
    }, 2000); // El pop-up aparecerá después de 2 segundos (2000 ms)
}


let cadena="15";

function ejecutar(){
    let resultado=parseInt(cadena);
    window.alert(`Tipo: ${typeof(resultado)}, Es entero: ${Number.isInteger(resultado)}`);}

// Bloque para cerrar el popup
function closePopup() {
    document.getElementById("myPopup").style.display = "none";
}