// Crea un usuario. Si no se indica rol, usa 'alumno'.
const crearUsuario = (nombre, rol = 'alumno') => ({
    nombre,
    rol
})

console.log(crearUsuario('Ana'))
console.log(crearUsuario('Luis', 'admin'))
