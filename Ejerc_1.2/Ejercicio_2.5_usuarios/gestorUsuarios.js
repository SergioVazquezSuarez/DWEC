// Crea y devuelve un objeto de usuario.
export function crearPerfil(nombre, email, edad) {
    return { nombre, email, edad }
}

// Convierte un usuario en un texto fácil de leer.
function mostrarPerfil(usuario) {
    return `Nombre: ${usuario.nombre}, Email: ${usuario.email}, Edad: ${usuario.edad}`
}

// Comprueba si el usuario tiene 18 años o más.
export function esMayorDeEdad(usuario) {
    return usuario.edad >= 18
}

// Devuelve solamente los usuarios mayores de edad.
export function obtenerMayoresDeEdad(usuarios) {
    return usuarios.filter(esMayorDeEdad)
}

// Calcula la edad media de todos los usuarios.
export function calcularPromedioEdad(usuarios) {
    const suma = usuarios.reduce((total, usuario) => total + usuario.edad, 0)
    return suma / usuarios.length
}

export default mostrarPerfil
