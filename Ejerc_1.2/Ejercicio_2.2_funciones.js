// Function Declaration: calcula el área de un rectángulo.
function calcularAreaRectangulo(base = 5, altura = 4) {
    return base * altura
}

// Function Expression: calcula el área de un triángulo.
const calcularAreaTriangulo = function(base = 5, altura = 4) {
    return (base * altura) / 2
}

// Arrow Function: hace la misma operación que la función anterior.
const calcularAreaTrianguloFlecha = (base = 5, altura = 4) => {
    return (base * altura) / 2
}

console.log(calcularAreaRectangulo(10, 5))
console.log(calcularAreaTriangulo(10, 5))
console.log(calcularAreaTrianguloFlecha(10, 5))
