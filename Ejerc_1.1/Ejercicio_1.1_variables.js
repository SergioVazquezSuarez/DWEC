const nombre = 'Sergio'
let edad = 20
let tieneMascota = true

// edad y tieneMascota se pueden cambiar porque están declaradas con let.
edad = 21
tieneMascota = false

console.log(nombre, typeof nombre)
console.log(edad, typeof edad)
console.log(tieneMascota, typeof tieneMascota)

// Creamos una frase usando Template Strings.
const frase = `${nombre} tiene ${edad} años y ${tieneMascota ? 'tiene' : 'no tiene'} mascota.`
console.log(frase)

// Nota: una variable const no puede ser reasignada.
