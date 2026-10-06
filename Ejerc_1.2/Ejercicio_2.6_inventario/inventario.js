// Crea un objeto producto con sus datos.
export function crearProducto(nombre, categoria, precio, stock) {
    return { nombre, categoria, precio, stock }
}

// Filtra los productos que pertenecen a una categoría.
export function filtrarPorCategoria(inventario, categoria) {
    return inventario.filter(producto => producto.categoria === categoria)
}

// Devuelve los productos que no tienen stock.
export function listarProductosAgotados(inventario) {
    return inventario.filter(producto => producto.stock === 0)
}

// Calcula el valor total de todos los productos almacenados.
export function calcularValorTotalInventario(inventario) {
    return inventario.reduce(
        (total, producto) => total + producto.precio * producto.stock,
        0
    )
}

// Muestra un resumen general del inventario.
function resumenInventario(inventario) {
    const categorias = new Set(inventario.map(producto => producto.categoria))
    const valorTotal = calcularValorTotalInventario(inventario)

    console.log(`Número total de productos: ${inventario.length}`)
    console.log(`Número de categorías distintas: ${categorias.size}`)
    console.log(`Valor total: ${valorTotal} €`)
}

export default resumenInventario
