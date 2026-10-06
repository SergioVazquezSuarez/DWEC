export const libros = [
    { id: 1, titulo: '1984', autor: 'George Orwell', paginas: 328 },
    { id: 2, titulo: 'El Principito', autor: 'Antoine de Saint-Exupéry', paginas: 96 },
    { id: 3, titulo: 'Dune', autor: 'Frank Herbert', paginas: 688 },
    { id: 4, titulo: 'Drácula', autor: 'Bram Stoker', paginas: 418 },
    { id: 5, titulo: 'It', autor: 'Stephen King', paginas: 1138 },
    { id: 6, titulo: 'Hamlet', autor: 'William Shakespeare', paginas: 240 },
    { id: 7, titulo: 'Frankenstein', autor: 'Mary Shelley', paginas: 280 },
    { id: 8, titulo: 'La Odisea', autor: 'Homero', paginas: 350 },
    { id: 9, titulo: 'El Hobbit', autor: 'J.R.R. Tolkien', paginas: 310 },
    { id: 10, titulo: 'Coraline', autor: 'Neil Gaiman', paginas: 176 }
]

// Añade un libro a la colección.
export function agregarLibro(nuevoLibro) {
    libros.push(nuevoLibro)
}

// Devuelve todos los libros.
export function obtenerLibros() {
    return libros
}

// Busca un libro por su id.
export function buscarLibro(id) {
    return libros.find(libro => libro.id === id)
}

// Elimina el libro cuyo id coincide.
export function eliminarLibro(id) {
    const indice = libros.findIndex(libro => libro.id === id)

    if (indice !== -1) {
        libros.splice(indice, 1)
        return true
    }

    return false
}

// Suma las páginas de todos los libros.
export function calcularTotalPaginas() {
    return libros.reduce((total, libro) => total + libro.paginas, 0)
}

// Ordena los libros de menor a mayor número de páginas.
export function ordenarPorPaginas() {
    libros.sort((a, b) => a.paginas - b.paginas)
}

// Comprueba si existe algún libro que supere el límite.
export function hayLibrosLargos(limitePaginas) {
    return libros.some(libro => libro.paginas > limitePaginas)
}

// Comprueba si todos los libros están por debajo del límite.
export function todosSonLibrosCortos(limitePaginas) {
    return libros.every(libro => libro.paginas < limitePaginas)
}
