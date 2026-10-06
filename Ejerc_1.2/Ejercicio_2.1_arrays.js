const numeros = [2, 5, 8, 11, 14, 20]

// map crea un array con el doble de cada número.
const dobles = numeros.map(numero => numero * 2)

// filter deja solamente los números pares.
const pares = numeros.filter(numero => numero % 2 === 0)

for (const numero of pares) {
    console.log(numero)
}

console.log('Dobles:', dobles)
