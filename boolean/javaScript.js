window.onload = function() {
    setTimeout(function() {
        document.getElementById("myPopup").style.display = "block";
    }, 2000);
}

let resultado;

function ejecutar(){
    let cadena= document.getElementById("inputCadena").value;
    let resultado= Boolean(cadena);

    if (cadena === "0" || cadena === "null") {
        resultado = false;
    } else {
        resultado = true;
    }
    window.alert(`Tipo: ${typeof(resultado)}, valor: ${resultado}`);}


function closePopup(){
    document.getElementById("myPopup").style.display="none";
}
