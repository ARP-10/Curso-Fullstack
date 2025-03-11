// Palabras clave -> modo estricto
'use strict'

// Variable
let numero = 5
// Para saber de que tipo es la variable
console.log(typeof numero)

// Constante
const PI = 3.1416
console.log(PI)
// Es mejor usar const dado que en general no vamos a reasignar variables

// TIPOS DE DATOS
// String
const nombre = "Alejandra"
// Number
const edad = 25
const altura = 1.75
// Boolean
const esMayor = true

/*
    "Error" NaN: Not a Number
*/

// CONVERSIÓN DE TIPOS
// String a Number
const stringNumber = "5"
console.log(typeof stringNumber)
console.log(typeof parseInt(stringNumber))
console.log(typeof parseFloat(stringNumber))

// Number a String
const NumberString = 5
console.log(typeof NumberString)
console.log(typeof NumberString.toString())

// Comprobar si una varable es igual a otra
const var1 = 5
const var2 = "5"
console.log(var1 == var2) // true
console.log(var1 === var2) // false, aquí compara tambien el tipo de dato 

// OPERADORES ARITMÉTICOS
console.log("Operadores aritméticos")
const num1 = number(5) // Asignamos el tipo number a la variable
const num2 = +8 // De esta forma también se puede asignar number a la variable
    
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
const a = +5
const b = +10

console.log("a AND b (a > 0 && b > 0): " + (a > 0 && b > 0)) // true
console.log("a OR b (a > 0 || b < 0): " + (a > 0 || b < 0)) // true

console.log("\n")

// CONDICIONALES
console.log("Condiciones")
const edadUsuario = +25

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
let nota = +7
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

let cuentaAtras = +10
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
const dia = "Martes"
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

// Función anónima -> IIFE
// El "nombre" de la función es el contenido de la función
(function() {
    console.log("Hola Mundo!")
}) ()

// Función expresión
const sum = function (a, b) {
    return a + b
}

// Función flecha
const saludarFlecha = nombre => {
    console.log("Hola " + nombre)
}

saludarFlecha("Alejandra")

const mutiplicar = (a, b) => a * b

// Función con retorno
function sumar(a, b){
    return a + b
}

// Función con callback
function saludo(nombre, callback) {
    console.log(`Hola, ${nombre}`);
    callback();
}

console.log("\n")

// ARRAYS
console.log("Arrays")

// Declarar un array:
// Array vacío forma 1
const arrayVacio = Array(3)
console.log(arrayVacio)
// Array vacío forma 2
const arrayVacio2 = []  
console.log(arrayVacio2)

const frutas = ["Manzana", "Pera", "Plátano", "Fresa", "Naranja"]
console.log(frutas)
console.log(frutas[2])

// Array clave-valor
const persona = {}
persona["Alejandra"] = 25
persona["Juan"] = 30

console.log(persona)

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

// For normal, es mejor usar el for of
for (let i=0;  i< frutasTotales.length; i++) {
    console.log(frutasTotales[i])
    
}

// For of
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

// OBJETOS
console.log("Objetos")

let objeto = Object()
objeto.nombre = "Alejandra"
objeto.edad = 25
console.log(objeto)

// Promesa
/*
    Una promesa es un objeto que representa el eventual resultado de una operación asincrónica. Puede estar en uno de tres estados:

    Pendiente (Pending): Estado inicial, ni cumplida ni rechazada.

    Cumplida (Fulfilled): La operación se completó con éxito.

    Rechazada (Rejected): La operación falló.
*/

let miPromesa = new Promise((resolve, reject) => {
    let exito = true;

    if (exito) {
        resolve('¡Operación exitosa!');
    } else {
        reject('Hubo un error.');
    }
});

miPromesa
    .then((mensaje) => {
        console.log(mensaje); // '¡Operación exitosa!'
    })
    .catch((error) => {
        console.log(error); // 'Hubo un error.'
    });


// Ejemplo de promesa usando Async/Await
// Función que retorna una promesa que se resuelve después de 1 segundo
function esperaUnSegundo() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('¡Listo!');
        }, 1000);
    });
}

// Función asincrónica que usa await para esperar la resolución de la promesa
async function ejemploBasico() {
    console.log('Esperando...');
    const mensaje = await esperaUnSegundo();
    console.log(mensaje); // Imprime '¡Listo!' después de 1 segundo
}

ejemploBasico();
