// Suma un número o todos los números de un array.
const sumaFlexible = (x, y) => {
    // Esta función convierte un valor en un número.
    const valorDe = (valor) => {
        if (Array.isArray(valor)) {
            return valor.reduce((total, numero) => total + numero, 0)
        }

        return valor
    }

    return valorDe(x) + valorDe(y)
}

console.log(sumaFlexible(3, 4))
console.log(sumaFlexible([1, 2], 4))
