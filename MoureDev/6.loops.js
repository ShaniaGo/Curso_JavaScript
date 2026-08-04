/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

/*for(let i = 1; i <= 20; i++ ){
    console.log(i);
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado


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

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

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

let i = 0;

while(i < nombres.length){
    console.log(nombres[i])
    i++
}
*/
// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let contador = 0;
let vocal = "aeiou"
let cadena = "Paralelepipedo";
let arrayCadena = cadena.split("");

//console.log(arrayCadena)

for(let i = 1; i < arrayCadena.length; i++){
    if(vocal.includes(arrayCadena[i])){
        contador++
    }
}

console.log(contador);
// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

// 8. Usa un bucle para invertir una cadena de texto

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10