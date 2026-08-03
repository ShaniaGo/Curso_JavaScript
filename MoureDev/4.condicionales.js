/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let nombre = `Shania`;

if (nombre === `Shania`) {
    console.log(`Hola ${nombre}`);
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let usuario = `Shania`;
let contraseña = `1234`;

if(usuario === `Shania` && contraseña === `1234`) {
    console.log(`Welcome ${usuario}`);
} else {
    console.log(`Usuario o contraseña incorrectos`);
}
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let num = 7;

if(num > 0){
    console.log(`El numero ${num} es positivo`);
} else if(num < 0){
    console.log(`El numero ${num} es negativo`);
} else {
    console.log(`El numero es cero`);
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let edad = 18;

if (edad >= 18){
    console.log(`Puede ejercer su derecho al sufragio`);
} else{
    let anosFaltantes = 18 - edad;
    console.log(`No puede ejercer su derecho al voto, le faltan ${anosFaltantes} años`);
}
// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

let edad2 = 20;
let tipoPersona = edad2 >= 18 ? `adulto` : `menor`;
console.log(`La persona es un ${tipoPersona}`);

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes = `Febrero`

if(mes === `Diciembre` || mes ===`Enero` || mes === `Febrero`){
    console.log(`Estamos en INVIERNO`);
} else if ( mes === `Marzo` || mes === `Abril` || mes === `Mayo`){
    console.log(`Estamos en PRIMAVERA`);
} else if (mes === `Junio` || mes === `Julio` || mes === `Agosto`){
    console.log(`Estamos en VERANO`);
} else {
    console.log(`Estamos en OTOÑO`);
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

if(mes === `Enero` || mes === `Marzo` || mes === `Mayo` || mes === `Julio` || mes === `Agosto` || mes === `Octubre` || mes === `Diciembre`) {
    console.log(`El mes de ${mes} tiene 31 días`);
} else if (mes === `Abril` || mes === `Junio` || mes === `Septiembre` || mes === `Noviembre`) {
    console.log(`El mes de ${mes} tiene 30 días`);
} else if (mes === `Febrero`){
    console.log(`El mes de ${mes} tiene 28 días`);
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let idioma = `español`;

switch(idioma){
    case `español`:
        console.log(`Hola`);
        break;
    case `ingles`:
        console.log(`Hello`);
        break;
    case `frances`:
        console.log(`Bonjour`);
        break;
    default:
        console.log(`Idioma no reconocido`);
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6

switch(mes){
    case `Diciembre`:
    case `Enero`:
    case `Febrero`:
        console.log(`Estamos en Invierno`);
        break;
    case `Marzo`:
    case `Abril`:
    case `Mayo`:
        console.log(`Estamos en Primavera`)
        break;
    case `Junio`:
    case `Julio`:
    case `Agosto`:
        console.log(`Estamos en Verano`)
        break;
    case `Septiembre`:
    case `Octubre`:
    case `Noviembre`:
        console.log(`Estamos en Otoño`);
        break
    default:
        console.log(`Registre un mes por favor`);
};

// 10. Usa un switch para hacer de nuevo el ejercicio 7

switch(mes){
    case `Enero`:
    case `Marzo`:
    case `Mayo`:
    case `Julio`:
    case `Agosto`:
    case `Octubre`:
    case `Diciembre`:
        console.log(`El mes de ${mes} tiene 31 días`);
        break;
    case `Abril`:
    case `Junio`:
    case `Septiembre`:
    case `Noviembre`:
        console.log(`El mes de ${mes} tiene 30 días`);
        break;
    case `Febrero`:
        console.log(`El mes de ${mes} tiene 28 días`);
        break;
    default:
        console.log(`Registre un mes por favor`);
};