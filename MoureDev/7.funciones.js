/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

function suma(a = 0, b = 0 ){
    console.log(a + b);
}

suma(7 + 10)

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
let saveNum = 0;

function numMayor (arr){
    for(i = 0; i < arr.length; i++){
        if(arr[i]<arr[i - 1]){
            saveNum = arr[i - 1];
        } else{
            saveNum = arr[i]
        }
    }
    console.log(`El numero mayor es ${saveNum}`)
}

numMayor([1, 4, 6, 10, 100, 178, 129, 500, 200, 1000, 2343561, 300])




// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
let contador = 0;
let vocales = "aeiou";

function vowels(vocal){
    for(let i = 0; i < vocal.length; i++){
    if(vocales.includes(vocal[i])){
        contador++;
    }
}
console.log (contador)
}

vowels('Paralelepipedo')

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

let arrNuevo = []

function mayusculas(convertir){
    arrNuevo.push(convertir);
    console.log(arrNuevo.toUpperCase());
}

convertir([`shania`, `jeferson`, `alberth`, `austin`]);



// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

// 10. Crea una función que calcule el factorial de un número dado