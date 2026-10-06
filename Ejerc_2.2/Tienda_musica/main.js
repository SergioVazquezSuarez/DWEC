import {
    crearCatalogo,
    ampliarCatalogo,
    nombresOrdenados,
    ordenarPorPrecio,
    tresMasBaratos,
    agotados,
    valorAlmacen,
    unidadesPorCategoria,
    parsearPedido,
    procesarCola,
    productosVendidos,
    graficoStock
} from './tienda.js'

import {
    catalogoMatriz,
    matrizNovedades,
    pedidosTexto
} from './datos.js'

let catalogo = crearCatalogo(catalogoMatriz)
catalogo = ampliarCatalogo(catalogo, matrizNovedades)

const pedidos = pedidosTexto.map(parsearPedido)
const cola = [...pedidos]

console.log('===== CATÁLOGO =====')
console.log(nombresOrdenados(catalogo))
console.log('Tres más baratos:', tresMasBaratos(catalogo))
console.log('Agotados:', agotados(catalogo))
console.log('Unidades por categoría:', unidadesPorCategoria(catalogo))
console.log('Valor del almacén:', valorAlmacen(catalogo), '€')
console.log('Ordenados por precio:', ordenarPorPrecio(catalogo))

console.log('\n===== PEDIDOS =====')
const resultado = procesarCola(catalogo, cola)

console.log('Pedidos servidos:', resultado.servidos.map(pedido => pedido.cliente))
console.log('Pedidos rechazados:', resultado.rechazados.map(pedido => pedido.cliente))

const totalFacturado = resultado.servidos.reduce(
    (total, pedido) => total + (pedido ? Number(
        pedido.lineas.reduce((suma, linea) => {
            const producto = catalogo.find(
                producto => producto.nombre.toLowerCase() === linea.nombre.toLowerCase()
            )
            return suma + (producto ? producto.precio * linea.cantidad : 0)
        }, 0)
    ) : 0),
    0
)

console.log('Total facturado:', totalFacturado, '€')
console.log('Productos vendidos:', productosVendidos(resultado.servidos))
console.log('\n===== STOCK FINAL =====')
console.log(graficoStock(resultado.catalogo))
