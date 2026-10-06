import * as tienda from './tienda.js'
import { catalogoMatriz } from './datos.js'

const catalogo = tienda.crearCatalogo(catalogoMatriz)

function comprobar(nombre, resultado) {
    console.log(resultado ? `OK: ${nombre}` : `ERROR: ${nombre}`)
}

comprobar('crearCatalogo', catalogo.length === catalogoMatriz.length)
comprobar('nombresOrdenados', tienda.nombresOrdenados(catalogo).length === catalogo.length)
comprobar('buscarProducto', tienda.buscarProducto(catalogo, 'altavoz')?.nombre === 'Altavoz')
comprobar('existeProducto', tienda.existeProducto(catalogo, 'Tocadiscos') === true)
comprobar('posicionProducto', tienda.posicionProducto(catalogo, 'Tocadiscos') === 0)
comprobar('agotados', tienda.agotados(catalogo).includes('Vinilo Rock'))
comprobar('valorAlmacen', tienda.valorAlmacen(catalogo) > 0)
comprobar('productoMasCaro', tienda.productoMasCaro(catalogo).nombre === 'Altavoz')
comprobar('hayAgotados', tienda.hayAgotados(catalogo) === true)
comprobar('preciosValidos', tienda.preciosValidos(catalogo) === true)

const pedido = tienda.parsearPedido('Lucía|Tocadiscos:1;Vinilo Jazz:2')

comprobar('parsearPedido', pedido.cliente === 'Lucía' && pedido.lineas.length === 2)
comprobar('puedeServirse', tienda.puedeServirse(catalogo, pedido) === true)
comprobar('totalPedido', tienda.totalPedido(catalogo, pedido) === 260)
console.log(tienda.generarTicket(catalogo, pedido))

const carrito = []
const historial = []

tienda.agregarAlCarrito(carrito, historial, 'Altavoz')
tienda.agregarAlCarrito(carrito, historial, 'Vinilo Jazz')
tienda.quitarDelCarrito(carrito, historial, 'Altavoz')
tienda.deshacer(carrito, historial)

console.log('Carrito:', carrito)
console.log('Pruebas terminadas')
