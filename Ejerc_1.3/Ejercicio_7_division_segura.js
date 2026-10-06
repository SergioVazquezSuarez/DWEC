// Divide dos números y lanza un error si el divisor es cero.
const dividir = (a, b) => {
    if (b === 0) {
        throw new Error('No se puede dividir entre cero')
    }

    return a / b
}

try {
    console.log(dividir(10, 0))
} catch (error) {
    console.log('Error:', error.message)
} finally {
    console.log('Operación finalizada')
}
