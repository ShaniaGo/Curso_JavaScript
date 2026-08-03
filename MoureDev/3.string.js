/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto

let miNombre = "Shania";
let miApellido = "Gomez";

console.log("Hola, mi nombre es " + miNombre + " " + miApellido);

// 2. Muestra la longitud de una cadena de texto

let cadena1 = `Hola soy BATA`;

console.log(`la longitud de la cadena ${cadena1} es ${cadena1.length}`);

// 3. Muestra el primer y último carácter de un string

console.log(cadena1[0]);
console.log(cadena1[cadena1.length - 1]);

// 4. Convierte a mayúsculas y minúsculas un string

console.log(cadena1.toLocaleLowerCase());
console.log(cadena1.toLocaleUpperCase());

// 5. Crea una cadena de texto en varias líneas
let superTexto = `lorem ipsum dolor sit amet, consectetur adipiscing elit.
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;

console.log(superTexto);

// 6. Interpola el valor de una variable en un string

console.log(`Hola, mi nombre es ${miNombre} ${miApellido}`);

// 7. Reemplaza todos los espacios en blanco de un string por guiones

console.log(superTexto.replaceAll(" ", "-"));

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(superTexto.includes("ipsum"));

// 9. Comprueba si dos strings son iguales

let cadena2 = "Hola soy BATA";
console.log(cadena1 === cadena2);

// 10. Comprueba si dos strings tienen la misma longitud

console.log(cadena1.length === cadena2.length);