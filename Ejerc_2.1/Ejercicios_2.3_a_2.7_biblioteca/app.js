import {
    agregarLibro,
    obtenerLibros,
    buscarLibro,
    eliminarLibro,
    calcularTotalPaginas,
    ordenarPorPaginas,
    hayLibrosLargos,
    todosSonLibrosCortos
} from './biblioteca.js'

console.log('Biblioteca inicial:')
console.log(obtenerLibros())

agregarLibro({
    id: 11,
    titulo: 'El nombre del viento',
    autor: 'Patrick Rothfuss',
    paginas: 872
})

console.log('Después de añadir un libro:')
console.log(obtenerLibros())

console.log('Libro con id 3:')
console.log(buscarLibro(3))

eliminarLibro(3)
console.log('Después de eliminar el id 3:')
console.log(obtenerLibros())

console.log('Total de páginas:', calcularTotalPaginas())

console.log('Antes de ordenar:')
console.log(obtenerLibros())
ordenarPorPaginas()
console.log('Después de ordenar:')
console.log(obtenerLibros())

console.log('¿Hay libros de más de 500 páginas?', hayLibrosLargos(500))
console.log('¿Todos tienen menos de 1200 páginas?', todosSonLibrosCortos(1200))
