// Suma dos números.
const suma = (a, b) => a + b

// Resta dos números.
const resta = (a, b) => a - b

// Calcula una potencia y no permite exponentes negativos.
const potencia = (base, exponente) => {
    if (exponente < 0) {
        throw new Error('El exponente no puede ser negativo')
    }

    return base ** exponente
}

// Recibe una operación y la ejecuta con los dos números.
const aplicarOperacion = (a, b, operacion) => operacion(a, b)

console.log(aplicarOperacion(5, 3, suma))
console.log(aplicarOperacion(5, 3, resta))
console.log(aplicarOperacion(2, 3, potencia))

try {
    console.log(aplicarOperacion(2, -1, potencia))
} catch (error) {
    console.log('Error:', error.message)
}
