//parte popup:
window.onload = function() {
    setTimeout(function() {
        document.getElementById("myPopup").style.display = "block";
    }, 2000); // El pop-up aparecerá después de 2 segundos (2000 ms)
}

let cadena="3.14";
function ejecutar(){
    let resultado=parseFloat(cadena);
    window.alert(typeof(resultado));
}

function closePopup() {
    document.getElementById("myPopup").style.display = "none";
}