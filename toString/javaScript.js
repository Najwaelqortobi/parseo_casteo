function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

Persona.prototype.toString = function() {
    return `<span style="font-size: 1.5rem"> Nombre: ${this.nombre}<br> Edad: ${this.edad}</span>`;
};

function crearPersona() {
    let nombre = document.getElementById("nombre").value;
    let edad = parseInt(document.getElementById("edad").value);
    
    // Crear una nueva instancia de Persona
    let persona = new Persona(nombre, edad);
    
    // Mostrar el resultado en la página
    document.getElementById("resultado").innerHTML = persona.toString();
}