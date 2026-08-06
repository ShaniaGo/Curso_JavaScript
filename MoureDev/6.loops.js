// /*
// Clase 30 - Ejercicios: Bucles
// Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
// 

// // NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// // 1. Crea un bucle que imprima los números del 1 al 20

for(let i = 1; i <= 20; i++ ){
    console.log(i);
}

// // 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado


let resul = 0;
for(let i = 1; i <= 100; i++){
    resul = i + resul;

}
    console.log(`El resultado de la suma del 1 al 100 es ${resul}`);


 
// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

for(let i = 1; i <= 50; i++){
   if(i % 2 == 0){
    console.log(i);
   }
}

// // 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

const nombres = [
  "Shania",
  "Jeferson",
  "Camila",
  "Mateo",
  "Valeria",
  "Santiago",
  "Sofia",
  "Lucas",
  "Mariana",
  "Gabriel"
];

let indice = 0;

while(indice < nombres.length){
    console.log(nombres[indice])
    indice++
}

// // 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let contador = 0;
let vocal = "aeiou";
let cadena = "Paralelepipedo";
let arrayCadena = cadena.toLowerCase().split("");

for(let i = 0; i < arrayCadena.length; i++){
    if(vocal.includes(arrayCadena[i])){
        contador++;
    }
}

console.log(contador);
// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

const numeros = [15, 42, 8, 23, 4, 16, 90, 31, 7, 50];
let resultadoMulti = 1;
// USANDO FOR
for(let i = 0; i < numeros.length; i++){
    resultadoMulti = resultadoMulti * numeros[i];
}

console.log(`El resultado de la mulplicacion es ${resultadoMulti}`);

//USANDO WHILE
let indiceWhile = 0;
let multiplicacionResultado = 1;

while(indiceWhile < numeros.length){
    multiplicacionResultado *= numeros[indiceWhile];
    indiceWhile++;
}
console.log(`El resultado usando while es ${multiplicacionResultado}`);

// USANDO DO WHILE

let j = 0;
let resultMulti = 1;

do{
    resultMulti*= numeros[j];
    j++;
} while(j < numeros.length)

console.log(`Este es el resultado usando Do While ${resultMulti}`);

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

const tabla = 5;
let resultado = 0;

for(let i = 1; i <= 10; i++){
    resultado = tabla * i;
    console.log(`5x${i} = ${resultado}`)
}

// 8. Usa un bucle para invertir una cadena de texto

let palabra = "amanecer";
let arrayPalabra = palabra.split("");
let palabraInvertida = [];

for (let indicePalabra = 0; indicePalabra < arrayPalabra.length; indicePalabra++){
    palabraInvertida.unshift(arrayPalabra[indicePalabra]);
}

console.log(arrayPalabra);
console.log(palabraInvertida);


// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

let firstArray = [0, 1];

for(let i = 2; i < 10; i++){
    firstArray[i] = firstArray[i - 2] + firstArray[i - 1]
}
console.log(firstArray)

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let arr = [14, 27, 8, 45, 92, 3, 61, 18, 5, 30];
let arrNew = [];

for(let i = 0; i< arr.length; i++){
    if(arr[i] > 10){
        arrNew.push(arr[i]);
    }
}
console.log(arrNew)