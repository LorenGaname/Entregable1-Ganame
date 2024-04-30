// Nombre usuario
let nombre = prompt("Por favor, ingresa tu nombre:");

// Edad usuario
let edad;
do { 
    edad = prompt("Hola " + nombre + ", ¿cuál es tu edad? (Ingrese solo numeros)")
}while (isNaN(edad));

// Genero musical favorito
let generoMusical = prompt("¿Cuál es tu género de música favorito?\nEscribe el número correspondiente:\n1. Rock\n2. Pop\n3. Hip Hop\n4. Jazz\n5. Electrónica");

// Convertir la entrada del género musical a un valor numérico
generoMusical = parseInt(generoMusical);

// Validar la selección del usuario y asignar el género correspondiente
let genero;
switch (generoMusical) {
    case 1:
        genero = "Rock";
        break;
    case 2:
        genero = "Pop";
        break;
    case 3:
        genero = "Hip Hop";
        break;
    case 4:
        genero = "Jazz";
        break;
    case 5:
        genero = "Electrónica";
        break;
    default:
        genero = "Desconocido";
}

// Variable con la info del usuario
let informacionUsuario = {
    nombre: nombre,
    edad: parseInt(edad),
    generoMusical: genero
};

// Info del usuario en consola
console.log("Nombre: " + informacionUsuario.nombre);
console.log("Edad: " + informacionUsuario.edad);
console.log("Género Musical Favorito: " + informacionUsuario.generoMusical);