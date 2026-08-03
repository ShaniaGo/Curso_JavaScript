/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética

let a = 10;
let b = 5;

let suma = a + b;
let resta = a - b;
let multiplicacion = a * b;
let division = a / b;
let modulo = a % b;
let potencia = (a ** b);

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

// let asignacionSuma = a += b;
// let asignacionResta = a -= b;
// let asignacionMultiplicacion = a *= b;
// let asignacionDivision = a /= b;
// let asignacionModulo = a %= b;
// let asignacionPotencia = a **= b;

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log(5 > 3);
console.log(5 == 5);
console.log(10 < 20);
console.log(15 >= 1);
console.log(a ,'>=', b, ' -> ', a >= b);

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(5 < 3);
console.log(5 != 5);
console.log(10 > 20);
console.log(15 <= 1);
console.log(a ,'<', b, ' -> ', a < b);

// 5. Utiliza el operador lógico and

console.log(a > 5 && b < 10);

// 6. Utiliza el operador lógico or

console.log(a > 5 || b < 10);   

// 7. Combina ambos operadores lógicos

console. log((a > 5 && b < 10) || (a < 5 && b > 10));

// 8. Añade alguna negación

console.log(5 != 120);

// 9. Utiliza el operador ternario
let resultado = (a > b) ? 'a es mayor que b' : 'a es menor que b';

console.log( resultado);

// 10. Combina operadores aritméticos, de comparación y lógicas
console.log((a + b) > (a - b) && (a * b) < (a / b));