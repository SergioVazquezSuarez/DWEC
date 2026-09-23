const coche = {
   marca: "Mercedes",
   modelo: "Benz",
   año: "2019",
   estaDisponible: false
}
const {marca, modelo} = coche
console.log(marca, modelo)
coche.estaDisponible = true
coche.color = "azul"
delete coche.año 
console.log(coche)
