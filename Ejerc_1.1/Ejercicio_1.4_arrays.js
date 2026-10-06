const ciudades = ['Madrid', 'Buenos Aires', 'Tokio', 'Nueva York', 'París']

ciudades.push('Roma')

// map crea un nuevo array transformando cada elemento.
const ciudadesMayusculas = ciudades.map(ciudad => ciudad.toUpperCase())

// filter crea un nuevo array con los elementos que cumplen una condición.
const ciudadesFiltradas = ciudades.filter(ciudad => ciudad.length > 6)

console.log(ciudades)
console.log(ciudadesMayusculas)
console.log(ciudadesFiltradas)
