// Devuelve true si la contraseña tiene al menos 8 caracteres.
function esContrasenaValida(contrasena) {
    return contrasena.length >= 8
}

const contrasenas = ['1234', 'miClave2024', 'abc']

// map ejecuta una función sobre cada contraseña.
const resultado = contrasenas.map(esContrasenaValida)

console.log(resultado)
