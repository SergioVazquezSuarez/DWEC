const usuario = {
    nombre: 'Ana',
    email: 'ana@email.com'
}

const perfil = {
    puesto: 'Programadora',
    empresa: 'Empresa SA'
}

const empleado = {
    ...usuario,
    perfil: {
        ...perfil
    }
}

// ?. evita un error si alguna propiedad intermedia no existe.
const ciudad = empleado.perfil?.direccion?.ciudad

// ?? pone un valor por defecto solo si el resultado es null o undefined.
const ciudadFinal = ciudad ?? 'Ciudad no especificada'

console.log(empleado)
console.log(ciudadFinal)
