// Recibe cualquier cantidad de números y devuelve el mayor.
const maximo = (...numeros) => {
    let mayor = numeros[0]

    for (const numero of numeros) {
        if (numero > mayor) {
            mayor = numero
        }
    }

    return mayor
}

const notas = [7, 9, 5, 10, 6]

// El spread separa el array y pasa sus elementos como argumentos.
console.log(maximo(...notas))
