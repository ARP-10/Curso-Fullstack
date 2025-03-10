//Variables
let nombreEjemplo: string = "Alejandra"
let edadEjemplo: number = 27

// Constantes
const PI_EJEMPLO: number = 3.1416;

// TIPOS DE DATOS
// String
let texto: string = "Hola mundo";

// Number
let numeroEntero: number = 10;
let numeroDecimal: number = 10.5;

// Boolean
let booleano: boolean = true;

// Array
let numeros: number[] = [1, 2, 3, 4, 5];

// Tuple
let persona: [string, number] = ['Juan', 30];

// Enum
enum Color {
    Rojo,
    Verde,
    Azul
}
let colorFavorito: Color = Color.Verde;

// Any
let variableIndefinida: any = 4;
variableIndefinida = 'Hola';
variableIndefinida = true;

// Void
function saludoTS(): void {
    console.log('Hola');
}

// Null
let variableNula: null = null;

// Undefined
let variableIndefinida2: undefined = undefined;

// Never
function error(mensaje: string): never {
    throw new Error(mensaje);
}

// OPERADORES ARITMETICOS
console.log("Operadores aritméticos");

const op1: number = 5; 
const op2: number = 8; 

console.log("Números a utilizar: " + op1 + " y " + op2);

console.log("Suma:");
let rtdo: number = op1 + op2;
console.log(rtdo);

console.log("Resta:");
rtdo = op1 - op2;
console.log(rtdo);

console.log("Multiplicación:");
rtdo = op1 * op2;
console.log(rtdo);

console.log("División:");
rtdo = op1 / op2;
console.log(rtdo);

console.log("\n");

// OPERADORES DE COMPARACIÓN
console.log("Operadores de comparación");
console.log('${op1} es igual a ${op2}: ${op1 == op2}');
console.log('${op1} es mayor que ${op2}: ${op1 > op2}');
console.log('${op1} es menor que ${op2}: ${op1 < op2}');
console.log('${op1} es mayor o igual a ${op2}: ${op1 >= op2}');
console.log('${op1} es menor o igual a ${op2}: ${op1 <= op2}');
