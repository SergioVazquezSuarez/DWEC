const cursos = [
    {
        nombre: 'JavaScript',
        profesor: 'Carlos',
        estudiantes: [
            { nombre: 'Ana', calificacion: 8 },
            { nombre: 'Luis', calificacion: 7 },
            { nombre: 'Marta', calificacion: 9 }
        ]
    },
    {
        nombre: 'HTML',
        profesor: 'Laura',
        estudiantes: [
            { nombre: 'Pablo', calificacion: 6 },
            { nombre: 'Sara', calificacion: 8 },
            { nombre: 'Juan', calificacion: 7 }
        ]
    },
    {
        nombre: 'CSS',
        profesor: 'Pedro',
        estudiantes: [
            { nombre: 'Lucía', calificacion: 9 },
            { nombre: 'David', calificacion: 8 },
            { nombre: 'Nora', calificacion: 3 }
        ]
    },
    {
        nombre: 'Bases de Datos',
        profesor: 'Marta',
        estudiantes: [
            { nombre: 'Álex', calificacion: 5 },
            { nombre: 'Irene', calificacion: 6 },
            { nombre: 'Diego', calificacion: 7 }
        ]
    }
]

// map crea un resumen de cada curso.
// reduce suma las notas de los estudiantes.
const resumenCursos = cursos.map(curso => {
    const suma = curso.estudiantes.reduce((total, estudiante) => {
        return total + estudiante.calificacion
    }, 0)

    const promedio = suma / curso.estudiantes.length

    return {
        nombreCurso: curso.nombre,
        promedioCalificaciones: promedio
    }
})

// filter selecciona los cursos con promedio de 7 o más.
const cursosDestacados = resumenCursos.filter(
    curso => curso.promedioCalificaciones >= 7
)

cursosDestacados.forEach(curso => {
    console.log(
        `El curso ${curso.nombreCurso} tiene un promedio de ${curso.promedioCalificaciones.toFixed(2)} y es considerado destacado.`
    )
})

// some comprueba si existe al menos un estudiante que cumpla la condición.
cursos.forEach(curso => {
    const hayNotaBaja = curso.estudiantes.some(
        estudiante => estudiante.calificacion < 4
    )

    if (hayNotaBaja) {
        console.log(`Atención: En el curso ${curso.nombre} hay estudiantes con calificaciones muy bajas.`)
    }
})
