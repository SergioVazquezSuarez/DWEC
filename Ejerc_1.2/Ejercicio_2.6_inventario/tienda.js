import resumenInventario, {
    crearProducto,
    filtrarPorCategoria,
    listarProductosAgotados,
    calcularValorTotalInventario
} from './inventario.js'

const inventario = []

inventario.push(crearProducto('Televisor', 'Electrónica', 500, 3))
inventario.push(crearProducto('Camiseta', 'Ropa', 20, 10))
inventario.push(crearProducto('Pantalón', 'Ropa', 35, 5))
inventario.push(crearProducto('Libro JavaScript', 'Libros', 25, 8))
inventario.push(crearProducto('Libro HTML', 'Libros', 20, 0))
inventario.push(crearProducto('Auriculares', 'Electrónica', 40, 4))

console.log('Productos de Ropa:')
console.log(filtrarPorCategoria(inventario, 'Ropa'))

console.log('Productos agotados:')
console.log(listarProductosAgotados(inventario))

console.log('Valor total:')
console.log(calcularValorTotalInventario(inventario), '€')

console.log('Resumen:')
resumenInventario(inventario)
