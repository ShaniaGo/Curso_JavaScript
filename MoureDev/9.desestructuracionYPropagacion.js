/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 

let array1 = ["shania", "jeferson", "austin", "matias"];

let [nombre1, nombre2] = array1;

console.log(nombre1);
console.log(nombre2);

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

let [nombre3 = 0, nombre4 = 0, nombre5 = 0, nombre6 = 0, nombre7 = 0, nombre8 = 0] = array1

console.log(nombre3)
console.log(nombre4)
console.log(nombre5)
console.log(nombre6)
console.log(nombre7)
console.log(nombre8)


// 3. Usa desestructuración para extraer dos propiedades de un objeto

let persona1 = {
    nombre: "Ernesto",
    apellido: "Garcia",
    edad: 78,
    paisDomicilio: "Alemania"
}

let {nombre, edad} = persona1;

console.log(nombre);
console.log(edad);


// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas a nuevas variables con nombres diferentes

let {nombre : miNombre, paisDomicilio : paisResidencia} = persona1;

console.log(miNombre);
console.log(paisResidencia)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

let persona2 = {
    nombre: "Edgar",
    apellido: "Ramirez",
    edad: 50,
    paisDomicilio: "Reino Unido",
    hijos: {
        nombrePrimerHijo: "Arnoldo",
        apellidoPrimerHijo: "Ramirez",
        nombreSegundoHIjo: "Jeremias",
        apellidoSegundoHijo: "Ramirez",
        edadPrimero: 17,
        edadSegundo: 9
    }
}

let {nombre: nombrePadre, hijos: {nombrePrimerHijo : primerHijo, nombreSegundoHIjo: segundoHijo}} = persona2;

console.log(nombrePadre);
console.log(primerHijo);
console.log(segundoHijo)

// 6. Usa propagación para combinar dos arrays en uno nuevo

let firstArray = [`Perro`, `Gato`, `Raton`, `Loro`, `Hijoepotamo`];
let secondArray = [`Ornitorrinco`, `Terodactilo`, `Tiranosaurio Rex`]
let unionAnimales = [...firstArray, ...secondArray];

console.log(unionAnimales)

// 7. Usa propagación para crear una copia de un array

let copiaAnimales = [...unionAnimales]
console.log(copiaAnimales)

// 8. Usa propagación para combinar dos objetos en uno nuevo

let persona3 = {
    nombre: "Salomon",
    apellido: "Perez",
}

let paises = {
    pais: "Venezuela",
    capital: "Distrito Capital"
}
let unionObjetos = {...persona3, ...paises}

console.log(unionObjetos)

// 9. Usa propagación para crear una copia de un objeto

let copiaPersona1 = {...persona1};
console.log(copiaPersona1)

// 10. Combina desestructuración y propagación

let [animal1, , animal3] = secondArray
let personasConMascotas = {...persona2, animal1}

console.log(personasConMascotas)

