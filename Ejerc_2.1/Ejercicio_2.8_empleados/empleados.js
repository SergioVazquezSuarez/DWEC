const empleados = [
    { id: 1, nombre: 'Ana', departamento: 'Ventas', salario: 1800 },
    { id: 2, nombre: 'Luis', departamento: 'Informática', salario: 2200 },
    { id: 3, nombre: 'Marta', departamento: 'Ventas', salario: 2000 },
    { id: 4, nombre: 'Pablo', departamento: 'Informática', salario: 2500 }
]

// Añade un empleado.
export function agregarEmpleado(empleado) {
    empleados.push(empleado)
}

// Elimina un empleado por id.
export function eliminarEmpleado(id) {
    const indice = empleados.findIndex(empleado => empleado.id === id)

    if (indice !== -1) {
        empleados.splice(indice, 1)
    }
}

// Devuelve los empleados de un departamento.
export function buscarPorDepartamento(departamento) {
    return empleados.filter(
        empleado => empleado.departamento === departamento
    )
}

// Calcula el salario medio.
export function calcularSalarioPromedio() {
    const suma = empleados.reduce(
        (total, empleado) => total + empleado.salario,
        0
    )

    return suma / empleados.length
}

// Devuelve una copia ordenada de mayor a menor salario.
export function obtenerEmpleadosOrdenadosPorSalario() {
    return [...empleados].sort((a, b) => b.salario - a.salario)
}
