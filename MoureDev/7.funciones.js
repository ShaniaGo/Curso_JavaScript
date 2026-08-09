/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

function suma(a = 0, b = 0 ){
    return(a + b);
}

console.log(suma(7 , 10))

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos


function numMayor (arr){

    let saveNum = arr[0];
    for(i = 0; i < arr.length; i++){
        if(arr[i]>saveNum){
            saveNum = arr[i];
        }
    }
    console.log(`El numero mayor es ${saveNum}`)
}

numMayor([1, 4, 6, 10, 100, 178, 129, 500, 200, 1000, 300])


// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

let vocales = "aeiou";

function vowels(vocal){
    let contador = 0;
    let word = vocal.toLowerCase();
    
    for(let i = 0; i < word.length; i++){
    if(vocales.includes(word[i])){
        contador++;
    }
}
console.log (contador)
}

vowels('Sombrilla')

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas


function mayusculas(convertir){
    let arrNuevo = [];

    for(i = 0; i < convertir.length; i++){
        arrNuevo.push(convertir[i].toUpperCase());
        
    }
    console.log(arrNuevo)
}

mayusculas(["shania", "jeferson", "alberth", "austin"]);

//5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function numPrimos(num){
    if(num <= 1){
        return false;
    }

    let divisores = 0;

    for(i = 1; i <= num; i++){
        if(num%i==0){
            divisores++;
        }
    }

    return divisores==2;
}

if(numPrimos(7)){
console.log("es primo")
} else {
    console.log("es compuesto")
}

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
function elemComunes(arr1, arr2){
    let elementosComunes = [];

    for(let i = 0; i < arr1.length; i++){
        if(arr2.includes(arr1[i])){
            elementosComunes.push(arr1[i]);
            //console.log(elementosComunes);
        }
    }

    console.log(elementosComunes);
}

elemComunes(["hola", "hermana", "pequeno", "juego", "shania"], ["hola", "shania", "amor", "juego", "animal", "hermana"])

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

function sumaPares(arrNum){

    let resultado = 0;

    for(i = 0; i < arrNum.length; i++){
        if(arrNum[i]%2 == 0){
            resultado += arrNum[i];
            
        }
    }
    console.log(resultado)
}

sumaPares([2, 4, 5, 10, 23, 49, 16])

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

function cuadradoNum(numero){
    let newArr = [];

    for(i = 0; i < numero.length; i++){
        newArr.push(numero[i]** 2)
    }

    console.log(newArr);
}

cuadradoNum([2, 3, 4, 5])

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

function textoInverso(texto){

    let arrPalabras = texto.split(" ");
    let arrInvertido = arrPalabras.reverse();

    console.log(arrInvertido.join(" "))
   
}

textoInverso("Hola mi nombre es Shania")

// 10. Crea una función que calcule el factorial de un número dado

function factorial(factor){

    let resulFactor = 1;

    for(let i = 1; i <= factor; i++){
        resulFactor *= i;
    }

    console.log(resulFactor);
}

factorial(5);