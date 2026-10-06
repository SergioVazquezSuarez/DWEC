import mostrarPerfil, {
    crearPerfil,
    obtenerMayoresDeEdad,
    calcularPromedioEdad
} from './gestorUsuarios.js'

const usuarios = [
    crearPerfil('Ana', 'ana@email.com', 20),
    crearPerfil('Luis', 'luis@email.com', 16),
    crearPerfil('Marta', 'marta@email.com', 25),
    crearPerfil('Pablo', 'pablo@email.com', 17),
    crearPerfil('Sara', 'sara@email.com', 30)
]

const mayores = obtenerMayoresDeEdad(usuarios)

console.log('Usuarios mayores de edad:')

mayores.forEach(usuario => {
    console.log(mostrarPerfil(usuario))
})

const promedio = calcularPromedioEdad(usuarios)
console.log(`La edad promedio de los usuarios es: ${promedio}`)
