/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales

let firstArray = [];
firstArray = [`Perro`, `Gato`, `Raton`, `Loro`, `Hijoepotamo`];

console.log(firstArray);
console.log(firstArray[2]);

// 2. Añade dos más. Uno al principio y otro al final

firstArray.push(`Camello`)
firstArray.unshift(`Dinosaurio`)

console.log(firstArray)

// 3. Elimina el que se encuentra en tercera posición
firstArray.splice(2,1);
console.log(firstArray)

// 4. Crea un set que almacene cinco libros

let firstSet = new Set ([`La chica del tren`, `La paciente silenciosa`, `Perdida (Gone Girl)`, `El psicoanalista`, `Misery`])

console.log(firstSet)

// 5. Añade dos más. Uno de ellos repetido

firstSet.add(`El silencio de los corderos`)
firstSet.add(`La verdad sobre el caso Harry Quebert`)
firstSet.add(`La paciente silenciosa`)
console.log(firstSet);

// 6. Elimina uno concreto a tu elección

firstSet.delete(`La chica del tren`);
console.log(firstSet)

// 7. Crea un mapa que asocie el número del mes a su nombre

let firstMap = new Map(
    [
        [1, `enero`],
        [2,`febrero`],
        [3, `marzo`],
        [4, `abril`],
        [5, `mayo`],
        [6, `junio`],
        [7, `julio`],
        [8, `agosto`],
        [9, `septiembre`],
        [10, `octubre`],
        [11, `noviembre`],
        [12, `diciembre`]
    ],

);

console.log(firstMap)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

console.log(firstMap.has(5));
console.log(firstMap.get(5))

// 9. Añade al mapa una clave con un array que almacene los meses de verano

firstMap.set(`verano`, [`junio`, `julio`, `agosto`]);
console.log(firstMap)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let secondArray = [`fresa`, `mango`, `durazno`, `melon`, `guanabana`, `mango`]
console.log(secondArray)


let secondSet = new Set(secondArray);
console.log(secondSet);

let secondMap = new Map();

secondMap.set(`frutas`, secondSet);
console.log(secondMap)

