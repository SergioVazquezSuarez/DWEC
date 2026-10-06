const productos = [
    { nombre: 'Ratón', precio: 15, stock: 0 },
    { nombre: 'Teclado', precio: 25, stock: 8 },
    { nombre: 'Monitor', precio: 120, stock: 3 }
]

// filter selecciona los productos con stock y map obtiene sus nombres.
const disponibles = productos
    .filter(producto => producto.stock > 0)
    .map(producto => producto.nombre)

// map convierte cada nombre en una etiqueta HTML.
const listaHtml = '<ul>' + disponibles
    .map(nombre => `<li>${nombre}</li>`)
    .join('') + '</ul>'

console.log(disponibles)
console.log(listaHtml)
