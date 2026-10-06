import {
    agregarEmpleado,
    eliminarEmpleado,
    buscarPorDepartamento,
    calcularSalarioPromedio,
    obtenerEmpleadosOrdenadosPorSalario
} from './empleados.js'

agregarEmpleado({
    id: 5,
    nombre: 'Sara',
    departamento: 'Ventas',
    salario: 2100
})

agregarEmpleado({
    id: 6,
    nombre: 'Diego',
    departamento: 'Informática',
    salario: 2700
})

console.log('Informática:')
console.log(buscarPorDepartamento('Informática'))

console.log('Salario promedio:')
console.log(calcularSalarioPromedio())

console.log('Empleados ordenados por salario:')
console.log(obtenerEmpleadosOrdenadosPorSalario())

eliminarEmpleado(1)

console.log('Después de eliminar el empleado 1:')
console.log(obtenerEmpleadosOrdenadosPorSalario())
