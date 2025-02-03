// Variable
let numero = 5
// Constante
const PI = 3.1416

// TIPOS DE DATOS
// String
let nombre = "Alejandra"
// Number
let edad = 25
let altura = 1.75
// Boolean
let esMayor = true

// OPERADORES ARITMÉTICOS
console.log("Operadores aritméticos")
let num1 = 5
let num2 = 8

console.log("Números a utilizar: " + num1 + " y " + num2)

console.log("Suma:") 
let resultado = num1 + num2
console.log(resultado)

console.log("Resta:")
resultado = num1 - num2
console.log(resultado)

console.log("Multiplicación:")
resultado = num1 * num2
console.log(resultado)

console.log("División:")
resultado = num1 / num2
console.log(resultado)

console.log("\n")

// OPERADORES DE COMPARACIÓN
console.log("Operadores de comparación")
console.log(num1 + " es igual a " + num2 + ": " + (num1 == num2))
console.log(num1 + " es mayor que " + num2 + ": " + (num1 > num2))
console.log(num1 + " es menor que " + num2 + ": " + (num1 < num2))
console.log(num1 + " es mayor o igual a " + num2 + ": " + (num1 >= num2))
console.log(num1 + " es menor o igual a " + num2 + ": " + (num1 <= num2))

console.log("\n")

// OPERADORES LÓGICOS
console.log("Operadores lógicos")
let a = 5
let b = 10

console.log("a AND b (a > 0 && b > 0): " + (a > 0 && b > 0)) // true
console.log("a OR b (a > 0 || b < 0): " + (a > 0 || b < 0)) // true

console.log("\n")

// CONDICIONALES
console.log("Condiciones")
let edadUsuario = 25

console.log("If")
if(edadUsuario >= 18){
    console.log("Eres mayor de edad")
}

console.log("If-else")
if(edadUsuario >= 18){
    console.log("Eres mayor de edad") 
} else {
    console.log("Eres menor de edad")   
}

console.log("If-else if-else")
let nota = 7
if(nota >= 9){
    console.log("Sobresaliente")
} else if (nota >= 7){
    console.log("Notable")
} else if (nota >= 5){
    console.log("Aprobado")
} else {    
    console.log("Suspenso")
}

console.log("\n")

// BUCLES
console.log("Bucles")
console.log("While")

let cuentaAtras = 10
while(cuentaAtras > 0){
    console.log(cuentaAtras)
    cuentaAtras--
}

console.log("Do-while")
do {
    console.log(cuentaAtras)
} while (cuentaAtras > 0);

console.log("For")
for(let i = 0; i < 10; i++){
    console.log(i)
}

console.log("Switch")
let dia = "Martes"
switch (dia) {
    case "Lunes":
        console.log("Hoy es Lunes");
        break;
    case "Martes":
        console.log("Hoy es Martes");
        break;
    case "Miércoles":
        console.log("Hoy es Miércoles");
        break;
    case "Jueves":
        console.log("Hoy es Jueves");
        break;
    case "Viernes":
        console.log("Hoy es Viernes");
        break;
    case "Sábado":
        console.log("Hoy es Sábado");
        break;
    case "Domingo":
        console.log("Hoy es Domingo");
        break;
    default:
        console.log("Día no válido");
        break;
}

console.log("\n")   

// FUNCIONES
console.log("Funciones")

saludar()
saludarNombre("Alejandra")

// Función sin parámetros
function saludar(){
    console.log("Hola Alejandra!")
}

// Función con parámetros
function saludarNombre(nombre){
    console.log("Hola " + nombre + "!")
}

// Función expresión
const sum = function (a, b) {
    return a + b
}

// Función flecha
const saludarFlecha = nombre => {
    console.log("Hola " + nombre)
}

saludarFlecha("Alejandra")

// Función con retorno
function sumar(a, b){
    return a + b
}

console.log("\n")

// ARRAYS
console.log("Arrays")

// Declarar un array:
const frutas = ["Manzana", "Pera", "Plátano", "Fresa", "Naranja"]
console.log(frutas)
console.log(frutas[2])

// Modificar un elemento
frutas[2] = "Uva"
console.log(frutas)

// Conocer la longitud de un array
console.log(frutas.length)

// .push() añade un elemento al final del array
frutas.push("Mango")
console.log(frutas)

// .pop() elimina el último elemento del array
frutas.pop()
console.log(frutas)

// .shift() elimina el primer elemento del array
frutas.shift()
console.log(frutas)

// .unshift() añade un elemento al principio del array
frutas.unshift("Mango")
console.log(frutas)

// Concatenar arrays
const frutas2 = ["Melón", "Sandía"]
const frutasTotales = frutas.concat(frutas2)
console.log(frutasTotales)

// Iteraciones de arrays
let i = 0 // Índice
while(i < frutas.length){
    console.log(frutas[i])
    i++
}

for (let frutillas of frutasTotales) {
    console.log(frutillas)
}

// Metodos de arrays
// .indexOf() devuelve el índice de un elemento
console.log(frutas.indexOf("Uva"))

// .includes() devuelve true si el elemento está en el array
console.log(frutas.includes("Uva"))

// .some() devuelve true si al menos un elemento cumple la condición
console.log(frutas.some(fruta => fruta === "Uva", "Albaricoque"))

// .every() devuelve true si todos los elementos cumplen la condición
console.log(frutas.every(fruta => fruta === "Uva"))

// .find() devuelve el primer elemento que cumple la condición
console.log(frutas.find(fruta => fruta === "Uva"))

// .findIndex() devuelve el índice del primer elemento que cumple la condición
console.log(frutas.findIndex(fruta => fruta === "Naranja"))

// Ordenar arrays
let arrayNumeros = [5, 3, 8, 1, 9, 2, 7, 4, 6]
arrayNumeros.sort()
console.log(arrayNumeros)