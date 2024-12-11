    //parte popup:
    window.onload = function() {
        setTimeout(function() {
            document.getElementById("myPopup").style.display = "block";
        }, 2000); // El pop-up aparecerá después de 2 segundos (2000 ms)
    }

    const objetoConvertido=document.querySelector("objetoConvertido");

    const objeto = '{"nombre": "Ana", "edad": 30}';

    let resultado;

    function ejecutar() { 
        resultado = JSON.parse(objeto);
        window.alert(`Tipo: ${typeof(resultado)}`);
    }

    // Bloque para cerrar el popup//
    function closePopup() {
        document.getElementById("myPopup").style.display = "none";
        document.getElementById("myPopupJs").style.display="block";       

    }
