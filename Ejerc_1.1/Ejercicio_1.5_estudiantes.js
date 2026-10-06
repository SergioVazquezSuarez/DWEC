const estudiantes = [
    { nombre: 'Ana', apellidos: 'García', calificacion: 8, aprobado: true },
    { nombre: 'Luis', apellidos: 'Pérez', calificacion: 4, aprobado: true },
    { nombre: 'Marta', apellidos: 'López', calificacion: 6, aprobado: true }
]

// map crea una copia de cada estudiante y le añade un id.
const estudiantesConId = estudiantes.map((estudiante, indice) => ({
    ...estudiante,
    id: indice + 1
}))

// filter deja solamente los estudiantes con nota suficiente.
const aprobados = estudiantesConId.filter(estudiante => estudiante.calificacion >= 5)

aprobados.forEach(estudiante => {
    console.log(`¡Felicidades ${estudiante.nombre}, has aprobado con ${estudiante.calificacion}!`)
})

// Comprobamos que aprobado coincide con la nota.
estudiantes.forEach(estudiante => {
    const aprobadoCorrecto = estudiante.calificacion >= 5

    if (estudiante.aprobado !== aprobadoCorrecto) {
        console.log(
            `Incoherencia en el registro de ${estudiante.nombre}: calificación = ${estudiante.calificacion}, aprobado = ${estudiante.aprobado}`
        )
    }
})

console.log(estudiantesConId)
