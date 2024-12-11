function generarCodigoProducto() {
    let categoriaProducto = document.getElementById("categoria").value;
    let numeroProducto = parseInt(document.getElementById("numero").value);
    let añoActual = new Date().getFullYear();

    // Verificar si el número ingresado es válido
    if (isNaN(numeroProducto)) {
        document.getElementById("resultado").innerHTML = "Por favor, ingrese un número de producto válido.";
        return;
    }
    let numeroProductoStr = String(numeroProducto).padStart(4, '0');
    let codigoProducto = `${categoriaProducto}-${numeroProductoStr}`;

    document.getElementById("resultado").innerHTML = `Código de producto generado: ${codigoProducto}-${añoActual}`;
}



/*Notas :
el primer paso seria convertir string a numeroInteger mediante parseInt()
//el siguiente paso seria convertir nombre a String()
//padStart(4, '0') agrega ceros al principio hasta que la longitud total de la cadena sea 4.
//getFullYear(); esto devuelve la ultima parte de la fecha (Por ejemplo, si la fecha actual es 11 de diciembre de 2024, getFullYear() devolverá 2024)
*/