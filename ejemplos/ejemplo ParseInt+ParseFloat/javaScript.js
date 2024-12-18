function calcularPrestamo() {
    let monto = parseFloat(document.getElementById("loanAmount").value);
    let tasa = parseFloat(document.getElementById("interestRate").value);
    let plazo = parseInt(document.getElementById("loanTerm").value);
    let caja = document.getElementById("resultado");
    //si no es un number
    if (isNaN(monto) || isNaN(tasa) || isNaN(plazo)) {
        document.getElementById("resultado").innerHTML = "Por favor, ingrese valores numéricos válidos.";
        return; 
    }

    let tasaMensual = tasa / 100 / 12;
    let plazoPagos = plazo * 12;
    let pagoMensual = (monto * tasaMensual * Math.pow(1 + tasaMensual, plazoPagos)) / (Math.pow(1 + tasaMensual, plazoPagos) - 1);

    caja.innerHTML = `Pago mensual estimado: ${pagoMensual.toFixed(2)}€`;
}

/*Nota : parseFloat() se usa para convertir el monto del préstamo y la tasa de interés de strings a números decimales. Esto es crucial porque estos valores pueden contener decimales.
parseInt() se utiliza para el plazo del préstamo, ya que esperamos un número entero de años.*/
//Math.pow() en JavaScript para calcular una potencia.
//toFixed(2): Redondear un número a una cantidad específica de decimales//
