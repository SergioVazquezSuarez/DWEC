// Comprueba si se puede retirar dinero de una cuenta.
function retirarDinero(saldo, cantidad, tieneTarjetaCredito = false) {
    if (saldo >= cantidad) {
        const nuevoSaldo = saldo - cantidad
        console.log(`Retiro exitoso. Saldo restante: ${nuevoSaldo}`)
    } else if (tieneTarjetaCredito) {
        console.log('Saldo insuficiente, pagando con tarjeta de crédito')
    } else {
        console.log('Saldo insuficiente')
    }
}

retirarDinero(100, 40)
retirarDinero(100, 150)
retirarDinero(100, 150, true)
