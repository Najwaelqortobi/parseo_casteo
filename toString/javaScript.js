function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

//cuando se llama al toString en una instancia de persona se ejecutara esta funcion
//hemos puesto toString aqui para sobrescribir el metodo toStringque devuelve [object Object]
Persona.prototype.toString = function() {
    return `<span style="font-size: 1.5rem"> Nombre: ${this.nombre}<br> Edad: ${this.edad}</span>`;
};

function crearPersona() {
    let nombre = document.getElementById("nombre").value;
    let edad = parseInt(document.getElementById("edad").value);
    
    // Crear una nueva instancia de Persona
    let personaNueva = new Persona(nombre, edad);
    
    // Mostrar el resultado en la página
    document.getElementById("resultado").innerHTML = personaNueva.toString();
}

//prototype: para que las instancias de Persona hereden métodos y propiedades de persona incluido el metodo toString
//