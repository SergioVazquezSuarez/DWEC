// Convierte la matriz de productos en objetos.
export const crearCatalogo = (matriz) => {
    if (!Array.isArray(matriz)) {
        return []
    }

    return matriz.map(fila => ({
        nombre: fila[0],
        categoria: fila[1],
        precio: fila[2],
        stock: fila[3]
    }))
}

// Añade las novedades al final sin modificar el catálogo original.
export const ampliarCatalogo = (catalogo, matrizNovedades) => {
    return catalogo.concat(crearCatalogo(matrizNovedades))
}

// Devuelve los nombres ordenados alfabéticamente.
export const nombresOrdenados = (catalogo) => {
    return catalogo
        .map(producto => producto.nombre)
        .sort((a, b) => a.localeCompare(b))
}

// Ordena por precio y devuelve una copia.
export const ordenarPorPrecio = (catalogo, descendente = false) => {
    const copia = [...catalogo].sort((a, b) => a.precio - b.precio)

    if (descendente) {
        copia.reverse()
    }

    return copia
}

// Devuelve los nombres de los tres productos más baratos.
export const tresMasBaratos = (catalogo) => {
    return ordenarPorPrecio(catalogo).slice(0, 3).map(producto => producto.nombre)
}

// Busca un producto ignorando mayúsculas y minúsculas.
export const buscarProducto = (catalogo, nombre) => {
    return catalogo.find(
        producto => producto.nombre.toLowerCase() === nombre.toLowerCase()
    )
}

// Comprueba si existe un producto usando map e includes.
export const existeProducto = (catalogo, nombre) => {
    const nombres = catalogo.map(producto => producto.nombre.toLowerCase())
    return nombres.includes(nombre.toLowerCase())
}

// Devuelve la posición de un producto.
export const posicionProducto = (catalogo, nombre) => {
    return catalogo.findIndex(
        producto => producto.nombre.toLowerCase() === nombre.toLowerCase()
    )
}

// Devuelve los nombres de los productos agotados.
export const agotados = (catalogo) => {
    return catalogo
        .filter(producto => producto.stock === 0)
        .map(producto => producto.nombre)
}

// Devuelve los productos cuyo precio está entre mínimo y máximo.
export const productosEntre = (catalogo, minimo, maximo) => {
    return catalogo.filter(
        producto => producto.precio >= minimo && producto.precio <= maximo
    )
}

// Calcula el valor total del almacén.
export const valorAlmacen = (catalogo) => {
    return catalogo.reduce(
        (total, producto) => total + producto.precio * producto.stock,
        0
    )
}

// Devuelve el producto más caro.
export const productoMasCaro = (catalogo) => {
    return catalogo.reduce((caro, producto) => {
        return producto.precio > caro.precio ? producto : caro
    })
}

// Cuenta cuántas unidades hay por categoría.
export const unidadesPorCategoria = (catalogo) => {
    return catalogo.reduce((resultado, producto) => {
        if (!resultado[producto.categoria]) {
            resultado[producto.categoria] = 0
        }

        resultado[producto.categoria] += producto.stock
        return resultado
    }, {})
}

// Comprueba si hay algún producto agotado.
export const hayAgotados = (catalogo) => {
    return catalogo.some(producto => producto.stock === 0)
}

// Comprueba que todos los precios son números mayores que cero.
export const preciosValidos = (catalogo) => {
    return catalogo.every(
        producto => typeof producto.precio === 'number' && producto.precio > 0
    )
}

// Convierte un texto de pedido en un objeto.
export const parsearPedido = (texto) => {
    const [cliente, productosTexto] = texto.split('|')

    const lineas = productosTexto.split(';').map(linea => {
        const [nombre, cantidad] = linea.split(':')
        return {
            nombre,
            cantidad: Number(cantidad)
        }
    })

    return { cliente, lineas }
}

// Comprueba que todos los productos existen y tienen stock suficiente.
export const puedeServirse = (catalogo, pedido) => {
    return pedido.lineas.every(linea => {
        const producto = buscarProducto(catalogo, linea.nombre)

        return producto !== undefined && producto.stock >= linea.cantidad
    })
}

// Calcula el precio total de un pedido.
export const totalPedido = (catalogo, pedido) => {
    return pedido.lineas.reduce((total, linea) => {
        const producto = buscarProducto(catalogo, linea.nombre)

        if (!producto) {
            return total
        }

        return total + producto.precio * linea.cantidad
    }, 0)
}

// Devuelve un catálogo nuevo con el stock descontado.
export const servirPedido = (catalogo, pedido) => {
    return catalogo.map(producto => {
        const linea = pedido.lineas.find(
            linea => linea.nombre.toLowerCase() === producto.nombre.toLowerCase()
        )

        if (!linea) {
            return { ...producto }
        }

        return {
            ...producto,
            stock: producto.stock - linea.cantidad
        }
    })
}

// Genera el ticket completo como texto.
export const generarTicket = (catalogo, pedido) => {
    const lineas = pedido.lineas.map(linea => {
        const producto = buscarProducto(catalogo, linea.nombre)
        const subtotal = producto ? producto.precio * linea.cantidad : 0

        return `${linea.cantidad} x ${linea.nombre} = ${subtotal} €`
    })

    return [
        `Cliente: ${pedido.cliente}`,
        ...lineas,
        `TOTAL: ${totalPedido(catalogo, pedido)} €`
    ].join('\n')
}

// Saca el primer pedido de la cola.
export const atenderSiguiente = (cola) => {
    return cola.shift()
}

// Coloca un pedido al principio de la cola.
export const agregarUrgente = (cola, pedido) => {
    return cola.unshift(pedido)
}

// Añade un producto al carrito y guarda la acción.
export const agregarAlCarrito = (carrito, historial, nombre) => {
    carrito.push(nombre)
    historial.push({ accion: 'agregar', nombre })
}

// Quita la primera aparición y guarda dónde estaba.
export const quitarDelCarrito = (carrito, historial, nombre) => {
    const posicion = carrito.indexOf(nombre)

    if (posicion === -1) {
        return false
    }

    carrito.splice(posicion, 1)
    historial.push({ accion: 'quitar', nombre, posicion })

    return true
}

// Deshace la última acción realizada sobre el carrito.
export const deshacer = (carrito, historial) => {
    const accion = historial.pop()

    if (!accion) {
        return false
    }

    if (accion.accion === 'agregar') {
        const posicion = carrito.lastIndexOf(accion.nombre)

        if (posicion !== -1) {
            carrito.splice(posicion, 1)
        }
    } else if (accion.accion === 'quitar') {
        carrito.splice(accion.posicion, 0, accion.nombre)
    }

    return true
}

// Procesa todos los pedidos de la cola.
export const procesarCola = (catalogo, cola) => {
    let catalogoActual = [...catalogo]
    const servidos = []
    const rechazados = []

    while (cola.length > 0) {
        const pedido = atenderSiguiente(cola)

        if (puedeServirse(catalogoActual, pedido)) {
            catalogoActual = servirPedido(catalogoActual, pedido)
            servidos.push(pedido)
        } else {
            rechazados.push(pedido)
        }
    }

    return {
        catalogo: catalogoActual,
        servidos,
        rechazados
    }
}

// Devuelve nombres de productos vendidos sin repetir y ordenados.
export const productosVendidos = (pedidos) => {
    const nombres = pedidos
        .flatMap(pedido => pedido.lineas.map(linea => linea.nombre))

    return nombres
        .filter((nombre, indice) => nombres.indexOf(nombre) === indice)
        .sort((a, b) => a.localeCompare(b))
}

// Crea una línea de texto con el stock de cada producto.
export const graficoStock = (catalogo) => {
    return catalogo
        .map(producto => {
            const barras = new Array(producto.stock).fill('■').join('')
            return `${producto.nombre}: ${barras} (${producto.stock})`
        })
        .join('\n')
}
