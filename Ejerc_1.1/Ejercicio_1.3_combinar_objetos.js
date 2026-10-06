const producto = {
    nombre: 'Auriculares',
    precio: 50
}

const cliente = {
    nombreCliente: 'Ana',
    esPremium: true
}

const pedido = { ...producto, ...cliente }
console.log(pedido)

const cliente2 = {
    nombre: 'Luis'
}

const pedido2 = { ...producto, ...cliente2 }
console.log(pedido2)

// Cuando dos objetos tienen una propiedad con el mismo nombre,
// gana el valor del objeto que aparece el último.
